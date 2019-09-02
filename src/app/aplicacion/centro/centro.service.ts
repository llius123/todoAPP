import { Injectable } from "@angular/core";
import { DatabaseService } from "src/app/data-access/database.service";
import { Todo } from "src/app/data-access/entities/todo.entity";
import { Connection, Repository } from "typeorm";
import { TodoInterface } from "./centro.models";

@Injectable( {
	providedIn: "root"
} )
export class CentroService {

	public todoRepository: any;

	constructor( private databaserService: DatabaseService ) { }

	public async getAllTodo(): Promise<TodoInterface[]> {
		let resp: TodoInterface[];

		await this.databaserService.connection.then( connection => {
			return connection
				.createQueryRunner().query( `
				SELECT * from todo
			`).then( data => {
					// console.log(data)
					resp = data;
				} );
		} );
		return resp;
	}

	public async createTodo( todo: TodoInterface ): Promise<void> {
		const test = new Todo();
		test.id = todo.id;
		test.orden = todo.orden;
		test.titulo = todo.titulo;
		test.descripcion = todo.descripcion;
		test.evento_id = todo.evento_id;

		await this.databaserService.connection.then( conn => {
			conn.createQueryBuilder()
				.insert()
				.into( Todo )
				.values( {
					id: todo.id,
					titulo: todo.titulo,
					descripcion: todo.descripcion,
					evento_id: todo.evento_id,
					orden: todo.orden
				} ).execute();
		} )
	}

	public async editTodo( todo: TodoInterface ): Promise<void> {
		await this.databaserService.connection.then( conn => {
			conn.createQueryBuilder()
				.update( Todo )
				.set( {
					descripcion: todo.descripcion,
					evento_id: todo.evento_id,
					orden: todo.orden
				} )
				.where( "id = :id", { id: todo.id } )
				.execute();
		} );
	}

	public editAllTodo( todo: TodoInterface[] ): void {
		todo.forEach( async ( element: Todo ) => {
			await this.editTodo( element );
		} );
	}

	public async deleteTodo( todo: TodoInterface ): Promise<void> {
		await this.databaserService.connection.then( conn => {
			conn.createQueryBuilder()
				.delete()
				.from( Todo )
				.where( "id = :id", { id: todo.id } )
				.execute();
		} );
	}
}
