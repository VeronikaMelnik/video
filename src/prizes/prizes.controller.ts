import { Body, Controller, Post } from '@nestjs/common';
import { PrizesService } from './prizes.service';
import { CreatePrizeDto } from './dto/create-prize.dto';

@Controller('prizes')
export class PrizesController {

  constructor(private prizeService: PrizesService) { }
  @Post()
  createPrize(@Body() dto: CreatePrizeDto) {
    this.prizeService.create(dto)
  }
}
