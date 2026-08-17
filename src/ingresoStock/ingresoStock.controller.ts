import { Body, Controller, Get, Post } from "@nestjs/common";
import { IngresoStockService } from "./ingresoStock.service";
import { RegistrarIngresoStockDTO } from "./ingresoStock.dto";

@Controller('ingresoStock')
export class IngresoStockController{
    constructor (
        private readonly ingresoStockService: IngresoStockService
    ){}

    @Get()
    async obtenerIngresos(){
        return await this.ingresoStockService.obtenerIngresos()
    }

    @Post()
    async registrarIngreso(@Body() ingreso: RegistrarIngresoStockDTO){
        return await this.ingresoStockService.registrarIngreso(ingreso)
    }
}
