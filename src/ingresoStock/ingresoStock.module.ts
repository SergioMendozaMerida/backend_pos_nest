import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IngresoStock } from "./ingresoStock.entity";
import { IngresoStockController } from "./ingresoStock.controller";
import { IngresoStockService } from "./ingresoStock.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([IngresoStock])
    ],
    controllers: [IngresoStockController],
    providers: [IngresoStockService]
})

export class IngresoStockModule {}

