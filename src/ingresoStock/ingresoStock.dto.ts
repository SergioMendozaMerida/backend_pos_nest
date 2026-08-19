import { ApiProperty } from "@nestjs/swagger";

export class RegistrarIngresoStockDTO {
    @ApiProperty({ description: 'ID del producto que entra al stock' })
    id_producto!: number;

    @ApiProperty({ description: 'Nombre del producto' })
    producto!: string;

    @ApiProperty({ description: 'Cantidad ingresada al stock' })
    cantidad!: number;

    @ApiProperty({ description: 'Precio de compra del producto' })
    precio_compra!: number;

    @ApiProperty({ description: 'Precio de venta del producto' })
    precio_venta!: number;

    @ApiProperty({ description: 'Proveedor del producto' })
    proveedor!: string;

    @ApiProperty({ description: 'Usuario que registra el ingreso' })
    usuario!: string;
}

export class Fechas {
    @ApiProperty()
    fechaInicio!: string;

    @ApiProperty()
    fechaFin!: string
}