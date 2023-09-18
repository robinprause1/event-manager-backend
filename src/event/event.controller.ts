
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.model';

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

  // Voting endpoints here
}
