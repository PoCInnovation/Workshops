import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ArticleDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    body: string;

    @ApiProperty()
    @IsString()
    author: string;
}
