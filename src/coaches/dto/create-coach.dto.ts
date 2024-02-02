import { IsNumber } from "class-validator";

export class CreateCoachDto {
  @IsNumber({}, { message: 'Должно быть числом (количество лет)' })
  readonly experience: number;

}