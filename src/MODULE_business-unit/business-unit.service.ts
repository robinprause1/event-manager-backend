
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusinessUnit } from './business-unit.model';

@Injectable()
export class BusinessUnitService {
  constructor(@InjectModel('BusinessUnit') private readonly businessUnitModel: Model<BusinessUnit>) {}

  async createBusinessUnit(name: string, description: string): Promise<BusinessUnit> {
    const newBusinessUnit = new this.businessUnitModel({
      name,
      description,
    });
    return await newBusinessUnit.save();
  }

  async getAllBusinessUnits(): Promise<BusinessUnit[]> {
    return await this.businessUnitModel.find().exec();
  }

  async getBusinessUnitById(id: string): Promise<BusinessUnit> {
    return await this.businessUnitModel.findById(id).exec();
  }
}
