import { ApiProperty } from "@nestjs/swagger";

export class CreateReciboDto {
    @ApiProperty({ description: 'Nombre del cliente del recibo' })
    nombre_cliente!: string;

    @ApiProperty({ description: 'Dirección del cliente' })
    direccion!: string;

    @ApiProperty({ description: 'DPI del cliente' })
    dpi!: string;

    @ApiProperty({ description: 'NIT del cliente' })
    nit!: string;

    @ApiProperty({ description: 'Teléfono del cliente' })
    telefono!: string;

    @ApiProperty({ description: 'Total del recibo' })
    total!: number;

    @ApiProperty({ description: 'Utilidad del recibo' })
    utilidad!: number;

    @ApiProperty({ description: 'Usuario que generó el recibo' })
    usuario!: string;
}
