import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/usuarios/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from "node_modules/@nestjs/passport/dist/passport.module";
import { JwtModule } from "node_modules/@nestjs/jwt/dist/jwt.module";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'MI_CLAVE_SECRETA_SUPER_SEGURA',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [PassportModule, JwtStrategy]
})

export class AuthModule {}