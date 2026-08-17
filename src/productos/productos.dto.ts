import { ApiProperty } from "@nestjs/swagger";

export class CreateProductoDto {
    @ApiProperty({ description: 'Nombre del producto' })
    nombre!: string;

    @ApiProperty({ description: 'Código de barras del producto' })
    codigoBarras!: string;

    @ApiProperty({ description: 'Descripción del producto' })
    descripcion!: string;

    @ApiProperty({ description: 'Categoría del producto' })
    categoria!: string;

    @ApiProperty({ description: 'Precio de compra del producto' })
    precioCompra!: number;

    @ApiProperty({ description: 'Precio de venta del producto' })
    precioVenta!: number;
}

export class AumentarStockDto {
    @ApiProperty()
    id!: number;

    @ApiProperty()
    stock!: number;
}