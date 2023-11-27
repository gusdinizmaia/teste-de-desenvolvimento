import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger/dist";

export class LoginDTO {
  
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
