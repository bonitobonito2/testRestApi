import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import User from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly tasksRepository: Repository<User>,
  ) {}

  insertData(){
    const user = this.tasksRepository.create({
        userName : 'zaal',
        email : 'zal@gmail.com',
        password: 'password'

    })
    this.tasksRepository.save(user)
  }
}
