import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Ventas } from "./ventas.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateVentaDto } from "./ventas.dto";

@Injectable()
export class VentasService{
    constructor (
        @InjectRepository(Ventas)
        private readonly ventasRepository: Repository<Ventas>
    ){}

    async registrarVenta (venta: CreateVentaDto){
        const nuevaVenta = this.ventasRepository.create(venta)
        return await this.ventasRepository.save(nuevaVenta)
    }

    async obtenerVentas (){
        return await this.ventasRepository.find()
    }
}