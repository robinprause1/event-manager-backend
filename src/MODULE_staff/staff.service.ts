import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff } from './staff.model';
import { BusinessUnit } from 'src/MODULE_business-unit/business-unit.model';
import { Line } from 'src/MODULE_line/line.model';

@Injectable()
export class StaffService {
  constructor(
    @InjectModel('Staff') private readonly staffModel: Model<Staff>,
    @InjectModel('Line') private readonly lineModel: Model<Line>, // Inject Line model
    @InjectModel('BusinessUnit') private readonly businessUnitModel: Model<BusinessUnit> // Inject BusinessUnit model
  ) {}

  async create(staff: Staff): Promise<Staff> {
    try {
      const newStaff = new this.staffModel({
        ...staff,
        line: staff.line, // Assume you pass the ObjectID here
        businessUnit: staff.businessUnit, // Assume you pass the ObjectID here
      });
      return await newStaff.save();
    } catch (error) {
      throw new Error('Error creating staff: ' + error.message);
    }
  }

  async findAll(): Promise<Staff[]> {
    try {
      return await this.staffModel.find().exec();
    } catch (error) {
      // Handle error here
      throw error;
    }
  }

  async findOne(id: string): Promise<Staff> {
    try {
      return await this.staffModel.findById(id).exec();
    } catch (error) {
      // Handle error here
      throw error;
    }
  }

  async update(id: string, staff: Staff): Promise<Staff> {
    try {
      return await this.staffModel.findByIdAndUpdate(id, staff, { new: true }).exec();
    } catch (error) {
      // Handle error here
      throw error;
    }
  }

  async delete(id: string): Promise<Staff> {
    try {
      return await this.staffModel.findByIdAndDelete(id).exec();
    } catch (error) {
      // Handle error here
      throw error;
    }
  }
}
