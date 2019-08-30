import { Injectable } from "@angular/core";
import { DatabaseService } from "src/app/data-access/database.service";
import { Todo } from "src/app/data-access/entities/todo.entity";
import { Connection, Repository } from "typeorm";
import { TodoInterface } from "./centro.models";

@Injectable( {
	providedIn: "root"
} )
export class CentroService {
	constructor( private databaserService: DatabaseService) {}

	public async getAllTodo(): Promise<any> {
		let resp = "";

		await this.databaserService.connection.then( connection => {
			return connection
				.createQueryRunner().query( `
				SELECT * from todo
			`).then( data => {
				// console.log(data)
					resp = data;
				} );
		} );
		console.log(resp)
		return resp;
	}

	public async createTodo( todo: TodoInterface ): Promise<void> {
		let test = new Todo();
		test.id = todo.id;
		test.orden = todo.orden;
		test.descripcion = todo.descripcion;
		test.evento_id = todo.evento_id;

		console.log(test)
		await this.databaserService.connection.then( () => test.save())
		// return this.httpClient.post<Todo>(environment.apiPath + "/todo", todo);
	}

	public editTodo( todo: Todo ): void {
		// return this.httpClient.put<Todo>(environment.apiPath + "/todo", todo);
	}

	public editAllTodo( todo: Todo[] ): void {
		// return this.httpClient.put<Todo[]>(environment.apiPath + "/todo/editAllTodo", todo);
	}

	public deleteTodo( todo: Todo ): void {
		// const param: HttpParams = new HttpParams().append("id", todo.id.toString());
		// return this.httpClient.delete<any>(environment.apiPath + "/todo", {params: param});
	}
}
