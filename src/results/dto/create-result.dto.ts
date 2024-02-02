import { IsNumber } from "class-validator";

export class CreateResultDto {
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly place: number;

}