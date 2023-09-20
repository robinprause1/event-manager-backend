
import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { StaffService } from './staff.service';
import { Staff } from './staff.model';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  async addStaff(@Body() staff: Staff): Promise<Staff> {
    return this.staffService.create(staff);
  }

  @Get()
  async getAllStaff(): Promise<Staff[]> {
    return this.staffService.findAll();
  }

  @Get(':id')
  async getStaff(@Param('id') id: string): Promise<Staff> {
    return this.staffService.findOne(id);
  }

  @Put(':id')
  async updateStaff(@Param('id') id: string, @Body() staff: Staff): Promise<Staff> {
    return this.staffService.update(id, staff);
  }

  @Delete(':id')
  async deleteStaff(@Param('id') id: string): Promise<Staff> {
    return this.staffService.delete(id);
  }
}
