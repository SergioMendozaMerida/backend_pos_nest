import { Body, Controller, Get, Post } from "@nestjs/common";
import { RecibosService } from "./recibos.service";
import { CreateReciboDto } from "./recibos.dto";

@Controller('recibos')
export class RecibosController {
    constructor (
        private readonly recibosService: RecibosService
    ){}

    @Get()
    async obtenerTodos(){
        return await this.recibosService.obtenerTodos()
    }

    @Get('/ultimoRecibo')
    async obtenerUltimoRecibo(){
        return await this.recibosService.obtenerNoRecibo()
    }

    @Post()
    async registrarRecibo(@Body() recibo: CreateReciboDto){
        return await this.recibosService.registrarRecibo(recibo)
    }
}