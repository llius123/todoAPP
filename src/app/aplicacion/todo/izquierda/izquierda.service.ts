import { Evento } from './../../../data-access/entities/evento.entity';
import { Injectable } from "@angular/core";
import { DatabaseService } from "src/app/data-access/database.service";
import { EventoInterface } from "./izquierda.model";

@Injectable( {
	providedIn: "root"
} )
export class IzquierdaService {
	constructor( private databaserService: DatabaseService ) { }

	public async getAllEvento(): Promise<EventoInterface[]> {
		let resp: EventoInterface[];

		await this.databaserService.connection.then( connection => {
			return connection
				.createQueryRunner().query( `
				SELECT * from todo
			`).then( data => {
					// console.log(data)
					resp = data;
				} );
		} );
		return resp;
	}

	public async createEvento( evento: EventoInterface ): Promise<void> {

		await this.databaserService.connection.then( conn => {
			conn.createQueryBuilder()
				.insert()
				.into( Evento )
				.values( {
					id: evento.id,
					titulo: evento.titulo
				} ).execute();
		} )
	}

	public async editEvento( evento: EventoInterface ): Promise<void> {
		await this.databaserService.connection.then( conn => {
			conn.createQueryBuilder()
				.update( Evento )
				.set( {
					titulo: evento.titulo,
				} )
				.where( "id = :id", { id: evento.id } )
				.execute()
				.catch(err => {
					console.log(err);
				});
		} );
	}

	public editAllEvento( evento: EventoInterface[] ): void {
		evento.forEach( async ( element: Evento ) => {
			await this.editEvento( element );
		} );
	}

	public async deleteEvento( evento: EventoInterface ): Promise<void> {
		await this.databaserService.connection.then( conn => {
			conn.createQueryBuilder()
				.delete()
				.from( Evento )
				.where( "id = :id", { id: evento.id } )
				.execute();
		} );
	}
}