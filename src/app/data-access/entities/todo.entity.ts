import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Todo extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number;

	@Column( { length: 225 } )
	descripcion: string;

	@Column( { nullable: true } )
	evento_id: number;

	@Column()
	orden: number;
}
