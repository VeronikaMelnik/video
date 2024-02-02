import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { TitlesService } from './titles.service';
import { TitlesController } from './titles.controller';
import { Title } from './titles.model';

@Module({
  providers: [TitlesService],
  controllers: [TitlesController],
  imports: [
    SequelizeModule.forFeature([Title, User])
  ]
})
export class TitlesModule { }
