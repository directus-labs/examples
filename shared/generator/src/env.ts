import { randomUUID } from "node:crypto";

export const env = {
	// common
	KEY: randomUUID(),
	SECRET: randomUUID(),
	TELEMETRY: "false",
	CACHE_ENABLED: "false",
	CACHE_SCHEMA: "false",
	CACHE_PERMISSIONS: "false",
	RATE_LIMITER_ENABLED: "false",
	SERVE_APP: "false",
	MAX_PAYLOAD_SIZE: "10mb",
	PUBLIC_URL: "http://localhost:8055",

	// admin
	ADMIN_EMAIL: "admin@example.com",
	ADMIN_PASSWORD: "d1r3ctu5",

	// sqlite3
	DB_CLIENT: "sqlite3",
	DB_FILENAME: "data.db",
};
