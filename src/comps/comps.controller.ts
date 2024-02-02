import { Body, Controller, Post } from '@nestjs/common';
import { CompsService } from './comps.service';
import { CreateCompDto } from './dto/create-comps.dto';

@Controller('comps')
export class CompsController {

  constructor(private compService: CompsService) { }
  @Post()
  createComp(@Body() dto: CreateCompDto) {
    this.compService.create(dto)
  }
}
