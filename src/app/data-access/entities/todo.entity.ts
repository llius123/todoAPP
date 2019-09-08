import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Todo extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number;

	@Column( { nullable: true } )
	titulo: string;

	@Column( { nullable: true } )
	descripcion: string;

	@Column( { nullable: true } )
	evento_id: number;

	@Column()
	orden: number;

	@Column({
		default: false
	})
	completado: number;
}
