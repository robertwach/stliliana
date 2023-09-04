import { blog } from "./../../interfaces/article";
import mongoose, { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

const BlogSchema: Schema = new Schema(
  {
    code: { type: String },
    title: { type: String },
    caption: { type: String },
    url: { type: String },
    meta: { type: String },
    featured: { type: Boolean, default: false },
    exclusive: { type: Boolean, default: false },
    sport: { type: String },
    timeago: { type: String },
    picture: { type: String },
    trending: { type: Boolean, default: false },
    content: { type: String },
    credit: { type: String },
    author: { type: String },
    category: { type: String },
    // comments: comment[]
  },
  { timestamps: true, collection: "news" }
);

export default mongoose.model<blog>("Blog", BlogSchema);
