import { Controller, Get, Param } from '@nestjs/common';
import { EventAssociationService } from './event-association.service';

@Controller('event-association')
export class EventAssociationController {
  constructor(private readonly service: EventAssociationService) {}

  @Get('staff/:id/events')
  async getAllEventsOfStaff(@Param('id') staffId: string) {
    return this.service.getAllEventsOfStaff(staffId);
  }

  @Get('line/:id/events')
  async getAllEventsOfLine(@Param('id') lineId: string) {
    return this.service.getAllEventsOfLine(lineId);
  }
}
