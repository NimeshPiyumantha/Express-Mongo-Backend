import { Document, Schema, model } from "mongoose";

export interface IItem extends Document {
  code: string;
  description: string;
  qty: number;
  price: number;
}

// creating schema
const ItemSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Item = model<IItem>("Item", ItemSchema);
