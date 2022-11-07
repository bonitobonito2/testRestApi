import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import User from './user.entity';
import UserCreateDto from './dtos/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  async getUsers(@Body() userCreateDto: UserCreateDto): Promise<User> {
    return this.usersService.insertData(userCreateDto);
  }
}
