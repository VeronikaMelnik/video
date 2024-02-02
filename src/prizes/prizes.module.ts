import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { Result } from 'src/results/results.model';
import { PrizesService } from './prizes.service';
import { PrizesController } from './prizes.controller';
import { Prize } from './prizes.model';

@Module({
  providers: [PrizesService],
  controllers: [PrizesController],
  imports: [
    SequelizeModule.forFeature([Prize, Result])
  ]
})
export class PrizesModule { }