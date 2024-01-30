import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {

  constructor(private teamService: TeamsService) { }
  @Post()
  createTeam(@Body() dto: CreateTeamDto) {
    this.teamService.create(dto)
  }
}
