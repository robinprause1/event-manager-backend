import { Controller, Post, Get, Body, Query, Param, Put } from '@nestjs/common';
import { VoteService } from './vote.service';
import { Vote } from './vote.model';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) { }

  @Post()
  async createVote(@Body() vote: Vote): Promise<Vote> {
    return await this.voteService.createVote(vote);
  }

  @Get('/event')
  async getVotesByEvent(@Query('eventId') eventId: string): Promise<Vote[]> {
    return await this.voteService.getVotesByEvent(eventId);
  }

  @Put('/update/:eventId/:staffId')
  async updateVote(
    @Param('eventId') eventId: string,
    @Param('staffId') staffId: string,
    @Body('choice') choice: string
  ): Promise<Vote> {
    return await this.voteService.updateVote(eventId, staffId, choice);
  }

}
