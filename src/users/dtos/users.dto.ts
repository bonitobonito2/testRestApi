import { isString } from 'util';

import { MinLength, IsEmail, IsString } from 'class-validator';

export default class UserCreateDto {
  @IsString()
  @MinLength(5)
  password: string;
  @IsString()
  userName: string;
  @IsEmail()
  email: string = undefined;
}
