import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Recibos } from "./recibos.entity";
import { RecibosController } from "./recibos.controller";
import { RecibosService } from "./recibos.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Recibos])
    ],
    controllers: [RecibosController],
    providers: [RecibosService]
})
export class RecibosModule{}