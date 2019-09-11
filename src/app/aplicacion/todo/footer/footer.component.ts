import { Component, OnInit } from "@angular/core";
import { CentroService } from "../centro/centro.service";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit{

	public nuevoTodo: string;
	public nuevoEvento: string;

	constructor(private centroService: CentroService) {}
	ngOnInit(): void {}

	public crearTodo(){
		if (this.nuevoTodo) {
			this.centroService.nuevoTodoEventEmitter.emit(this.nuevoTodo);
		}
	}

	public crearEvento(){
		
	}

}
