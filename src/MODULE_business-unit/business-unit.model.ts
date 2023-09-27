
import { Schema, Document } from 'mongoose';

export interface BusinessUnit extends Document {
  name: string;
  description: string;
}

export const BusinessUnitSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false }
});
