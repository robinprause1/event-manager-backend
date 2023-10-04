import { Types, Schema, Document } from 'mongoose';

export interface Vote extends Document {
  eventId: Types.ObjectId;
  staffId: Types.ObjectId;
  choice: string;
}

export const VoteSchema = new Schema({
  eventId: { type: Types.ObjectId, required: true },
  staffId: { type: Types.ObjectId, required: true },
  choice: { type: String, required: true },
});
