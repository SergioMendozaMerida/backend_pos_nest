import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categorias } from "./categorias.entity";
import { CategoriasService } from "./categorias.service";
import { CategoriasController } from "./categorias.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Categorias])
    ],
    controllers: [CategoriasController],
    providers: [CategoriasService]
})

export class CategoriasModule {}
    