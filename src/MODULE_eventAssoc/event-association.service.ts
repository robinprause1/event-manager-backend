import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff } from 'src/MODULE_staff/staff.model';
import { Event } from 'src/MODULE_event/event.model';
import { Line } from 'src/MODULE_line/line.model';
@Injectable()
export class EventAssociationService {
  constructor(
    @InjectModel('Staff') private readonly staffModel: Model<Staff>,
    @InjectModel('Line') private readonly lineModel: Model<Line>,
    @InjectModel('Event') private readonly eventModel: Model<Event>,
  ) {}

  async getAllEventsOfStaff(staffId: string): Promise<Event[]> {
    return this.eventModel.find({ staff: staffId }).exec();
  }

  async getAllEventsOfLine(lineId: string): Promise<Event[]> {
    return this.eventModel.find({ line: lineId }).exec();
  }
}
