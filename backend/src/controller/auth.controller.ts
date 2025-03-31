import { Controller, Post, Body, UsePipes, ValidationPipe, BadRequestException, UnauthorizedException, BadGatewayException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/user.service';
import { SignupDto } from '../dto/signup.dto';
import { Validate } from 'class-validator';

import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('signup')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false }))
  async signup(@Body() body: SignupDto) {

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const userExists = await this.usersService.findOne(body.email);

    if(userExists) throw new BadRequestException("User already exists");

    const user = await this.usersService.create({
      ...body,
      password: hashedPassword,
    }); 
  
    const token = this.authService.login(user);
  
    return {
      message: 'User registered successfully',
      data: { token } 
    };
  }
   
  @Post('signin')
  async signin(@Body() body: any) {
    const user = await this.authService.validateUser(body.email as string, body.password as string);
    if (!user) throw new BadRequestException('Invalid credentials');

    const token = this.authService.login(user);
  
    return {
      message: 'User signed in successfully',
      data: { token } 
    };
  }
}
