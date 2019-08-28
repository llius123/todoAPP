import { createConnection } from "typeorm";
import { join } from "path";

import { migrateV1 } from "./migrationV1";

createConnection({
	type: "sqlite",
	database: "database.sqlite",
	synchronize: true,
	logging: false,
	entities: [ join( __dirname + "/../**/*.entity{.ts,.js}" ) ],
}).then(
	(connection: any) => {
		migrateV1(connection);
	}
);
