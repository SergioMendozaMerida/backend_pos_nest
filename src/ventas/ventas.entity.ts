import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ventas{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    id_recibo!: number;

    @CreateDateColumn()
    fecha!: Date;

    @Column()
    id_producto!: number;

    @Column()
    nombre_producto!: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    costo!: number

    @Column({type: 'decimal', precision: 10, scale: 2})
    precio!: number

    @Column({type: 'decimal', precision: 10, scale: 2})
    cantidad!: number

    @Column({type: 'decimal', precision: 10, scale: 2})
    descuento!: number

    @Column({type: 'decimal', precision: 10, scale: 2})
    subtotal!: number

    @Column()
    Usuario!: string
}