import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { CompDiscip } from 'src/comps-discips/comps-discips.model';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { Result } from './results.model';
import { Prize } from 'src/prizes/prizes.model';

@Module({
  providers: [ResultsService],
  controllers: [ResultsController],
  imports: [
    SequelizeModule.forFeature([Result, User, CompDiscip, Prize])
  ]
})
export class ResultsModule { }
