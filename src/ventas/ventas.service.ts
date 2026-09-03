import { Injectable } from "@nestjs/common";
import { Between, Repository } from "typeorm";
import { Ventas } from "./ventas.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateVentaDto } from "./ventas.dto";
import { Fechas } from "src/ingresoStock/ingresoStock.dto";

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

    async filtrarPorFechas (fechas: Fechas) {
        return await this.ventasRepository.find({
            where: {
                fecha: Between(fechas.fechaInicio, fechas.fechaFin)
            }            
        })
    }

    async obtenerVentasPorRecibo(id_recibo: number){
        return await this.ventasRepository.find({
            where: {
                id_recibo: id_recibo
            }
        })
    }
}