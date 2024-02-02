import { IsString } from "class-validator";

export class CreateDiscipDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly type: string;
}