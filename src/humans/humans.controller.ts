import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";
import { HumansService } from './humans.service';
import { CreateHumanDto } from './dto/create-human.dto';

@Controller('humans')
export class HumansController {

  constructor(private humanService: HumansService) { }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createHuman(@Body() dto: CreateHumanDto,
    @UploadedFile() image) {
    return this.humanService.create(dto, image)
  }

}