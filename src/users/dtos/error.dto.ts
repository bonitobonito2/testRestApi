import { MinLength, IsEmail, IsString } from 'class-validator';

export default class errorDto {
  @IsString()
  type: string;
  @IsString()
  data: string;
}
