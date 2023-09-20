
import { Schema, Document } from 'mongoose';

export interface Staff extends Document {
  name: string;
  prename: string;
  number: string;
  email: string;
  notes: string;
  line: string;
  businessUnit: string;
}

export const StaffSchema = new Schema({
  name: { type: String, required: true },
  prename: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  notes: { type: String, required: false },
  line: { type: String, required: true },
  businessUnit: { type: String, required: true },
});
