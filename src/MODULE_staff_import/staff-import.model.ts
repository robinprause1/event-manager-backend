
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
  name: String,
  prename: String,
  number: String,
  email: String,
  notes: String,
  line: String,
  businessUnit: String
});
