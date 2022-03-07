import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class JoinRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '태웅정',
    description: '닉네임',
  })
  public username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'nestjs',
    description: '비밀번호',
  })
  public password: string;
}