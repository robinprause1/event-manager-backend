import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './MODULE_event/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StaffModule } from './MODULE_staff/staff.module';
import { StaffImportModule } from './MODULE_staff_import/staff-import.module';
import { FeedbackModule } from './MODULE_event_feedback/feedback.module';
import { BusinessUnitModule } from './MODULE_business-unit/business-unit.module';
import { BusinessUnitAssociationModule } from './MODULE_bUAssoc/business-unit-association.module';
import { EventAssociationModule } from './MODULE_eventAssoc/event-association.module';
import { LineModule } from './MODULE_line/line.module';
import { VoteModule } from './MODULE_vote/vote.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/event-manager'),
    EventModule,
    StaffModule,
    StaffImportModule,
    FeedbackModule,
    BusinessUnitModule,
    BusinessUnitAssociationModule,
    EventAssociationModule,
    LineModule,
    VoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
