import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categorias {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    categoria!: string;

    @Column()
    descripcion!: string;
}