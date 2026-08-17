import { Body, Controller, Get, Post } from "@nestjs/common";
import { EgresosService } from "./egresos.service";
import { CreateEgresoDto } from "./egresos.dto";

@Controller()
export class EgresosController{
    constructor(
        private readonly egresosService: EgresosService
    ){}

    @Get()
    async obtenerEgresos(){
        return await this.egresosService.obtenerEgresos()
    }

    @Post()
    async registrarEgreso(@Body() egreso: CreateEgresoDto){
        return await this.egresosService.registrarEgreso(egreso)
    }
}