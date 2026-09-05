import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from 'node_modules/@nestjs/swagger/dist/decorators/api-property.decorator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty({ message: 'El usuario es obligatorio' })
  @ApiProperty({ description: 'Nombre de usuario' })
  usuario!: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @ApiProperty({ description: 'Contraseña del usuario' })
  password!: string;
}