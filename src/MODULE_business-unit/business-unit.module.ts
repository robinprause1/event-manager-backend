
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessUnitController } from './business-unit.controller';
import { BusinessUnitService } from './business-unit.service';
import { BusinessUnitSchema } from './business-unit.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'BusinessUnit', schema: BusinessUnitSchema }])
  ],
  controllers: [BusinessUnitController],
  providers: [BusinessUnitService],
})
export class BusinessUnitModule {}
