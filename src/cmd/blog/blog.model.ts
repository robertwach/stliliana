import { blog } from "./../../interfaces/article";
import mongoose, { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

const BlogSchema: Schema = new Schema(
  {
    products: [
      {
        productId: { type: ObjectId, ref: "Product" },
      },
    ],
    introduction: { type: String },
    conclusion: { type: String },
    preview: { type: String },
    heading: { type: String },
    metaTitle: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    metaDescription: { type: String },
    image: { type: String },
    thumbImage: { type: String },
    published: { type: Boolean, default: false },
    author: {
      name: { type: String },
      image: { type: String },
      description: { type: String },
      userId: { type: ObjectId, ref: "User" },
    },
    tags: [{ title: String, link: String }],
    categories: [
      {
        type: ObjectId,
        ref: "Category",
      },
    ],
    subcategories: [
      {
        type: ObjectId,
        ref: "Subcategory",
      },
    ],
    related: [{ id: { type: ObjectId, ref: "Blog" } }],
    sections: [
      {
        content: { type: String },
        image: { type: String },
        heading: { type: String },
        list: [{ title: { type: String }, description: { type: String } }],
      },
    ],
    ads: [
      {
        text: { type: String },
        link: { type: String },
        image: { type: String },
      },
    ],
    linkedProducts: [{ type: ObjectId, ref: "Product" }],
    linkedPosts: [{ type: ObjectId, ref: "Blog" }],
    // comments: comment[]
  },
  { timestamps: true }
);

export default mongoose.model<blog>("Blog", BlogSchema);
