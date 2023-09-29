import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StaffImportService } from './staff-import.service';
import { StaffSchema } from './staff-import.model';
import { LineSchema } from '../MODULE_line/line.model'
import { BusinessUnitSchema } from '../MODULE_business-unit/business-unit.model'
import { StaffImportController } from './staff-import.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Staff', schema: StaffSchema },
      { name: 'Line', schema: LineSchema },
      { name: 'BusinessUnit', schema: BusinessUnitSchema }
    ])
  ],
  providers: [StaffImportService],
  controllers: [StaffImportController]
})
export class StaffImportModule {}
