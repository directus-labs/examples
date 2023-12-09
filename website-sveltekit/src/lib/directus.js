import { createDirectus, rest } from "@directus/sdk";
import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from "@directus/sdk";

function getDirectusInstance(fetch) {
  const directus = createDirectus(import.meta.env.VITE_APIURL, { globals: { fetch } }).with(rest());

  directus.updateUser = async (id, query) => directus.request(updateUser(id, query));
  directus.updateItem = async (collection, id, query) => directus.request(updateItem(collection, id, query));
  directus.readItems = async (collection, query) => directus.request(readItems(collection, query));
  directus.readItem = async (collection, id, query) => directus.request(readItem(collection, id, query));
  directus.createItem = async (collection, query) => directus.request(createItem(collection, query));
  directus.deleteItem = async (collection, id) => directus.request(deleteItem(collection, id));

  return directus;
}
export default getDirectusInstance;
