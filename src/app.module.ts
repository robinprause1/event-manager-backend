import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './MODULE_event/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StaffModule } from './MODULE_staff/staff.module';
import { StaffImportModule } from './MODULE_staff_import/staff-import.module';
import { FeedbackModule } from './MODULE_event_feedback/feedback.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/event-manager'),
    EventModule,
    StaffModule,
    StaffImportModule,
    FeedbackModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
