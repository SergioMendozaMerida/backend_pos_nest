import { Injectable } from "@nestjs/common";
import { Productos } from "./productos.entity";
import { In, Like, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { AumentarStockDto, CreateProductoDto } from "./productos.dto";

@Injectable()
export class ProductosService{

    constructor(
        @InjectRepository(Productos)
        private readonly productosRepository: Repository<Productos>
    ) {}

    async obtenerTodos() {
        return await this.productosRepository.find();
    }

    async buscarPorCodigo(codigo: string) {
        return await this.productosRepository.findOne({ where: { codigoBarras: codigo } });
    }

    async buscarPorNombre(nombre: string){
        return await this.productosRepository.find({where: {nombre: Like(`%${nombre}%`)}})
    }

    async buscarPorNombreOrCodigo(termino: string){
        return await this.productosRepository.findOne({
            where:[
                {nombre: Like(`%${termino}%`)}, 
                {codigoBarras: Like(termino)}
            ]
        })
    }

    async crearProducto(producto: CreateProductoDto) {
        const nuevoProducto = this.productosRepository.create(producto);
        return await this.productosRepository.save(nuevoProducto);
    }

    async aumentarStock(datos: AumentarStockDto){

        return await this.productosRepository.increment(
            {id: datos.id},
            'stock',
            datos.stock
        )
    }
    
    async editarProducto(id: number, producto: CreateProductoDto) {
        await this.productosRepository.update(id, producto);
        return await this.productosRepository.findOne({ where: { id } });
    }

    async eliminarProducto(id:number){
        await this.productosRepository.delete(id)
    }


}