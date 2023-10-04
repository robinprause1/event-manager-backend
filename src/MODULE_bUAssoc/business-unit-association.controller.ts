import { Controller, Get, Param } from '@nestjs/common';
import { BusinessUnitAssociationService } from './business-unit-association.service';

@Controller('business-unit-association')
export class BusinessUnitAssociationController {
  constructor(private readonly service: BusinessUnitAssociationService) {}

  @Get('business-unit/:id/lines')
  async getAllLinesOfBusinessUnit(@Param('id') businessUnitId: string) {
    return this.service.getAllLinesOfBusinessUnit(businessUnitId);
  }

  @Get('line/:id/staff')
  async getAllStaffForLine(@Param('id') lineId: string) {
    return this.service.getAllStaffForLine(lineId);
  }

  @Get('staff/:id/associations')
  async findStaffAssociations(@Param('id') staffId: string) {
    return this.service.findStaffAssociations(staffId);
  }

  @Get('business-unit/:businessUnitId/staff')
  async getAllStaffOfBusinessUnit(@Param('businessUnitId') businessUnitId: string) {
    try {
      const staff = await this.service.getAllStaffOfBusinessUnit(businessUnitId);
      return staff;
    } catch (error) {
      // Handle error appropriately
    }
  }
}
