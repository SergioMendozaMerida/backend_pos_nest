import { IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from 'node_modules/@nestjs/swagger/dist/decorators/api-property.decorator';

export class RegisterUserDto {
    @IsString()
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @ApiProperty({ description: 'Nombre del usuario' })
    nombre!: string;

    @IsString()
    @IsNotEmpty({ message: 'El DPI es obligatorio' })
    @ApiProperty({ description: 'DPI del usuario' })
    dpi!: string;

    @IsString()
    @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
    @ApiProperty({ description: 'Nombre de usuario' })
    usuario!: string;

    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    @ApiProperty({ description: 'Contraseña del usuario' })
    password!: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'Rol del usuario' })
    role?: string;
}