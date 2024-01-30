import { IsString, Length, IsEmail } from "class-validator";

export class CreateTeamDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @IsString({ message: 'Должно быть строкой' })
  readonly city: string;

  @IsString({ message: 'Должно быть строкой' })
  readonly address: string;

}