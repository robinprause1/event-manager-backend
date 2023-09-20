
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './event.model';

@Injectable()
export class EventService {
  constructor(
    @InjectModel('Event') private readonly eventModel: Model<Event>,
  ) {}

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
}
