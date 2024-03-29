import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.model';
@Injectable()
export class AuthService {

  constructor(private userService: UsersService,
    private jwtService: JwtService) { }

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto)
    return this.generateToken(user)
  }

  async registration(userDto: CreateUserDto) {
    const canditate = await this.userService.getUsersByEmail(userDto.email)
    if (canditate) {
      throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({ ...userDto, password: hashPassword })
    return this.generateToken(user)
  }

  async generateToken(user: User) {
    const payload = { name: user.name, email: user.email, id: user.id, isAdmin: user.isAdmin }
    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUsersByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(userDto.password, user.password);
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Неккоректный email или пароль' })
  }
}
