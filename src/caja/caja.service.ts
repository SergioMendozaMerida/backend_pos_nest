import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Caja } from "./caja.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CajaService {
    
    constructor(
        @InjectRepository(Caja)
        private readonly cajaRepository: Repository<Caja>
    ) {}

    async obtenerSesionesCaja(){
        return await this.cajaRepository.find()
    }    
}