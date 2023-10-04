import { Schema, Document, Types } from 'mongoose';

export interface Event extends Document {
  name: string;
  date: Date;
  location: string;
  agenda: any[];
  staff: Types.ObjectId[]; // new field
}

export const EventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  agenda: { type: Array, default: [] },
  staff: [{ type: Types.ObjectId, ref: 'Staff' }] // new field
});

