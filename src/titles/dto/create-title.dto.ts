import { IsString } from "class-validator";

export class CreateTitleDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  readonly date: Date;


}