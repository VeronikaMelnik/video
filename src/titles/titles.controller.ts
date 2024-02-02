import { Body, Controller, Post } from '@nestjs/common';
import { TitlesService } from './titles.service';
import { CreateTitleDto } from './dto/create-title.dto';

@Controller('titles')
export class TitlesController {

  constructor(private titleService: TitlesService) { }
  @Post()
  createTitle(@Body() dto: CreateTitleDto) {
    this.titleService.create(dto)
  }
}
