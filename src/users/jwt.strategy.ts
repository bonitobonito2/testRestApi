import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import User from './user.entity';
import { JwtService } from '@nestjs/jwt/dist';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtPayload } from './jwtPayload.interface';

interface idk {
  email: string;
  iat: number;
  exp: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly tasksRepository: Repository<User>,
    private jwtService: JwtService,
  ) {
    super({
      secretOrKey: 'topSecret51',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: idk): Promise<User> {
    const { email } = payload;
    const userExsists = await this.tasksRepository.findOneBy({ email: email });
    if (userExsists) {
      return userExsists;
    } else {
      throw new UnauthorizedException();
    }
  }
}
