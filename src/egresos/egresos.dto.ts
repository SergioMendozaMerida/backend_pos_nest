import { ApiProperty } from "@nestjs/swagger";

export class CreateEgresoDto {
    @ApiProperty({ description: 'Usuario que registra el egreso' })
    usuario!: string;

    @ApiProperty({ description: 'Razón por la que se realiza el egreso' })
    razon!: string;

    @ApiProperty({ description: 'Proveedor o destinatario del egreso' })
    proveedor!: string;

    @ApiProperty({ description: 'Monto del egreso' })
    monto!: number;
}
