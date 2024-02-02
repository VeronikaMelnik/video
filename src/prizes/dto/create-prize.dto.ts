import { IsString } from "class-validator";

export class CreatePrizeDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;
}