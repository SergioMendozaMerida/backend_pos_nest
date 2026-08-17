import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoriaDto {
    @ApiProperty({ description: 'Definición de categoría.'})
    categoria!: string;

    @ApiProperty()
    descripcion!: string;
}