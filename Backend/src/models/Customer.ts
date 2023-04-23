import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
  id: string;
  name: string;
  address: string;
  salary: number;
}

//creating schema
const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
});
