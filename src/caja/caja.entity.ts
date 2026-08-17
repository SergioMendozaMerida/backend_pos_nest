import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Caja{
    @PrimaryGeneratedColumn()
    id!: number

    @CreateDateColumn()
    fecha!: Date

    @Column()
    usuario!: string

    @Column({type: 'decimal', precision: 10, scale: 2})
    saldo_inicial!: number

    @Column({type: 'decimal', precision: 10, scale: 2})
    ingresos_ventas!: number

    @Column({type: 'decimal', precision: 10, scale: 2})
    otros_ingresos!: number

    @Column({type: 'decimal', precision: 10, scale: 2})
    egresos!: number

    @Column({type: 'decimal', precision: 10, scale: 2})
    saldo_final!: number

    @Column({type: 'decimal', precision: 10, scale: 2})
    efectivo_final!: number

    @Column({type: 'decimal', precision: 10, scale: 2})
    diferencia!: number

    @Column({type: 'decimal', precision: 10, scale: 2})
    utilidad_generada!: number

    estado!: boolean
}