import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Evento extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number;

	@Column( { nullable: true } )
	titulo: string;

}
