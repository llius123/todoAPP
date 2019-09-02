import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../data-access/database.service";

@Component({
	selector: "app-aplicacion",
	templateUrl: "./aplicacion.component.html",
	styleUrls: ["./aplicacion.component.scss"]
})
export class AplicacionComponent implements OnInit{

	constructor(private databaseService: DatabaseService) {}
	ngOnInit(): void {}

}
