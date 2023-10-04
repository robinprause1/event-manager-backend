import { Schema, Types } from 'mongoose';

export interface Feedback extends Document {
  eventId: Types.ObjectId;
  staffId: Types.ObjectId;
  feedback: {
    rating: number;
    text: string;
  };
}

export const FeedbackSchema = new Schema({
  eventId: { type: Types.ObjectId, required: true },
  staffId: { type: Types.ObjectId, required: true },
  feedback: {
    rating: { type: Number, required: true },
    text: { type: String, required: true },
  },
});
