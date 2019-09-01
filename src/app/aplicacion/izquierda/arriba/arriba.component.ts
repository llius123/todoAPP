import { Component } from "@angular/core";
import { CalendarioService } from "../../services/calendario.service";
import { ArribaService } from "./arriba.service";

@Component({
	selector: "app-izquierda-arriba",
	templateUrl: "./arriba.component.html",
	styleUrls: ["./arriba.component.scss"]
})
export class ArribaComponent {
	constructor(
		private calendarioService: CalendarioService,
		private arribaService: ArribaService
	) {}

	public es: any = this.calendarioService.es;
	/**
	 * Obtengo los datos sobre ese dia
	 */
	public diaSeleccionado(date: Date): void {
		// this.arribaService
			// .getDataFromCalendar(date.getTime())
			// .subscribe((resp: any) => {}, (error: any) => {});
	}
}
