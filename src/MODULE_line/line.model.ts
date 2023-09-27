import { Schema, Document, Types } from 'mongoose';

export interface Line extends Document {
  name: string;
  businessUnit: Types.ObjectId;
}

export const LineSchema = new Schema({
  name: { type: String, required: true },
  businessUnit: { type: Types.ObjectId, ref: 'BusinessUnit', required: true },
});
