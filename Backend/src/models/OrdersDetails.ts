import { Document, Schema, model } from "mongoose";

export interface IOrdersDetails extends Document {
  oid: string;
  itemid: string;
  buyqty: number;
  price: number;
}

// creating schema
const OrdersDetailsSchema = new Schema(
  {
    oid: {
      type: String,
      required: true,
    },
    itemid: {
      type: String,
      required: true,
    },
    buyqty: {
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

export const OrdersDetails = model<IOrdersDetails>("OrdersDetails", OrdersDetailsSchema);
