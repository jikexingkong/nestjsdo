import { Injectable } from '@nestjs/common';
import { IsOptional, IsUUID } from 'class-validator';

@Injectable()
export class QueryArticleDto {
    @IsOptional()
    @IsUUID()
    category?: string;
}
