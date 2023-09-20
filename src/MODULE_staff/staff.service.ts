
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff } from './staff.model';

@Injectable()
export class StaffService {
  constructor(
    @InjectModel('Staff') private readonly staffModel: Model<Staff>,
  ) {}

  async create(staff: Staff): Promise<Staff> {
    const newStaff = new this.staffModel(staff);
    return newStaff.save();
  }

  async findAll(): Promise<Staff[]> {
    return this.staffModel.find().exec();
  }

  async findOne(id: string): Promise<Staff> {
    return this.staffModel.findById(id).exec();
  }

  async update(id: string, staff: Staff): Promise<Staff> {
    return this.staffModel.findByIdAndUpdate(id, staff, { new: true }).exec();
  }

  async delete(id: string): Promise<Staff> {
    return this.staffModel.findByIdAndDelete(id).exec();
  }
}
