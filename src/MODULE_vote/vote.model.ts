import { Schema, Document } from 'mongoose';

export interface Vote extends Document {
  eventId: string;
  staffId: string;
  choice: string; // You can define this based on your voting options
}

export const VoteSchema = new Schema({
  eventId: { type: String, required: true },
  staffId: { type: String, required: true },
  choice: { type: String, required: true },
});
