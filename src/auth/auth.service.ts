import { Injectable, InternalServerErrorException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { RegisterUserDto } from "src/usuarios/user.dto"
import { User } from "src/usuarios/user.entity"
import { Repository } from "typeorm"
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from "./login.dto"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService
    ){}

    async register(registerUserDto: RegisterUserDto){
        const {password, ...userData} = registerUserDto

        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const newUser = this.userRepository.create({
                ...userData,
                password: hashedPassword
            })

            await this.userRepository.save(newUser)

            const { password: _, ...userWithoutPassword } = newUser
            return userWithoutPassword
        }catch (error: any) {
            if (error.code === 'SQLITE_CONSTRAINT'){
                throw new Error('El usuario o DPI ya existe')
            }
            throw new InternalServerErrorException('Error al registrar el usuario')
        }
    }

    async login(loginUserDto: LoginUserDto){
        const { usuario, password } = loginUserDto

        const user = await this.userRepository.findOne({ where: { usuario } })

        if(!user){
            throw new Error('Usuario no encontrado')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid){
            throw new Error('Contraseña incorrecta')
        }

        const payload = {
            sub: user.id,
            nombre: user.nombre,
            usuario: user.usuario,
            role: user.role
        }

        return {
            user: {
                id: user.id,
                nombre: user.nombre,
                usuario: user.usuario,
                role: user.role
            },
            token: this.jwtService.sign(payload)
        }
    }
}