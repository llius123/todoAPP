import { Connection, TableColumn } from "typeorm";

export async function migrateV2(connection: Connection): Promise<void> {
	console.log("MigrationV2");
	console.log("Añadir la columna order a todo");
	await connection.createQueryRunner().query(`
		ALTER TABLE todo
			ADD "orden" int;
	`).catch(
		(error: any) => {
			console.error("Error añadir columna order a todo");
			console.error(error);
		}
	);
}
