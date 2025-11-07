import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(dto: LoginDto) {
    const { username, password } = dto;

    if (username !== 'admin' && password !== 'admin') {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username };
    const token = this.jwtService.sign(payload);
    return {
      access_token: token,
    };
  }
}
