import path from "path";
import importCwd from "import-cwd";
import { AxiosStatic } from "axios";
import FormData from "form-data";
import fse from "fs-extra";
import { env } from "../env";
import { directus } from "../directus";
import { logger } from "../logger";

const axios: AxiosStatic = importCwd("axios") as any;

function getFile(assetPath: string) {
  const fileReadStream = fse.createReadStream(
    path.resolve(process.cwd(), "../shared/seed", assetPath)
  );
  const filename = path.parse(assetPath).name;
  const filenameWithExtension = path.parse(assetPath).base;

  return { fileReadStream, filename, filenameWithExtension };
}

function getFormData(title: string, file: fse.ReadStream) {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("file", file);
  return formData;
}

export async function importFile(
  assetPath: string,
  options?: {
    uploader?: Record<string, any> | null;
    title?: string;
  }
) {
  const { fileReadStream, filename, filenameWithExtension } =
    getFile(assetPath);
  const formData = getFormData(filename, fileReadStream);
  const headers = formData.getHeaders();
  logger.debug(`Importing file ${filenameWithExtension}...`);
  const { data: fileResponse }: { data: Record<string, any> } =
    await axios.post(`${env.url}/files`, formData, {
      headers: { ...headers, Authorization: `Bearer ${directus.auth.token}` },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });
  const importedFile = fileResponse.data;

  if (options) {
    let updateData: Record<string, any> = {};
    if (options.uploader) {
      logger.debug(
        `Setting uploader for ${importedFile.filename_download} as ${options.uploader.email}...`
      );
      updateData.uploaded_by = options.uploader.id;
    }
    if (options.title) {
      const title = options.title.toLowerCase();
      logger.debug(
        `Setting title for ${importedFile.filename_download} as ${title}...`
      );
      updateData.title = title;
    }
    await directus.files.updateOne(importedFile.id, updateData);
  }
  logger.debug(`Importing file ${filenameWithExtension} done.`);

  return importedFile;
}
