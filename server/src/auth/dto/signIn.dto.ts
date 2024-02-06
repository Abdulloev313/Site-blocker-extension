import { IsNotEmpty, IsString } from 'class-validator';
import { SignUpDto } from './signUp.dto';

export class SignInDto extends SignUpDto {
  constructor() {
    super();
  }

  @IsString()
  @IsNotEmpty()
  password: string;
}
