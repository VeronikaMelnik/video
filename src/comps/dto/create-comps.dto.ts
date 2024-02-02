import { IsString } from "class-validator";

export class CreateCompDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  readonly date: Date;
}