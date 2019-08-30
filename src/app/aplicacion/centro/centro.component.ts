import { Component, OnInit, OnDestroy } from "@angular/core";
import { DragulaService } from "ng2-dragula";
import { Subscription } from "rxjs";
import { CentroService } from './centro.service';
import { TodoInterface } from './centro.models';

@Component( {
	selector: "app-centro",
	templateUrl: "./centro.component.html",
	styleUrls: [ "./centro.component.scss" ]
} )
export class CentroComponent implements OnInit, OnDestroy {
	constructor( private dragulaService: DragulaService, private centroService: CentroService ) {
		this.dragula.add(
			dragulaService.dropModel( "lista-tareas" ).subscribe( ( data: any ) => {
				this.reOrdenar( data.targetModel );
			} )
		);
	}
	public dragula = new Subscription();
	public items: Array<TodoInterface> = [];
	public nuevoTodo: string;

	public editar: Array<boolean> = [];
	public todoDescripcionEditado: string;

	ngOnInit(): void {
		console.log('hopla')
		console.log(this.centroService.getAllTodo());
		// this.centroService.getAllTodo().subscribe( ( resp: Todo[] ) => {
		// 	this.items = resp;
		// 	this.ordenarListaTodo();
		// } );
	}

	ngOnDestroy(): void {
		this.dragula.unsubscribe();
	}

	public delete( objetoTodoAEliminar: TodoInterface ): void {
		let i: number;
		i = 0;
		this.items.forEach( ( todoElemento: TodoInterface ) => {
			if ( todoElemento.id === objetoTodoAEliminar.id ) {
				this.items.splice( i, 1 );
			}
			i++;
		} );
		// this.centroService.deleteTodo( objetoTodoAEliminar ).subscribe( ( resp: any ) => { } );
	}

	public ordenarListaTodo(): void {
		this.items.sort( ( a: TodoInterface, b: TodoInterface ) => {
			return a.orden - b.orden;
		} );
	}
	public crearTodo(): void {
		// const ultimoElementoOrden: number = ( this.items[ this.items.length - 1 ].orden + 1 );
		const todo: TodoInterface = {
			id: null,
			descripcion: this.nuevoTodo,
			evento_id: null,
			orden: 0
		};
		this.centroService.createTodo( todo );
	}
	public reOrdenar( todoArray: TodoInterface[] ): void {
		let orden: number;
		orden = 0;
		todoArray.forEach( ( elementoTodo: TodoInterface ) => {
			elementoTodo.orden = orden;
			orden++;
		} );
		// this.centroService.editAllTodo( todoArray ).subscribe( ( resp: Todo[] ) => { } );
	}

	public activarEdicion( todo: TodoInterface,  index: number ): void {
		this.editar[ index ] = true;
		this.todoDescripcionEditado = todo.descripcion;
		this.editar.forEach( ( elemento: any, indexForEach: number ) => {
			if ( indexForEach !== index ) {
				this.editar[ indexForEach ] = false;
			}
		} );
	}

	public editarTodo( todo: TodoInterface, index: number ): void {
		todo.descripcion = this.todoDescripcionEditado;
		// this.centroService.editTodo( todo ).subscribe( ( resp: Todo ) => {
		// 	this.editar[ index ] = false;
		// } );
	}
}
