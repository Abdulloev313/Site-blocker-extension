import { IsOptional } from 'class-validator';

export class BlockListQueryDto {
  @IsOptional()
  q?: string;
}
