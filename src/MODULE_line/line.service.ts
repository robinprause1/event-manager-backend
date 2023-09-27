import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Line } from './line.model';

@Injectable()
export class LineService {
  constructor(@InjectModel('Line') private readonly lineModel: Model<Line>) {}

  async createLine(name: string, businessUnitId: string): Promise<Line> {
    const newLine = new this.lineModel({
      name,
      businessUnit: new Types.ObjectId(businessUnitId),
    });
    return await newLine.save();
  }

  async getAllLines(): Promise<Line[]> {
    return await this.lineModel.find().exec();
  }

  async getLineById(id: string): Promise<Line> {
    return await this.lineModel.findById(id).exec();
  }
}
