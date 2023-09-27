import { Schema, Document, Types } from 'mongoose';

export interface Staff extends Document {
  name: string;
  prename: string;
  number: string;
  email: string;
  notes: string;
  line: Types.ObjectId; // Reference to Line
  businessUnit: Types.ObjectId; // Reference to Business Unit
}

export const StaffSchema = new Schema({
  name: { type: String, required: true },
  prename: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  notes: { type: String, required: false },
  line: { type: Types.ObjectId, ref: 'Line', required: true }, // Reference to Line
  businessUnit: { type: Types.ObjectId, ref: 'BusinessUnit', required: true }, // Reference to Business Unit
});
