import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from './centro.models';

@Injectable({
	providedIn: "root"
})
export class CentroService {
	constructor(private httpClient: HttpClient) {}

	public getAllTodo(): Observable<Todo[]> {
		return this.httpClient.get<Todo[]>(environment.apiPath + "/todo");
	}

	public createTodo(todo: Todo): Observable<Todo> {
		return this.httpClient.post<Todo>(environment.apiPath + "/todo", todo);
	}

	public editTodo(todo: Todo): Observable<Todo> {
		return this.httpClient.put<Todo>(environment.apiPath + "/todo", todo);
	}

	public editAllTodo(todo: Todo[]): Observable<Todo[]> {
		return this.httpClient.put<Todo[]>(environment.apiPath + "/todo/editAllTodo", todo);
	}

	public deleteTodo(todo: Todo): Observable<any> {
		const param: HttpParams = new HttpParams().append("id", todo.id.toString());
		return this.httpClient.delete<any>(environment.apiPath + "/todo", {params: param});
	}
}
