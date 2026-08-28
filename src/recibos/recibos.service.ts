import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Recibos } from "./recibos.entity";
import { Repository } from "typeorm";
import { CreateReciboDto } from "./recibos.dto";

@Injectable()
export class RecibosService{
    constructor(
        @InjectRepository(Recibos)
        private readonly recibosRepository: Repository<Recibos>
    ){}

    async obtenerTodos(){
        return await this.recibosRepository.find()
    }

    async obtenerNoRecibo() {
        const ulitmoRecibo = await this.recibosRepository.findOne({
            where: {},
            order: { id: 'DESC' },
        }) 
        if (!ulitmoRecibo){
            return 1
        }
        return ulitmoRecibo.id
    }

    async registrarRecibo(recibo: CreateReciboDto){
        const nuevoRecibo = await this.recibosRepository.create(recibo)
        return await this.recibosRepository.save(nuevoRecibo)
    }
}