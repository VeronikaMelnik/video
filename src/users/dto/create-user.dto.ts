import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: 'Veronika', description: 'Имя' })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @ApiProperty({ example: 'veronikamelnik00@mail.ru', description: 'Уникальный email' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Неккоректный email' })
  readonly email: string;

  @ApiProperty({ example: '246810', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Пароль должен 4-16 символов!' })
  readonly password: string

  @ApiProperty({ example: 'false', description: 'Роль' })
  readonly isAdmin: boolean
}