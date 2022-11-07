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

  insertData(userCreateDto : UserCreateDto): Promise<UserCreateDto>{
    const {userName,email,password} = userCreateDto
    const user = this.tasksRepository.create({
        userName : userName,
        email : email,
        password: password

    })
    return this.tasksRepository.save(user)
  }
}
