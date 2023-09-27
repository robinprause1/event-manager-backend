import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff } from 'src/MODULE_staff/staff.model';
import { Line } from 'src/MODULE_line/line.model';
import { BusinessUnit } from 'src/MODULE_business-unit/business-unit.model';

@Injectable()
export class BusinessUnitAssociationService {
  constructor(
    @InjectModel('Staff') private readonly staffModel: Model<Staff>,
    @InjectModel('Line') private readonly lineModel: Model<Line>,
    @InjectModel('BusinessUnit') private readonly businessUnitModel: Model<BusinessUnit>,
  ) {}

  async getAllLinesOfBusinessUnit(businessUnitId: string): Promise<Line[]> {
    return this.lineModel.find({ businessUnit: businessUnitId }).exec();
  }

  async getAllStaffForLine(lineId: string): Promise<Staff[]> {
    return this.staffModel.find({ line: lineId }).exec();
  }

  async findStaffAssociations(staffId: string): Promise<any> {
    const staff = await this.staffModel.findById(staffId).exec();
    const line = await this.lineModel.findById(staff.line).exec();
    const businessUnit = await this.businessUnitModel.findById(line.businessUnit).exec();
    return { staff, line, businessUnit };
  }
}
