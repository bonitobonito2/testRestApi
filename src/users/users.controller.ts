import { Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  usersService: UsersService;
  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }
  @Get()
  getUsers(){
    this.usersService.insertData()
    return [{sms : 'people'}]
  }
}
