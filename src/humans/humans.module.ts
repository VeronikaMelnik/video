import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { FilesModule } from "../files/files.module";
import { HumansController } from './humans.controller';
import { HumansService } from './humans.service';
import { Human } from './humans.model';

@Module({
  providers: [HumansService],
  controllers: [HumansController],
  imports: [
    SequelizeModule.forFeature([Human]),
    FilesModule
  ]
})
export class HumansModule { }