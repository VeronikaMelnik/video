import { Body, Controller, Post } from '@nestjs/common';
import { CreateClerkDto } from './dto/create-clerk.dto';
import { ClerksService } from './clerks.service';

@Controller('clerks')
export class ClerksController {

  constructor(private clerkService: ClerksService) { }
  @Post()
  createClerk(@Body() dto: CreateClerkDto) {
    this.clerkService.create(dto)
  }
}
