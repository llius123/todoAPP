import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { TodoInterface } from "../centro.models";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { DatabaseService } from "src/app/data-access/database.service";
import { CentroService } from "../centro.service";
import { CalendarioService } from "src/app/aplicacion/services/calendario.service";

@Component( {
	selector: "rp-centro-modal-editar-todo",
	templateUrl: "./modal-editar-todo.component.html",
	styleUrls: [ "./modal-editar-todo.component.scss" ]
} )
export class CentroModalEditarTodoComponent implements OnInit {

	@Input() set editarTodoModal( todo: TodoInterface ) {
		if ( todo ) {
			this.todoEditado = todo;
			this.editarTodo.patchValue( {
				titulo: todo.titulo,
				descripcion: todo.descripcion
			} );
		}
	}
	public editarTodo: FormGroup;
	public todoEditado: TodoInterface;
	public evento: Date;

	public es: any = this.calendarioService.es;

	constructor( private formBuilder: FormBuilder, private centroService: CentroService, private calendarioService: CalendarioService ) {
	}
	ngOnInit(): void {
		this.editarTodo = new FormGroup( {
			titulo: new FormControl(),
			descripcion: new FormControl()
		} );
	}

	public editar(): void {
		// this.todoEditado.titulo = this.editarTodo.get( "titulo" ).value;
		// this.todoEditado.descripcion = this.editarTodo.get( "descripcion" ).value;
		// this.centroService.editTodo( this.todoEditado ).then( resp => {  } );
		console.log(this.evento);
	}
}
