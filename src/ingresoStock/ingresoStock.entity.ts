import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IngresoStock {
    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn()
    fecha!: Date

    @Column()
    id_producto!: number;

    @Column()
    producto!: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    cantidad!: number;

    @Column({type: 'decimal', precision: 10, scale: 2})
    precio_compra!: number;

    @Column({type: 'decimal', precision: 10, scale: 2})
    precio_venta!: number;

    @Column()
    proveedor!: string;

    @Column()
    usuario!: string;

}