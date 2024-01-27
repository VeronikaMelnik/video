import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'Veronika', description: 'Имя' })
  readonly name: string;

  @ApiProperty({ example: 'veronikamelnik00@mail.ru', description: 'Уникальный email' })
  readonly email: string;

  @ApiProperty({ example: '246810', description: 'Пароль' })
  readonly password: string

  @ApiProperty({ example: 'false', description: 'Роль' })
  readonly isAdmin: boolean
}