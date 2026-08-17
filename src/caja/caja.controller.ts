import { Controller, Get } from "@nestjs/common";
import { CajaService } from "./caja.service";

@Controller('caja')
export class CajaController {
    constructor(
        private readonly serviceCaja: CajaService
    ){}

    @Get()
    async obtenerSesionesCaja(){
        return await this.serviceCaja.obtenerSesionesCaja()
    }
}