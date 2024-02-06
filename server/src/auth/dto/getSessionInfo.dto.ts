import { IsNumber, IsString } from 'class-validator';

export class GetSessionInfoDto {
  @IsNumber()
  id: number;

  @IsString()
  email: string;

  @IsString()
  iat: string;

  @IsString()
  exp: string;
}
