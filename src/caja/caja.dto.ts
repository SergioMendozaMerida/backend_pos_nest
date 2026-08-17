import { ApiProperty } from "@nestjs/swagger";

export class RegistrarTransaccionCajaDTO {
    @ApiProperty({ description: 'Usuario que realiza la operación de caja' })
    usuario!: string;

    @ApiProperty({ description: 'Saldo inicial de caja' })
    saldo_inicial!: number;

    @ApiProperty({ description: 'Ingresos por ventas' })
    ingresos_ventas!: number;

    @ApiProperty({ description: 'Otros ingresos' })
    otros_ingresos!: number;

    @ApiProperty({ description: 'Egresos de caja' })
    egresos!: number;

    @ApiProperty({ description: 'Saldo final del periodo' })
    saldo_final!: number;

    @ApiProperty({ description: 'Efectivo final en caja' })
    efectivo_final!: number;

    @ApiProperty({ description: 'Diferencia entre efectivo y saldo' })
    diferencia!: number;

    @ApiProperty({ description: 'Utilidad generada' })
    utilidad_generada!: number;

    @ApiProperty({ description: 'Estado de la transacción o apertura/cierre de caja' })
    estado!: boolean;
}