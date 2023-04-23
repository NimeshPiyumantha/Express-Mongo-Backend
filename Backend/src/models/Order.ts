import { Document, Schema, model } from "mongoose";

export interface IOrder extends Document {
  oid: string;
  date: string;
  cusid: string;
}

// creating schema
const OrderSchema = new Schema(
  {
    oid: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    cusid: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = model<IOrder>("Order", OrderSchema);
