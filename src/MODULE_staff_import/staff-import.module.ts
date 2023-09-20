
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StaffSchema } from './staff-import.model';
import { StaffImportService } from './staff-import.service';
import { StaffImportController } from './staff-import.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Staff', schema: StaffSchema }])
  ],
  providers: [StaffImportService],
  controllers: [StaffImportController]
})
export class StaffImportModule {}
