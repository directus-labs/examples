import { Settings } from "@directus/shared/types";
import { directus } from "../directus";
import { uploadFile } from "../utils/upload-file";

export async function seedSettings() {
	const backgroundFile = await uploadFile("../assets/background.jpg");

	const payload: Partial<Settings> = {
		project_name: "Directus Examples",
		public_background: backgroundFile!.id,
		public_note: "Demo instance for Directus Examples",
	};

	await directus.settings.update(payload);
}
