
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.model';
import { Types } from 'mongoose';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async addEvent(@Body() event: Event): Promise<Event> {
    return this.eventService.create(event);
  }

  @Get()
  async getAllEvents(): Promise<Event[]> {
    return this.eventService.readAll();
  }

  @Get(':id')
  async getEventById(@Param('id') id: string): Promise<Event> {
    return this.eventService.readById(id);
  }

  @Put(':id')
  async updateEvent(@Param('id') id: string, @Body() event: Event): Promise<Event> {
    return this.eventService.update(id, event);
  }

  @Delete(':id')
  async deleteEvent(@Param('id') id: string): Promise<Event> {
    return this.eventService.delete(id);
  }

  @Post(':eventId/addStaff/:staffId')
  async addStaffToEvent(@Param('eventId') eventId: string, @Param('staffId') staffId: string): Promise<Event> {
    return this.eventService.addStaffToEvent(eventId, new Types.ObjectId(staffId));
  }

  @Post(':eventId/removeStaff/:staffId')
  async removeStaffFromEvent(@Param('eventId') eventId: string, @Param('staffId') staffId: string): Promise<Event> {
    return this.eventService.removeStaffFromEvent(eventId, new Types.ObjectId(staffId));
  }

  @Post(':eventId/addStaffFromLine/:lineId')
  async addStaffFromLine(@Param('eventId') eventId: string, @Param('lineId') lineId: string): Promise<Event> {
    return this.eventService.addStaffFromLine(eventId, lineId);
  }

  @Delete(':eventId/removeStaffFromLine/:lineId')
  async removeStaffFromLine(@Param('eventId') eventId: string, @Param('lineId') lineId: string): Promise<Event> {
    return this.eventService.removeStaffFromLine(eventId, lineId);
  }

  @Post(':eventId/addStaffFromBusinessUnit/:businessUnitId')
  async addStaffFromBusinessUnit(@Param('eventId') eventId: string, @Param('businessUnitId') businessUnitId: string): Promise<Event> {
    return this.eventService.addStaffFromBusinessUnit(eventId, businessUnitId);
  }

  @Delete(':eventId/removeStaffFromBusinessUnit/:businessUnitId')
  async removeStaffFromBusinessUnit(@Param('eventId') eventId: string, @Param('businessUnitId') businessUnitId: string): Promise<Event> {
    return this.eventService.removeStaffFromBusinessUnit(eventId, businessUnitId);
  }
}
