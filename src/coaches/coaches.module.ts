import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Human } from 'src/humans/humans.model';
import { CoachesService } from './coaches.service';
import { CoachesController } from './coaches.controller';
import { Coach } from './coaches.model';

@Module({
  providers: [CoachesService],
  controllers: [CoachesController],
  imports: [
    SequelizeModule.forFeature([Coach, Human])
  ]
})
export class CoachesModule { }
