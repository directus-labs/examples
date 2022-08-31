import FormData from "form-data";
import { createReadStream } from "fs-jetpack";
import path from "node:path";
import { directus } from "../directus";

type AdditionalProperties = Record<string, any> & {
	title?: string;
	folder?: string;
	uploaded_by?: string;
};

/**
 * Uploads a local asset file with optional non-file properties
 *
 * @param assetPath relative path to the asset that will be uploaded.
 * @param additionalProperties additional properties to append to uploaded file.
 * @returns A promise that resolves to the uploaded file's data.
 * @example
 *
 * await uploadFile("../assets/a-random-file.txt", { title: "My File" }) // uploads the txt file & set title to "My File"
 */
export async function uploadFile(
	assetPath: string,
	additionalProperties: AdditionalProperties = {}
) {
	const fileReadStream = createReadStream(path.resolve(__dirname, assetPath));

	const formData = new FormData();

	// Make sure to define the non-file properties first to ensures they are associated with the correct file.
	for (const key of Object.keys(additionalProperties)) {
		formData.append(key, additionalProperties[key]);
	}

	formData.append("file", fileReadStream);

	const importedFile = await directus.files.createOne(formData, undefined, {
		requestOptions: {
			headers: {
				...formData.getHeaders(),
			},
		},
	});

	return importedFile;
}
