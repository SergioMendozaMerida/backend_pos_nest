import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ProductosService } from "./productos.service";
import { AumentarStockDto, CreateProductoDto } from "./productos.dto";
import { AuthGuard } from "node_modules/@nestjs/passport/dist/auth.guard";

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async obtenerTodos() {
        return await this.productosService.obtenerTodos();
    }

    @Get('/clave/:valor')
    async buscarProducto(@Param('valor') valor:string){
        return await this.productosService.buscarProductos(valor)
    }

    @Get('/codigo:codigo')
    async buscarPorCodigo(@Param('codigo') codigo: string) {
        return await this.productosService.buscarPorCodigo(codigo);
    }

    @Get('nombre/:nombre')
    async buscarPorNombre(@Param('nombre') nombre: string){
        return await this.productosService.buscarPorNombre(nombre)
    }

    @Get('busqueda/:busqueda')
    async buscarPorCodigoOrNombre(@Param('busqueda') termino:string){
        return await this.productosService.buscarPorNombreOrCodigo(termino)
    }

    @Put(':id')
    async editarProducto(@Param('id') id: number, @Body() producto: CreateProductoDto) {
        return await this.productosService.editarProducto(id, producto);
    }

    @Post()
    async crearProducto(@Body() producto: CreateProductoDto) {
        return await this.productosService.crearProducto(producto);
    }

    @Delete('eliminarProducto/:id')
    async eliminarProducto(@Param('id') id:number){
        return await this.productosService.eliminarProducto(id)
    }
}