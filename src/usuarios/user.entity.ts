import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    nombre!: string

    @Column({unique: true})
    dpi!: string

    @Column({unique: true})
    usuario!: string

    @Column()
    password!: string

    @Column({default: 'usuario'})
    role!: string
}