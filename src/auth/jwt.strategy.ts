import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 1. Extrae el token del header: Authorization: Bearer <token>
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 2. Ignora la expiración al validar (false = si el token expiró, la petición rechaza)
      ignoreExpiration: false,
      // 3. La misma clave secreta que configuraste en JwtModule
      secretOrKey: 'MI_CLAVE_SECRETA_SUPER_SEGURA',
    });
  }

  // 4. Se ejecuta AUTOMÁTICAMENTE cuando el token es válido
  async validate(payload: any) {
    // El 'payload' es la información desglosada que firmaste al hacer login:
    // { sub: user.id, usuario: user.usuario, role: user.role }

    // Lo que retornes aquí se inyectará automáticamente en req.user de cada petición
    return { 
      userId: payload.sub, 
      usuario: payload.usuario, 
      role: payload.role 
    };
  }
}