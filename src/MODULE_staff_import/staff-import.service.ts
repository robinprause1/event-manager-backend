import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff } from './staff-import.model';
import * as csvParser from 'csv-parser';
import { Readable } from 'stream';
import { Line } from 'src/MODULE_line/line.model';
import { BusinessUnit } from 'src/MODULE_business-unit/business-unit.model';

@Injectable()
export class StaffImportService {
  constructor(
    @InjectModel('Staff') private readonly staffModel: Model<Staff>,
    @InjectModel('Line') private readonly lineModel: Model<Line>,
    @InjectModel('BusinessUnit') private readonly businessUnitModel: Model<BusinessUnit>
  ) {}

  async importCsvFile(fileBuffer: Buffer): Promise<void> {
    const staffStream = csvParser();
    
    const bufferStream = new Readable();
    bufferStream.push(fileBuffer);
    bufferStream.push(null);
    
    bufferStream.pipe(staffStream);

    for await (const row of staffStream) {
      const line = await this.lineModel.findOne({ name: row.line });
      const businessUnit = await this.businessUnitModel.findOne({ name: row.businessUnit });

      if (!line || !businessUnit) {
        throw new NotFoundException(`Line or Business Unit not found for staff ${row.name}`);
      }

      const newStaff = new this.staffModel({
        ...row,
        line: line._id,
        businessUnit: businessUnit._id,
      });

      await newStaff.save();
    }
  }
}
