import { Component, OnInit, OnDestroy } from "@angular/core";
import { DragulaService } from "ng2-dragula";
import { Subscription } from "rxjs";
import { CentroService } from './centro.service';
import { TodoInterface } from './centro.models';
import { isUndefined } from "util";

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
	public items: TodoInterface[];
	public nuevoTodo: string;

	public editar: Array<boolean> = [];
	public todoDescripcionEditado: string;

	async ngOnInit(): Promise<void> {
		this.items = await this.centroService.getAllTodo();
		this.ordenarListaTodo();
	}

	ngOnDestroy(): void {
		this.dragula.unsubscribe();
	}

	public async delete( objetoTodoAEliminar: TodoInterface ): Promise<void> {
		let i: number;
		i = 0;
		this.items.forEach( ( todoElemento: TodoInterface ) => {
			if ( todoElemento.id === objetoTodoAEliminar.id ) {
				this.items.splice( i, 1 );
			}
			i++;
		} );
		await this.centroService.deleteTodo( objetoTodoAEliminar );
	}

	public async ordenarListaTodo(): Promise<void> {
		this.items.sort( ( a: TodoInterface, b: TodoInterface ) => {
			return a.orden - b.orden;
		} );
		await this.centroService.editAllTodo( this.items );
	}
	public async crearTodo(): Promise<void> {
		let ultimoElementoOrden: number;
		if ( this.items[ this.items.length - 1 ] !== undefined ) {
			ultimoElementoOrden = ( this.items[ this.items.length - 1 ].orden + 1 );
		} else {
			ultimoElementoOrden = 0;
		}
		const todo: TodoInterface = {
			id: null,
			descripcion: this.nuevoTodo,
			evento_id: null,
			orden: ultimoElementoOrden
		};
		await this.centroService.createTodo( todo );
		this.items = await this.centroService.getAllTodo();
	}
	public async reOrdenar( todoArray: TodoInterface[] ): Promise<void> {
		let orden: number;
		orden = 0;
		todoArray.forEach( ( elementoTodo: TodoInterface ) => {
			elementoTodo.orden = orden;
			orden++;
		} );
		await this.centroService.editAllTodo( todoArray );
	}

	public activarEdicion( todo: TodoInterface, index: number ): void {
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
