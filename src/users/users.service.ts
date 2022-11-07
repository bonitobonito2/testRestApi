import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import UserCreateDto from './dtos/users.dto';

import User from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly tasksRepository: Repository<User>,
  ) {}

  async insertData(data: UserCreateDto): Promise<User> {
    return this.tasksRepository.save({
      userName: data.userName,
      email: data.email,
      password: data.password,
    });
  }
}
