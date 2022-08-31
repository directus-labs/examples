import { Permission } from "@directus/shared/types";
import { directus } from "../directus";

const permissions: Partial<Permission>[] = [
	// expose article images for Public role
	{
		role: null,
		collection: "directus_files",
		action: "read",
		fields: ["*"],
	},
	// SPA examples require read permission to articles & directus_users for Public role
	{
		role: null,
		collection: "articles",
		action: "read",
		fields: ["*"],
	},
	{
		role: null,
		collection: "directus_users",
		action: "read",
		fields: ["*"],
	},
];

export async function seedPermissions() {
	await directus.permissions.createMany(permissions);
}
