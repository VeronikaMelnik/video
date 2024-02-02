import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comp } from './comps.model';
import { CreateCompDto } from './dto/create-comps.dto';
@Injectable()
export class CompsService {

  constructor(@InjectModel(Comp) private compRepository: typeof Comp) { }
  async create(dto: CreateCompDto) {
    const comp = await this.compRepository.create({ ...dto })
    return comp;
  }
}
