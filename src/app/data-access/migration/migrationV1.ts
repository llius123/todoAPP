export async function migrateV1(connection: any): Promise<void> {
	console.log("MigrationV1");
	console.log("Limpiar tablas");
	await connection.createQueryRunner().query(`
		DROP TABLE todo;
	`);
	await connection.createQueryRunner().query(`
		DROP TABLE evento;
	`);
	console.log("Create table evento");
	await connection.createQueryRunner().query(`
		CREATE TABLE "evento" (
			"id" integer PRIMARY KEY,
			"descripcion" text
		);
	`).catch(
		(error: any) => {
			console.error("Error create table evento");
			console.error(error);
		}
	);
	console.log("Create table todo");
	await connection.createQueryRunner().query(`
		CREATE TABLE todo (
			id integer PRIMARY KEY,
			descripcion text,
			evento_id integer,
			FOREIGN KEY (evento_id) REFERENCES evento (id)
		);
	`).catch(
		(error: any) => {
			console.error("Error create table todo");
			console.error(error);
		}
	);
}