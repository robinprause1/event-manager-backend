import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BusinessUnitService } from './business-unit.service';

@Controller('business-unit')
export class BusinessUnitController {
  constructor(private readonly businessUnitService: BusinessUnitService) {}

  @Post()
  async addBusinessUnit(@Body('name') name: string, @Body('description') description: string) {
    const generatedId = await this.businessUnitService.createBusinessUnit(name, description);
    return { id: generatedId };
  }

  @Get()
  async getAll(): Promise<any> {
    return await this.businessUnitService.getAllBusinessUnits();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<any> {
    return await this.businessUnitService.getBusinessUnitById(id);
  }
}

