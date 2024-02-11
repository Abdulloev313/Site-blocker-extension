import { IsNumber } from 'class-validator';
import { BlockItemDto } from './BlockItem.dto';

export class BlockListDto {
  @IsNumber()
  id: number;

  @IsNumber()
  ownerId: number;

  items: BlockItemDto[];
}
