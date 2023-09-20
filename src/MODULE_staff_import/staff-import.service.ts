
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff } from './staff-import.model';
import * as csvParser from 'csv-parser';
import { Readable } from 'stream';

@Injectable()
export class StaffImportService {
  constructor(
    @InjectModel('Staff') private readonly staffModel: Model<Staff>,
  ) {}

  async importCsvFile(fileBuffer: Buffer): Promise<void> {
    const staffStream = csvParser();
    
    const bufferStream = new Readable();
    bufferStream.push(fileBuffer);
    bufferStream.push(null);
    
    bufferStream.pipe(staffStream);

    for await (const row of staffStream) {
      const newStaff = new this.staffModel(row);
      await newStaff.save();
    }
  }
}
