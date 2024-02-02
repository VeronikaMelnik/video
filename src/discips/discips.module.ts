import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { DiscipsService } from './discips.service';
import { DiscipsController } from './discips.controller';
import { Discip } from './discips.model';
import { CompDiscip } from 'src/comps-discips/comps-discips.model';

@Module({
  providers: [DiscipsService],
  controllers: [DiscipsController],
  imports: [
    SequelizeModule.forFeature([Discip, CompDiscip])
  ]
})
export class DiscipsModule { }