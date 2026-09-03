import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { VentasService } from "./ventas.service";
import { CreateVentaDto, IngresoFechas } from "./ventas.dto";

@Controller('ventas')
export class VentasController{
    constructor (
        private readonly ventasService: VentasService
    ){}

    @Get()
    async obtenerVentas(){
        return await this.ventasService.obtenerVentas()
    }

    @Get('/recibo/:id_recibo')
    async obtenerVentasPorRecibo(@Param('id_recibo') id_recibo: number){
        return await this.ventasService.obtenerVentasPorRecibo(id_recibo)
    }

    @Post()
    async registrarVenta(@Body() nuevaVenta: CreateVentaDto){
        return await this.ventasService.registrarVenta(nuevaVenta)
    }

    @Post('/fechas')
    async filtrarPorFecha(@Body() fechas: IngresoFechas){
        const inicio = new Date(fechas.fechaInicio)
        const fin = new Date(fechas.fechaFin)

        //Ajustar fechaFin al último milisegundo del día (23:59:59.999)
        fin.setUTCHours(23, 59, 59, 999);

        return await this.ventasService.filtrarPorFechas({
            fechaInicio: inicio,
            fechaFin: fin
        })
    }
}