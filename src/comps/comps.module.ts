import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { CompsService } from './comps.service';
import { CompsController } from './comps.controller';
import { Comp } from './comps.model';
import { CompDiscip } from 'src/comps-discips/comps-discips.model';

@Module({
  providers: [CompsService],
  controllers: [CompsController],
  imports: [
    SequelizeModule.forFeature([Comp, CompDiscip])
  ]
})
export class CompsModule { }