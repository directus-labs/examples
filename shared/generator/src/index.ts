import { execa, ExecaChildProcess } from "execa";
import { dir, remove, write } from "fs-jetpack";
import { Listr } from "listr2";
import { omit } from "lodash-es";
import { performance } from "node:perf_hooks";
import terminate from "terminate/promise";
import { directus } from "./directus";
import { env } from "./env";
import seed from "./seed";

type Ctx = {
	configJsonPath: string;
	uploadsDirectoryPath: string;
	directusProcess?: ExecaChildProcess<string>;
};

function formatTime(ms: number): string {
	if (ms > 1000) return `${(ms / 1000).toFixed(2)}s`;
	return `${Math.round(ms)}ms`;
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function start() {
	const ctx: Ctx = {
		configJsonPath: "./config.json",
		uploadsDirectoryPath: "./uploads",
	};

	const tasks = new Listr<Ctx>(
		[
			{
				title: "Clean up artifacts",
				task: (_, task) =>
					task.newListr([
						{
							title: `Remove existing config.json`,
							task: (ctx, _) => {
								remove(ctx.configJsonPath);
							},
						},
						{
							title: `Remove existing ${env.DB_FILENAME}`,
							task: () => {
								remove(`./${env.DB_FILENAME}`);
							},
						},
						{
							title: `Remove existing uploads`,
							task: (ctx, _) => {
								remove(ctx.uploadsDirectoryPath);
							},
						},
					]),
			},
			{
				title: "Bootstrap",
				options: { persistentOutput: true },
				task: async () =>
					execa("directus", ["bootstrap"], { env }).stdout,
			},
			{
				title: "Apply Examples Schema",
				options: { persistentOutput: true },
				task: async () =>
					execa(
						"directus",
						["schema", "apply", "-y", "./example.yaml"],
						{
							env,
						}
					).stdout,
			},
			{
				title: `Create uploads directory`,
				task: (ctx, _) => {
					dir(ctx.uploadsDirectoryPath);
				},
			},
			{
				title: "Seed",
				task: async (_, task) =>
					task.newListr(
						[
							{
								title: "Start Directus instance",
								options: { persistentOutput: true },
								task: async (ctx, task) => {
									const directusProcess = execa(
										"directus",
										["start"],
										{
											env,
											// prevent it from throwing error when we terminate it after seeding
											reject: false,
										}
									);

									directusProcess.on("close", () => {
										task.output =
											"Directus instance terminated.";
									});

									directusProcess.stdout?.pipe(task.stdout());

									ctx.directusProcess = directusProcess;

									await directusProcess;
								},
							},
							{
								title: "Insert data",
								options: { persistentOutput: true },
								task: async (ctx, task) => {
									task.output =
										"Waiting for Directus instance to start...";
									await sleep(3500);

									if (!ctx.directusProcess?.pid) {
										throw new Error(
											"Failed to start Directus instance."
										);
									}

									try {
										task.output = `Logging in as "${env.ADMIN_EMAIL}"...`;
										await directus.auth.login({
											email: env.ADMIN_EMAIL,
											password: env.ADMIN_PASSWORD,
										});

										task.output = "Seeding settings...";
										await seed.settings();

										task.output = "Seeding users...";
										const user = await seed.users();

										task.output = "Seeding articles...";
										await seed.articles(user);

										task.output = "Seeding permissions...";
										await seed.permissions();

										task.output = "Seeding presets...";
										await seed.presets();

										task.output = `Logging out as "${env.ADMIN_EMAIL}"...`;
										await directus.auth.logout();

										task.output =
											"Terminating Directus instance...";
										// We use "terminate" instead of "directusProcess.kill()" because of nested child processes.
										// Ref https://github.com/sindresorhus/execa/issues/96#issuecomment-776280798
										await terminate(
											ctx.directusProcess.pid,
											"SIGINT",
											{ timeout: 5000 }
										);

										task.output = "Seed completed. ";
									} catch (e) {
										// Terminate directus process if any seed step fails
										await terminate(
											ctx.directusProcess.pid,
											"SIGINT",
											{ timeout: 5000 }
										);
										throw new Error(e.message);
									}
								},
							},
						],
						{ concurrent: true }
					),
			},
			{
				title: `Create config.json`,
				task: (ctx, _) => {
					const envsToOmit = ["SERVE_APP", "MAX_PAYLOAD_SIZE"];
					write(ctx.configJsonPath, omit(env, envsToOmit));
				},
			},
		],
		{
			rendererOptions: {
				collapse: false,
				showTimer: true,
			},
		}
	);

	try {
		console.log(`\n🐇 Starting database generator...\n`);
		const timeStart = performance.now();
		await tasks.run(ctx);
		const timeEnd = performance.now();
		console.log(`\n🚀 Database file generated.`);
		console.log(`\n⌛ Time taken: ${formatTime(timeEnd - timeStart)}\n`);
	} catch (e) {
		console.error(e);
		if (!ctx.directusProcess?.pid) process.exit(1);
		await terminate(ctx.directusProcess.pid, "SIGINT", { timeout: 5000 });
	}
}

start();
