import { Document, Schema, model } from "mongoose";

export interface IPost extends Document {
  title: string;
  description: string;
  hoursCount: number;
  lecturerName: string;
  tags: string[];
  categoryId: string;
}

// creating schema
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hoursCount: {
      type: Number,
      required: true,
    },
    lecturerName: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = model<IPost>("Post", PostSchema);