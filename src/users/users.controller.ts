import { Body, Controller, Req, UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import ReturnDto from './dtos/return.dto';
import { AuthGuard } from '@nestjs/passport';
import User from './user.entity';
import UserCreateDto from './dtos/users.dto';
import { UsersService } from './users.service';
import LoginDto from './dtos/login.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  //users/signup
  @Post('/signup')
  async signup(@Body() userCreateDto: UserCreateDto): Promise<ReturnDto> {
    return this.usersService.insertData(userCreateDto);
  }

  @Post('/login')
  async login(@Body() user: LoginDto) {
    return this.usersService.Login(user);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req);
  }
}
