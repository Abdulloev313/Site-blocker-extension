import { $Enums } from '@prisma/client';
import { IsIn, IsString } from 'class-validator';

export class AddBlockItemDto {
  @IsIn([$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website])
  type: $Enums.BlockItemType;

  @IsString()
  data: string;
}
