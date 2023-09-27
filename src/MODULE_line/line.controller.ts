import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LineService } from './line.service';

@Controller('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Post()
  async addLine(@Body('name') name: string, @Body('businessUnitId') businessUnitId: string) {
    const generatedId = await this.lineService.createLine(name, businessUnitId);
    return { id: generatedId };
  }

  @Get()
  async getAll(): Promise<any> {
    return await this.lineService.getAllLines();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<any> {
    return await this.lineService.getLineById(id);
  }
}
