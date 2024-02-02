import { Body, Controller, Post } from '@nestjs/common';
import { CoachesService } from './coaches.service';
import { CreateCoachDto } from './dto/create-coach.dto';

@Controller('coaches')
export class CoachesController {

  constructor(private coachService: CoachesService) { }
  @Post()
  createCoach(@Body() dto: CreateCoachDto) {
    this.coachService.create(dto)
  }
}
