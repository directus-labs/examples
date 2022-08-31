import { seedSettings } from "./settings";
import { seedArticles } from "./articles";
import { seedUsers } from "./users";
import { seedPermissions } from "./permissions";
import { seedPresets } from "./presets";

export default {
	settings: seedSettings,
	articles: seedArticles,
	users: seedUsers,
	permissions: seedPermissions,
	presets: seedPresets,
};
