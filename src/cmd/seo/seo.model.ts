import mongoose, { Schema } from "mongoose";
//  const ObjectId = Schema.Types.ObjectId;

import { IPageData } from "./../../interfaces/article";

const PageDataSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    h1: { type: String },
    metaTitle: { type: String },
    metaDescription: { type: String },
    description: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IPageData>("PageData", PageDataSchema);
