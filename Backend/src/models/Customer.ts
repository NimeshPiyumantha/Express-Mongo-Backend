import { Document, Schema, model } from "mongoose";

export interface ICustomer extends Document {
  id: string;
  name: string;
  address: string;
  salary: number;
}

// creating schema
const CustomerSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Customer = model<ICustomer>("Customer", CustomerSchema);
