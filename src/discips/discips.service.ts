import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Discip } from './discips.model';
import { CreateDiscipDto } from './dto/create-discip.dto';
@Injectable()
export class DiscipsService {

  constructor(@InjectModel(Discip) private discipRepository: typeof Discip) { }
  async create(dto: CreateDiscipDto) {
    const discip = await this.discipRepository.create({ ...dto })
    return discip;
  }
}
