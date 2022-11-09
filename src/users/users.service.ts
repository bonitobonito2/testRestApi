import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import LoginDto from './dtos/login.dto';
import ReturnDto from './dtos/return.dto';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt/dist';
import * as bycript from 'bcrypt';
import UserCreateDto from './dtos/users.dto';

import User from './user.entity';
import { jwtPayload } from './jwtPayload.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly tasksRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async insertData(data: UserCreateDto): Promise<ReturnDto> {
    const salt = await bycript.genSalt();
    const hashedPassword = await bycript.hash(data.password, salt);
    const userExsists = await this.tasksRepository.findOneBy({
      email: data.email,
    });
    if (userExsists) {
      return {
        valid: true,
        data: null,
        error: {
          type: 'error',
          data: 'user already exsists',
        },
      };
    }
    const user = await this.tasksRepository.save({
      userName: data.userName,
      email: data.email,
      password: hashedPassword,
    });

    return {
      valid: false,
      data: user,
      error: null,
    };
  }

  async Login(user: LoginDto) {
    const { email, password } = user;
    const userExsists = await this.tasksRepository.findOneBy({ email: email });

    if (
      userExsists &&
      (await bycript.compare(password, userExsists.password))
    ) {
      // console.log(userExsists, 'hey');
      // this.jwtService.decode()
      const payload = { email };
      const accsessToken: string = await this.jwtService.sign(payload);
      return { payload: accsessToken };
    } else {
      return {
        payload: 'password or email is incorrect',
      };
    }
  }
}
