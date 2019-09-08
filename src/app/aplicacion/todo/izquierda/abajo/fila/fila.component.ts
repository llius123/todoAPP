import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-izquierda-abajo-fila",
	templateUrl: "./fila.component.html",
	styleUrls: ["./fila.component.scss"]
})
export class FilaComponent implements OnInit {
	@Input() set objeto(data: any) {
		this.objetos = data;
	}
	public objetos;

	ngOnInit(): void {}

	public isArray(): boolean {
		return Array.isArray(this.objetos);
	}
}
