import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Productos {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column()
    codigoBarras!: string;

    @Column()
    descripcion!: string;

    @Column()
    categoria!: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    precioCompra!: number;

    @Column({type: 'decimal', precision: 10, scale: 2})
    precioVenta!: number;

    @Column({ type: 'decimal', default: 0 })
    stock!: number
}