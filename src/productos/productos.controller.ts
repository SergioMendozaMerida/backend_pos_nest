import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ProductosService } from "./productos.service";
import { AumentarStockDto, CreateProductoDto } from "./productos.dto";

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @Get()
    async obtenerTodos() {
        return await this.productosService.obtenerTodos();
    }

    @Get('/codigo:codigo')
    async buscarPorCodigo(@Param('codigo') codigo: string) {
        return await this.productosService.buscarPorCodigo(codigo);
    }

    @Get('nombre/:nombre')
    async buscarPorNombre(@Param('nombre') nombre: string){
        return await this.productosService.buscarPorNombre(nombre)
    }

    @Put('aumentarStock')
    async aumentarStock(@Body() cantidad: AumentarStockDto){
        console.log(cantidad)
        return await this.productosService.aumentarStock(cantidad)
    }

    @Put(':id')
    async editarProducto(@Param('id') id: number, @Body() producto: CreateProductoDto) {
        return await this.productosService.editarProducto(id, producto);
    }

    @Post()
    async crearProducto(@Body() producto: CreateProductoDto) {
        return await this.productosService.crearProducto(producto);
    }
}