import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vote } from './vote.model';

@Injectable()
export class VoteService {
  constructor(@InjectModel('Vote') private readonly voteModel: Model<Vote>) {}

  async createVote(vote: Vote): Promise<Vote> {
    const newVote = new this.voteModel(vote);
    return await newVote.save();
  }

  async getVotesByEvent(eventId: string): Promise<Vote[]> {
    return await this.voteModel.find({ eventId }).exec();
  }

  async updateVote(eventId: string, staffId: string, choice: string): Promise<Vote> {
    return await this.voteModel.findOneAndUpdate(
      { eventId, staffId },
      { $set: { choice } },
      { new: true }
    ).exec();
  }
}
