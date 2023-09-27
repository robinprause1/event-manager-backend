import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';  // Import Types
import { Event } from './event.model';
import { Staff } from 'src/MODULE_staff/staff.model';
import { Line } from 'src/MODULE_line/line.model';
import { BusinessUnit } from 'src/MODULE_business-unit/business-unit.model';

@Injectable()
export class EventService {
  constructor(
    @InjectModel('Event') private readonly eventModel: Model<Event>,
    @InjectModel('Staff') private readonly staffModel: Model<Staff>,
    @InjectModel('Line') private readonly lineModel: Model<Line>,
    @InjectModel('BusinessUnit') private readonly businessUnitModel: Model<BusinessUnit>,
  ) { }

  async create(event: Event): Promise<Event> {
    const newEvent = new this.eventModel(event);
    return await newEvent.save();
  }

  async readAll(): Promise<Event[]> {
    return await this.eventModel.find().exec();
  }

  async readById(id: string): Promise<Event> {
    return await this.eventModel.findById(id).exec();
  }

  async update(id: string, event: Event): Promise<Event> {
    return await this.eventModel.findByIdAndUpdate(id, event, { new: true }).exec();
  }

  async delete(id: string): Promise<Event> {
    return await this.eventModel.findByIdAndDelete(id).exec();
  }

  // New Method: Add Staff to Event
  async addStaffToEvent(eventId: string, staffId: Types.ObjectId): Promise<Event> {
    const event = await this.eventModel.findById(eventId);
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    event.staff.push(staffId);
    return await event.save();
  }

  // New Method: Remove Staff from Event
  async removeStaffFromEvent(eventId: string, staffId: Types.ObjectId): Promise<Event> {
    const event = await this.eventModel.findById(eventId);
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    const index = event.staff.indexOf(staffId);
    if (index > -1) {
      event.staff.splice(index, 1);
    }
    return await event.save();
  }

  async addStaffFromLine(eventId: string, lineId: string): Promise<Event> {
    const staffMembers = await this.staffModel.find({ line: lineId });
    const staffIds = staffMembers.map((staff) => staff._id);
    return this.eventModel.findByIdAndUpdate(eventId, { $addToSet: { staff: staffIds } }, { new: true }).exec();
  }

  async removeStaffFromLine(eventId: string, lineId: string): Promise<Event> {
    const staffMembers = await this.staffModel.find({ line: lineId });
    const staffIds = staffMembers.map((staff) => staff._id);
    return this.eventModel.findByIdAndUpdate(eventId, { $pull: { staff: { $in: staffIds } } }, { new: true }).exec();
  }

  async addStaffFromBusinessUnit(eventId: string, businessUnitId: string): Promise<Event> {
    const staffMembers = await this.staffModel.find({ businessUnit: businessUnitId });
    const staffIds = staffMembers.map((staff) => staff._id);
    return this.eventModel.findByIdAndUpdate(eventId, { $addToSet: { staff: staffIds } }, { new: true }).exec();
  }

  async removeStaffFromBusinessUnit(eventId: string, businessUnitId: string): Promise<Event> {
    const staffMembers = await this.staffModel.find({ businessUnit: businessUnitId });
    const staffIds = staffMembers.map((staff) => staff._id);
    return this.eventModel.findByIdAndUpdate(eventId, { $pull: { staff: { $in: staffIds } } }, { new: true }).exec();
  }

}
