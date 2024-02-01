import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { FilesService } from "../files/files.service";
import { Human } from './humans.model';
import { CreateHumanDto } from './dto/create-human.dto';

@Injectable()
export class HumansService {

  constructor(@InjectModel(Human) private humanRepository: typeof Human,
    private fileService: FilesService) { }

  async create(dto: CreateHumanDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const human = await this.humanRepository.create({ ...dto, image: fileName })
    return human;
  }
}