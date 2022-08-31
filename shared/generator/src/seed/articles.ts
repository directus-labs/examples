import { directus } from "../directus";
import { uploadFile } from "../utils/upload-file";

const common = {
	status: "published",
	excerpt:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra iaculis lectus, ut viverra mi dictum sed. Aliquam id dolor directus et sit amet sem condimentum posuere.",
	body: `<p>In hac habitasse platea dictumst. Donec ac viverra urna. Proin eleifend placerat malesuada. Etiam lacinia rhoncus iaculis. Aliquam erat volutpat. Cras nec massa ex. Quisque volutpat semper diam, non viverra ligula gravida nec. Fusce ac ante ultricies, placerat dui vel, convallis mauris. Sed efficitur dictum molestie. Cras non mi quis lectus consequat molestie sed placerat purus. Sed malesuada dui porttitor posuere pharetra. Sed in libero ut lectus aliquet hendrerit.</p>
    <p>Donec tincidunt pharetra dapibus. Proin imperdiet accumsan nulla, a auctor nibh consectetur ac. Aenean maximus eros quis nisl interdum, eget consequat neque consectetur. Vivamus id lacinia nunc. Nulla facilisi. Duis et ornare ante. Phasellus id sapien eu nisl hendrerit egestas at sed lorem. Phasellus vehicula felis urna, in mattis ligula vulputate id. Etiam tempor placerat justo, semper aliquam eros efficitur at. Etiam non est leo. Morbi tempor augue id convallis tempor. Aenean in turpis massa. Donec id convallis enim.</p>
    <p>Praesent enim ex, feugiat et tellus id, euismod feugiat ante. Suspendisse potenti. Aliquam erat volutpat. Suspendisse commodo fringilla facilisis. Cras in sollicitudin ante. Vivamus auctor magna non pretium laoreet. Ut et lobortis turpis, in pharetra turpis. Nullam et fringilla lacus, vel posuere velit. Fusce sagittis ante sed ultricies iaculis. Morbi consectetur ipsum ut sem eleifend, non finibus purus placerat. Donec rhoncus arcu sit amet nibh laoreet blandit. Sed vitae laoreet ipsum. Duis ante velit, egestas imperdiet justo at, venenatis pellentesque leo. Curabitur nulla neque, ultrices vitae ligula vel, faucibus dictum nisl.</p>
    <p>Proin non congue augue. Nulla molestie neque sed est congue, ut consectetur mauris maximus. Sed fermentum diam elit, non euismod leo suscipit quis. Suspendisse consectetur sollicitudin nulla eget ultrices. Suspendisse urna ante, pretium vel orci quis, tempus ultrices tortor. Ut finibus dignissim fringilla. Aliquam at arcu lectus. Quisque eu dictum orci. Aliquam nec efficitur eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut a malesuada neque. Sed non tincidunt enim, at sagittis quam.</p>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent arcu tortor, consectetur ac porttitor at, viverra sed orci. Nunc sit amet lectus mauris. Nullam molestie pretium lobortis. In varius tortor felis, in auctor libero varius at. In non elit aliquam, molestie sem id, fringilla leo. Donec non diam diam. Nulla volutpat mauris sed feugiat cursus. Nam vel mattis felis. Mauris vitae ornare nunc. Duis fermentum auctor diam, nec ornare metus blandit et.</p>`,
};

const titles = [
	"What it's like to work for an amazing company like Monospace?",
	"What is an Open Data Platform?",
	"How Open Data Platforms Democratize Your Data",
	"How Directus Unlocks the True Potential of Your Database",
	"Achieving Data Fluidity Within Your Workflow",
	"Taking Back Control of Your Data, Your Code, and Your Stack",
	"Accelerate Your Time to Market and Increase Business Potential with Directus",
	"Customize, Override, or Extend the Core Platform with Extensions",
	"Overview of the Powerful Interface for Data Exploration and Content Management",
];

function getRandomPublishDate() {
	return new Date(
		new Date().getTime() - Math.floor(Math.random() * 2629743000)
	);
}

export async function seedArticles(user) {
	const articlesCount = 9;

	for (let i = 0; i < articlesCount; i++) {
		const coverImageFile = await uploadFile(
			`../assets/articles/article-${i + 1}.jpg`
		);
		await directus.items("articles").createOne({
			title: titles[i],
			author: user.id,
			cover_image: coverImageFile!.id,
			publish_date: getRandomPublishDate(),
			...common,
		});
	}

	return user;
}
