import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class CalendarioService {
	constructor() {}

	public es = {
		firstDayOfWeek: 1,
		dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
		dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
		dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
		monthNames: [
			"enero",
			"febrero",
			"marzo",
			"abril",
			"mayo",
			"junio",
			"julio",
			"agosto",
			"septiembre",
			"octubre",
			"noviembre",
			"diciembre"
		],
		monthNamesShort: [
			"ene",
			"feb",
			"mar",
			"abr",
			"may",
			"jun",
			"jul",
			"ago",
			"sep",
			"oct",
			"nov",
			"dic"
		],
		today: "Hoy",
		clear: "Borrar"
	};

	public horas = [
		{ hora: "00:00", objeto: "" },
		{ hora: "01:00", objeto: "" },
		{ hora: "02:00", objeto: "" },
		{ hora: "03:00", objeto: "" },
		{ hora: "04:00", objeto: "" },
		{ hora: "05:00", objeto: "" },
		{ hora: "06:00", objeto: "" },
		{ hora: "07:00", objeto: "" },
		{ hora: "08:00", objeto: "" },
		{ hora: "09:00", objeto: "" },
		{ hora: "10:00", objeto: "" },
		{ hora: "11:00", objeto: "" },
		{ hora: "12:00", objeto: "" },
		{ hora: "13:00", objeto: "" },
		{ hora: "14:00", objeto: "" },
		{ hora: "15:00", objeto: "" },
		{ hora: "16:00", objeto: "" },
		{ hora: "17:00", objeto: "" },
		{ hora: "18:00", objeto: "" },
		{ hora: "19:00", objeto: "" },
		{ hora: "20:00", objeto: "" },
		{ hora: "21:00", objeto: "" },
		{ hora: "22:00", objeto: "" },
		{ hora: "23:00", objeto: "" }
	];
}
