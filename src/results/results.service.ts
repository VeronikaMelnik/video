import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateResultDto } from './dto/create-result.dto';
import { Result } from './results.model';

@Injectable()
export class ResultsService {

  constructor(@InjectModel(Result) private resultRepository: typeof Result) { }
  async create(dto: CreateResultDto) {
    const result = await this.resultRepository.create({ ...dto })
    return result;
  }
}
