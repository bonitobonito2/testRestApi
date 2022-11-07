import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import UserCreateDto from './dtos/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
//   usersService: UsersService;
  constructor(private usersService: UsersService) {
    this.usersService = usersService;
  }
  @Post()
  getUsers(@Body() userCreateDto : UserCreateDto): Promise<UserCreateDto>{
   return this.usersService.insertData(userCreateDto)
  }
}
