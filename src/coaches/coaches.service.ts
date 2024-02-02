import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Coach } from './coaches.model';
import { CreateCoachDto } from './dto/create-coach.dto';

@Injectable()
export class CoachesService {

  constructor(@InjectModel(Coach) private coachRepository: typeof Coach) { }
  async create(dto: CreateCoachDto) {
    const coach = await this.coachRepository.create({ ...dto })
    return coach;
  }
}
