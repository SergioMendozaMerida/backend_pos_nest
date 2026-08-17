import { CreateDateColumn, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class recibos {
    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn()
    fecha!: Date;

    @Column()
    nombre_cliente!: string;

    @Column()
    direccion!: string;

    @Column()
    dpi!: number;

    @Column()
    nit!: number;

    @Column()
    telefono!: number;

    @Column({type: 'decimal', precision: 10, scale: 2})
    total!: number;

    @Column({type: 'decimal', precision: 10, scale: 2})
    utilidad!: number;

    @Column()
    usuario!: string;
}