import { Body, Controller, Get, Post } from "@nestjs/common";
import { VentasService } from "./ventas.service";
import { CreateVentaDto } from "./ventas.dto";

@Controller('ventas')
export class VentasController{
    constructor (
        private readonly ventasService: VentasService
    ){}

    @Get()
    async obtenerVentas(){
        return await this.ventasService.obtenerVentas()
    }

    @Post()
    async registrarVenta(@Body() nuevaVenta: CreateVentaDto){
        return await this.ventasService.registrarVenta(nuevaVenta)
    }

}