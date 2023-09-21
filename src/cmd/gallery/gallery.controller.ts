import { Request, Response } from "express";
//  import { Schema } from 'mongoose';
import Model from "./gallery.model";

export async function count() {
  return Model.count();
}

export async function photos(query = {}) {
  const records = await Model.find(query);
  return records;
}

export async function photo(id: string) {
  const image = await Model.findOne({ _id: id });
  return image;
}
