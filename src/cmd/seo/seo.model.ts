import mongoose, { Schema } from 'mongoose';
//  const ObjectId = Schema.Types.ObjectId;

import { IPageData } from './../../interfaces/article';

const PageDataSchema: Schema = new Schema({
  page: { type: String },
  title: { type: String },
  meta: { type: String },
  header_1: { type: String },
  name: { type: String },
  content: { type: String },
},  { timestamps: true, collection: 'page' });

export default mongoose.model<IPageData>('page', PageDataSchema);
