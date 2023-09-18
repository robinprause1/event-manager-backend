
import { Schema, Document } from 'mongoose';

export interface Event extends Document {
  name: string;
  date: Date;
  location: string;
  agenda: any[];
  votes: any[];
}

export const EventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  agenda: { type: Array, default: [] },
  votes: { type: Array, default: [] }
});
