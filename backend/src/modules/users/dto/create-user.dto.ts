import {IsString, IsNotEmpty, IsEnum, IsBoolean, IsEmpty, IsOptional, Validate} from 'class-validator'
import { Transform } from 'class-transformer';
import { hashSync } from 'bcryptjs';
import { ApiProperty,ApiPropertyOptional } from "@nestjs/swagger/dist";

export class CreateUserDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
      groups: ['transform'],
    })
    password: string;

  }
