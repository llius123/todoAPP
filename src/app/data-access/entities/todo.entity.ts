import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
	@PrimaryGeneratedColumn()
	id: number;

	@Column( { length: 225 } )
	descripcion: string;

	@Column( { nullable: true } )
	evento_id: number;
}
