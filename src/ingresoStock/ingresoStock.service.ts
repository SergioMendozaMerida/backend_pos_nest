import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IngresoStock } from "./ingresoStock.entity";
import { Fechas, RegistrarIngresoStockDTO } from "./ingresoStock.dto";

@Injectable()
export class IngresoStockService{
    constructor (
        @InjectRepository(IngresoStock)
        private readonly ingresRepository: Repository<IngresoStock>
    ) {}

    async obtenerIngresos(){
        return await this.ingresRepository.find()
    }

    async registrarIngreso(ingreso: RegistrarIngresoStockDTO){
        const nuevoIngreso = await this.ingresRepository.create(ingreso)
        return await this.ingresRepository.save(nuevoIngreso)
    }

    async filtrarPorFecha(fechas: Fechas){}
}
