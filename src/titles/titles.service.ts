import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Title } from './titles.model';
import { CreateTitleDto } from './dto/create-title.dto';

@Injectable()
export class TitlesService {

  constructor(@InjectModel(Title) private titleRepository: typeof Title) { }
  async create(dto: CreateTitleDto) {
    const title = await this.titleRepository.create({ ...dto })
    return title;
  }
}
