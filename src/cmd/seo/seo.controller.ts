import { Request, Response } from 'express';
//  import { Schema } from 'mongoose';
import Model from './seo.model';


export async function countSEOPages() {
    return Model.count();
}

export async function createPage (req: Request, res: Response) {
    try {
        const data = req.body;
        //  check if url exits
        const exists = await Model.findOne({ url: data.url });

        if (exists) {
            throw(new Error(`Record with url ${data.url} already exists`));
        }

        const page = await Model.create({ ...data });
        res.send({ state: true, page });
    } catch (err: any) {
        res.send({ state: false, msg: err.message });
    }
}
export async function getSeo(str: string) {
    try {
      const seo = await Model.findOne({ name: str });
      console.log("++++++++++++++++++", seo, str)
      return seo;
    } catch (err) {
      return {msg : "something went wrong", state: false};
    }
  }

export async function updatePage (req: Request, res: Response) {
    try {
        const options = req.body;
        const id = req.params.id;
        //  check if url exits
        const exists = await Model.findOne({ _id: id });

        if (!exists) {
            throw(new Error(`Record id ${id} not found`));
        }

        const page = await Model.findOneAndUpdate({_id: id }, { ...options }, { new: true });
        res.send({ state: true, page });
    } catch (err: any) {
        res.send({ state: false, msg: err.message });
    }
}

export async function pages (req: Request, res: Response) {
    try {
        const pages = await Model.find({});
        res.send({ state: true, pages });
    } catch (err: any) {
        res.send({ state: false, msg: err.message });
    }
}

export async function pageDetail (req: Request, res: Response) {
    try {
        const id = req.params.id;
        const page = await Model.findOne({ _id: id });
        res.send({ state: true, page });
    } catch (err: any) {
        res.send({ state: false, msg: err.message });
    }
}