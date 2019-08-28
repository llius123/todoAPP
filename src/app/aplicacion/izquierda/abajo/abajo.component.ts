import { Component, OnInit } from "@angular/core";
import { CalendarioService } from "../../services/calendario.service";

@Component({
	selector: "app-izquierda-abajo",
	templateUrl: "./abajo.component.html",
	styleUrls: ["./abajo.component.scss"]
})
export class AbajoComponent implements OnInit {
	constructor(private calendarioService: CalendarioService) {}

	public horas: Array<any> = [];
	public pushed = false;
	public horas2 = [
		{
			hora: "01:00",
			objeto: "test"
		},
		{
			hora: "02:00",
			objeto: "test"
		},
		{
			hora: "03:00",
			objeto: "test"
		},
		{
			hora: "04:00",
			objeto: [
				{
					descripcion: "pepepepe"
				},
				{
					descripcion: "anananana"
				},
				{
					descripcion: "juanana"
				}
			]
		}
	];
	ngOnInit(): void {
		this.horas = this.calendarioService.horas;
		this.calendarioService.horas.forEach((element1: any, index: any) => {
			this.horas2.forEach((element2: any) => {
				if (element1.hora === element2.hora) {
					this.horas[index] = element2;
				}
			});
		});
	}
}
