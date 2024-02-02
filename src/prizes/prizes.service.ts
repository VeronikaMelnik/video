import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Prize } from './prizes.model';
import { CreatePrizeDto } from './dto/create-prize.dto';
@Injectable()
export class PrizesService {

  constructor(@InjectModel(Prize) private prizeRepository: typeof Prize) { }
  async create(dto: CreatePrizeDto) {
    const prize = await this.prizeRepository.create({ ...dto })
    return prize;
  }
}
