import { IsNumber, IsString } from "class-validator";

export class CreateClerkDto {
  @IsNumber({}, { message: 'Должно быть числом (количество лет)' })
  readonly experience: number;

  @IsString({ message: 'Должно быть строкой' })
  readonly position: string;

}