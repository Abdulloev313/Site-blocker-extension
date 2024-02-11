import { $Enums } from '@prisma/client';
import { IsDate, IsIn, IsNumber, IsString } from 'class-validator';

export class BlockItemDto {
  @IsNumber()
  id: number;

  @IsNumber()
  blockListId: number;

  @IsIn([$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website])
  type: $Enums.BlockItemType;

  @IsString()
  data: string;

  @IsDate()
  createdAt: Date;
}
