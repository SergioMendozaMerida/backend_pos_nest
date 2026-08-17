import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Egresos } from "./egresos.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateEgresoDto } from "./egresos.dto";

@Injectable()
export class EgresosService{
    constructor(
        @InjectRepository(Egresos)
        private readonly egresosRepository: Repository<Egresos>
    ){}

    async obtenerEgresos(){
        return await this.egresosRepository.find()
    }

    async registrarEgreso(egreso: CreateEgresoDto){
        const nuevoEgreso = this.egresosRepository.create(egreso)
        return await this.egresosRepository.save(nuevoEgreso)
    }
}