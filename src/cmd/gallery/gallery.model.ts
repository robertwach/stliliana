import mongoose, { Schema } from "mongoose";
//  const ObjectId = Schema.Types.ObjectId;

// import { IPageData } from '../../interfaces';

const GallerySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    image: { type: String },
    featured: { type: Boolean, default: false },
    category: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", GallerySchema);
