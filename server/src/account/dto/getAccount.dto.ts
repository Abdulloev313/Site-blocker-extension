import { IsBoolean, IsNumber } from 'class-validator';

export class GetAccountDto {
  @IsNumber()
  id: number;

  @IsNumber()
  ownerId: number;

  @IsBoolean()
  isBlockingEnabled: boolean;
}
