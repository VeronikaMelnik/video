import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { FilesModule } from "../files/files.module";
import { HumansController } from './humans.controller';
import { HumansService } from './humans.service';
import { Human } from './humans.model';
import { Coach } from 'src/coaches/coaches.model';
import { Clerk } from 'src/clerks/clerks.model';

@Module({
  providers: [HumansService],
  controllers: [HumansController],
  imports: [
    SequelizeModule.forFeature([Human, Clerk, Coach]),
    FilesModule
  ]
})
export class HumansModule { }