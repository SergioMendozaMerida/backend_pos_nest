import { ApiProperty } from "@nestjs/swagger";

export class CreateVentaDto {
    @ApiProperty({ description: 'Número del recibo de la venta' })
    id_recibo!: number;

    @ApiProperty({ description: 'ID del producto vendido' })
    id_producto!: number;

    @ApiProperty({ description: 'Nombre del producto vendido' })
    nombre_producto!: string;

    @ApiProperty({ description: 'Costo unitario del producto' })
    costo!: number;

    @ApiProperty({ description: 'Precio unitario de venta' })
    precio!: number;

    @ApiProperty({ description: 'Cantidad vendida' })
    cantidad!: number;

    @ApiProperty({ description: 'Descuento aplicado' })
    descuento!: number;

    @ApiProperty({ description: 'Subtotal de la venta' })
    subtotal!: number;

    @ApiProperty({ description: 'Usuario que realizó la venta' })
    Usuario!: string;
}