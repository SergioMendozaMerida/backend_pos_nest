import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "src/usuarios/user.dto";
import { LoginUserDto } from "./login.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('register')
    @UsePipes(new ValidationPipe({whitelist: true}))
    async register(@Body() registerUserDto: RegisterUserDto){
        return await this.authService.register(registerUserDto)
    }

    @Post('login')
    @UsePipes(new ValidationPipe({whitelist: true}))
    async login(@Body() loginUserDto: LoginUserDto){
        return await this.authService.login(loginUserDto)
    }
}