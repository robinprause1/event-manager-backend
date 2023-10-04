
import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.model';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async addFeedback(@Body() feedback: Feedback): Promise<Feedback> {
    return await this.feedbackService.create(feedback);
  }

  @Get(':eventId')
  async getFeedbackByEventId(@Param('eventId') eventId: string): Promise<Feedback[]> {
    return await this.feedbackService.findByEventId(eventId);
  }


  // Implement other endpoints as needed
}
