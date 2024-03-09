import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignUpDto {
  @ApiProperty({ example: 'test@gmail.com' })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Asf3&msj' })
  @IsString()
  @IsNotEmpty()
  // @MinLength(8, { message: 'Пароль должен содержать минимум 8 символов' })
  // @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
  //   message:
  //     'Пароль должен содержать минимум 1 цифру, 1 заглавную букву и 1 спец. символ',
  // })
  password: string;
}
