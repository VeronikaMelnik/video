import { Body, Controller, Post } from '@nestjs/common';
import { DiscipsService } from './discips.service';
import { CreateDiscipDto } from './dto/create-discip.dto';

@Controller('discips')
export class DiscipsController {

  constructor(private discipService: DiscipsService) { }
  @Post()
  createDiscip(@Body() dto: CreateDiscipDto) {
    this.discipService.create(dto)
  }
}
