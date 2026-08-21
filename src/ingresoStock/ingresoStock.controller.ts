import { Body, Controller, Get, Post } from "@nestjs/common";
import { IngresoStockService } from "./ingresoStock.service";
import { Fechas, IngresoFechas, RegistrarIngresoStockDTO } from "./ingresoStock.dto";

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

    @Post('/fechas')
    async filtrarPorFecha(@Body() fechas: IngresoFechas){
        const inicio = new Date(fechas.fechaInicio)
        const fin = new Date(fechas.fechaFin)

        //Ajustar fechaFin al último milisegundo del día (23:59:59.999)
        fin.setUTCHours(23, 59, 59, 999);

        return await this.ingresoStockService.filtrarPorFecha({
            fechaInicio: inicio,
            fechaFin: fin
        })
    }
}
