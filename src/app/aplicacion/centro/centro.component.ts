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
		// dragulaService.dropModel( "lista-tareas" ).subscribe( ( data: any ) => {
		// 	console.log(data);
		// 	this.reOrdenar( data.targetModel );
		// });
		// moves: (el, container, handle) => {
		// 	return handle.className === 'handle';
		//   }
		dragulaService.createGroup("lista-tareas", {
			moves: (el, container, handle) => {
				return handle.className === "drag" || handle.className === "fas fa-ellipsis-v";
			}
		});
	}
	public dragula = new Subscription();
	public items: TodoInterface[] = [];
	public nuevoTodo: string;

	public editar: Array<boolean> = [];
	public todoTituloEditado: string;

	public displayModalAccionHora: boolean;

	public editarTodoModal: TodoInterface;

	async ngOnInit(): Promise<void> {

		this.items = await this.centroService.getAllTodo();

		//Los ordeno
		this.ordenarListaTodo();

		//Inicializo el modal a false para que este escondido
		this.displayModalAccionHora = false;

		console.log(this.items)
	}

	//Elimino un TODO
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

	//Ordeno la lista de TODO
	public async ordenarListaTodo(): Promise<void> {
		this.items.sort( ( a: TodoInterface, b: TodoInterface ) => {
			return a.orden - b.orden;
		} );
		await this.centroService.editAllTodo( this.items );
	}

	//Creo un nuevo TOdo
	public async crearTodo(): Promise<void> {
		let ultimoElementoOrden: number;
		if ( this.items[ this.items.length - 1 ] !== undefined ) {
			ultimoElementoOrden = ( this.items[ this.items.length - 1 ].orden + 1 );
		} else {
			ultimoElementoOrden = 0;
		}
		const todo: TodoInterface = {
			id: null,
			titulo: this.nuevoTodo,
			descripcion: null,
			evento_id: null,
			orden: ultimoElementoOrden,
			completado: false
		};
		await this.centroService.createTodo( todo );
		this.items = await this.centroService.getAllTodo();
	}

	//Ordenop la lista de TODO dependiendo del aprametro ordenacion que tiene el objeto TODO
	public async reOrdenar( todoArray: TodoInterface[] ): Promise<void> {
		let orden: number;
		orden = 0;
		todoArray.forEach( ( elementoTodo: TodoInterface ) => {
			elementoTodo.orden = orden;
			orden++;
		} );
		await this.centroService.editAllTodo( todoArray );
	}

	//Activo la edicion y desactivo todas las otras
	public activarEdicion( todo: TodoInterface, index: number ): void {
		this.editar[ index ] = true;
		this.todoTituloEditado = todo.titulo;
		this.editar.forEach( ( elemento: any, indexForEach: number ) => {
			if ( indexForEach !== index ) {
				this.editar[ indexForEach ] = false;
			}
		} );
	}

	//Edito la descripcion del todo
	public async editarTodo( todo: TodoInterface, index: number ): Promise<void> {
		todo.titulo = this.todoTituloEditado;
		await this.centroService.editTodo(todo);
		this.editar.forEach( ( elemento: any, indexForEach: number ) => {
			this.editar[ indexForEach ] = false;
		} );
	}

	//Cancelar edicion titulo todo
	public cancelarEdicionTituloTodo(): void{
		this.editar.forEach( ( elemento: any, indexForEach: number ) => {
			this.editar[ indexForEach ] = false;
		} );
	}

	//Activo el modal para editar el titulo y la descripcion del todo
	public expandirTarjeta(todo: TodoInterface): void {
		this.displayModalAccionHora = true;
		this.editarTodoModal = todo;
	}
	ngOnDestroy(): void {
		this.dragula.unsubscribe();
	}

	//Cambiar un todo de completado a no completado y al reves
	public async completarTodo(completado: number, todo: TodoInterface): Promise<void> {
		switch (completado) {
			case 0:
				todo.completado = 0;
				await this.centroService.editTodo(todo);
				this.items.forEach( ( elemento: TodoInterface, indexForEach: number ) => {
					if ( elemento.id === todo.id ) {
						this.items[ indexForEach ] = todo;
					}
				} );
			break;
			case 1:
				todo.completado = 1;
				await this.centroService.editTodo(todo);
				this.items.forEach( ( elemento: TodoInterface, indexForEach: number ) => {
					if ( elemento.id === todo.id ) {
						this.items[ indexForEach ] = todo;
					}
				} );
			break;
		}
	}
}
