import { createConnection, Connection } from "typeorm";
import { join } from "path";

import { migrateV1 } from "./migrationV1";
import { migrateV2 } from "./migrationV2";

createConnection({
	type: "sqlite",
	database: "database.sqlite",
	synchronize: true,
	logging: false,
}).then(
	async (connection: Connection) => {
		await migrateV1(connection);
		await migrateV2(connection);
	}
);
