import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Categorias } from "./categorias.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCategoriaDto } from "./categorias.dto";

@Injectable()
export class CategoriasService{
    constructor(
        @InjectRepository(Categorias)
        private readonly categoriasRepository: Repository<Categorias> 
    ){}

    async ingresarCategorias(categoria: CreateCategoriaDto){
        const nuevaCategoria = this.categoriasRepository.create(categoria)
        return await this.categoriasRepository.save(nuevaCategoria)
    }

    async verCategorias(){
        return await this.categoriasRepository.find()
    }
}