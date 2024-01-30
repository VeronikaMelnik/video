import { Inject, Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from './teams.model';

@Injectable()
export class TeamsService {

  constructor(@InjectModel(Team) private teamRepository: typeof Team) { }
  async create(dto: CreateTeamDto) {
    const team = await this.teamRepository.create({ ...dto })
    return team;
  }
}
