import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Human } from 'src/humans/humans.model';
import { ClerksService } from './clerks.service';
import { ClerksController } from './clerks.controller';
import { Clerk } from './clerks.model';

@Module({
  providers: [ClerksService],
  controllers: [ClerksController],
  imports: [
    SequelizeModule.forFeature([Clerk, Human])
  ]
})
export class ClerksModule { }
