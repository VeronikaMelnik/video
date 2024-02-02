import { Body, Controller, Post } from '@nestjs/common';
import { ResultsService } from './results.service';
import { CreateResultDto } from './dto/create-result.dto';

@Controller('results')
export class ResultsController {

  constructor(private resultService: ResultsService) { }
  @Post()
  createResult(@Body() dto: CreateResultDto) {
    this.resultService.create(dto)
  }
}
