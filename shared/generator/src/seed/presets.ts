import { directus } from "../directus";

const presets = [
	{
		collection: "articles",
		layout: "tabular",
		layout_query: {
			tabular: {
				fields: [
					"status",
					"cover_image",
					"title",
					"author",
					"publish_date",
				],
				sort: ["status"],
				page: 1,
			},
		},
		layout_options: {
			tabular: {
				widths: {
					status: 32,
					cover_image: 60,
					title: 505,
					publish_date: 180,
				},
			},
		},
	},
];

export async function seedPresets() {
	await directus.presets.createMany(presets);
}
