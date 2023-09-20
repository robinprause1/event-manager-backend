
import { Schema, Document } from 'mongoose';

export interface Feedback extends Document {
  eventId: string;
  staffId: string;
  feedback: string;
}

export const FeedbackSchema = new Schema({
  eventId: String,
  staffId: String,
  feedback: String,
});
