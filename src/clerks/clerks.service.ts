import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Clerk } from './clerks.model';
import { CreateClerkDto } from './dto/create-clerk.dto';

@Injectable()
export class ClerksService {

  constructor(@InjectModel(Clerk) private clerkRepository: typeof Clerk) { }
  async create(dto: CreateClerkDto) {
    const clerk = await this.clerkRepository.create({ ...dto })
    return clerk;
  }
}
