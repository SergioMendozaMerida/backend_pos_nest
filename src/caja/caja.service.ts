import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Caja } from "./caja.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { RegistrarTransaccionCajaDTO } from "./caja.dto";

@Injectable()
export class CajaService {
    
    constructor(
        @InjectRepository(Caja)
        private readonly cajaRepository: Repository<Caja>
    ) {}

    async obtenerSesionesCaja(){
        return await this.cajaRepository.find()
    }

    async abrirCerrarCaja(datosSesion: RegistrarTransaccionCajaDTO){
        const nuevoRegistro = this.cajaRepository.create(datosSesion)
        return await this.cajaRepository.save(nuevoRegistro)
    }
}