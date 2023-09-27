import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessUnitAssociationService } from './business-unit-association.service';
import { BusinessUnitAssociationController } from './business-unit-association.controller';
import { StaffSchema } from 'src/MODULE_staff/staff.model';
import { LineSchema } from 'src/MODULE_line/line.model';
import { BusinessUnitSchema } from 'src/MODULE_business-unit/business-unit.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Staff', schema: StaffSchema },
      { name: 'Line', schema: LineSchema },
      { name: 'BusinessUnit', schema: BusinessUnitSchema },
    ]),
  ],
  providers: [BusinessUnitAssociationService],
  controllers: [BusinessUnitAssociationController],
})
export class BusinessUnitAssociationModule {}
