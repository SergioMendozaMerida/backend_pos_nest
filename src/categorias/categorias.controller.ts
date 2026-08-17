import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoriasService } from "./categorias.service";
import { CreateCategoriaDto } from "./categorias.dto";

@Controller('categorias')
export class CategoriasController{
    constructor (
        private readonly categoriasService: CategoriasService
    ){}

    @Get()
    async obtenerCategorias(){
        return await this.categoriasService.verCategorias()
    }

    @Post()
    async registrarCategoria(@Body() nuevaCategoria: CreateCategoriaDto){
        return await this.categoriasService.ingresarCategorias(nuevaCategoria)
    }
}
