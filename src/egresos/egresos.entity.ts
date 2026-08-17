import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Egresos {
    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn()
    fecha!: Date;

    @Column()
    usuario!: string;

    @Column()
    razon!: string;

    @Column()
    proveedor!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    monto!: number;
}
