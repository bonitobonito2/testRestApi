import LoginDto from './login.dto';
import errorDto from './error.dto';
import User from '../user.entity';

export default class ReturnDto {
  valid: boolean;
  data: User | null;
  error: errorDto | null;
}
