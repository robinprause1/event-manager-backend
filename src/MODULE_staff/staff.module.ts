import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { StaffSchema } from './staff.model';
import { LineSchema } from '../MODULE_line/line.model'; // Assume you have this
import { BusinessUnitSchema } from '../MODULE_business-unit/business-unit.model'; // Assume you have this

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Staff', schema: StaffSchema },
      { name: 'Line', schema: LineSchema },
      { name: 'BusinessUnit', schema: BusinessUnitSchema },
    ]),
  ],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}
