import { Body, Controller, Get, Post } from "@nestjs/common";
import { CajaService } from "./caja.service";
import { RegistrarTransaccionCajaDTO } from "./caja.dto";

@Controller('caja')
export class CajaController {
    constructor(
        private readonly serviceCaja: CajaService
    ){}

    @Get()
    async obtenerSesionesCaja(){
        return await this.serviceCaja.obtenerSesionesCaja()
    }

    @Post()
    async abrirCerrarCaja(@Body() datosCaja: RegistrarTransaccionCajaDTO){
        return await this.serviceCaja.abrirCerrarCaja(datosCaja)
    }
}