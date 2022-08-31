import { User } from "@directus/shared/types";
import { directus } from "../directus";
import { uploadFile } from "../utils/upload-file";

export async function seedUsers() {
	const userAvatarFile = await uploadFile("../assets/ben-haynes.jpg");

	const payload: Partial<User> = {
		avatar: userAvatarFile!.id,
		email: "ben@example.com",
		first_name: "Benjamin",
		last_name: "Haynes",
	};

	const user = await directus.users.createOne(payload);

	return user;
}
