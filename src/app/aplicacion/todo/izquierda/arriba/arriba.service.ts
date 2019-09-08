import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ArribaService {
	constructor(private httpClient: HttpClient) {}

	public getDataFromCalendar(date: number): void {
		// return this.httpClient.get<any>(environment.apiPath);
	}
}
