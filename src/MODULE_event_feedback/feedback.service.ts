
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback } from './feedback.model';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel('Feedback') private readonly feedbackModel: Model<Feedback>,
  ) {}

  async create(feedback: Feedback): Promise<Feedback> {
    const newFeedback = new this.feedbackModel(feedback);
    return newFeedback.save();
  }

  async findByEventId(eventId: string): Promise<Feedback[]> {
    return this.feedbackModel.find({ eventId }).exec();
  }

  // Implement other CRUD operations as needed
}
