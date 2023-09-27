import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventSchema } from './event.model';
import { LineSchema } from 'src/MODULE_line/line.model';
import { BusinessUnitSchema } from 'src/MODULE_business-unit/business-unit.model';
import { StaffSchema } from 'src/MODULE_staff/staff.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Event', schema: EventSchema },
      { name: 'Staff', schema: StaffSchema },
      { name: 'Line', schema: LineSchema },
      { name: 'BusinessUnit', schema: BusinessUnitSchema }
    ]),
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
