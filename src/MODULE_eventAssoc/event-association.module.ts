import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventAssociationService } from './event-association.service';
import { EventAssociationController } from './event-association.controller';
import { StaffSchema } from 'src/MODULE_staff/staff.model';
import { LineSchema } from 'src/MODULE_line/line.model';
import { EventSchema } from 'src/MODULE_event/event.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Staff', schema: StaffSchema },
      { name: 'Line', schema: LineSchema },
      { name: 'Event', schema: EventSchema },
    ]),
  ],
  providers: [EventAssociationService],
  controllers: [EventAssociationController],
})
export class EventAssociationModule {}
