import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
}

// creating schema
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", UserSchema);
