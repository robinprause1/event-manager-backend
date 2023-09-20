
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.model';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async addFeedback(@Body() feedback: Feedback): Promise<Feedback> {
    return this.feedbackService.create(feedback);
  }

  @Get()
  async getFeedbackByEventId(@Query('eventId') eventId: string): Promise<Feedback[]> {
    return this.feedbackService.findByEventId(eventId);
  }

  // Implement other endpoints as needed
}
