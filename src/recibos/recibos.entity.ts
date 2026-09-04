import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Recibos {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    fecha!: Date;

    @Column()
    nombre_cliente!: string;

    @Column()
    direccion!: string;

    @Column()
    dpi!: string;

    @Column()
    nit!: string;

    @Column()
    telefono!: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    total!: number;

    @Column({type: 'decimal', precision: 10, scale: 2})
    utilidad!: number;

    @Column()
    usuario!: string;
}