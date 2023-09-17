import { Request, Response } from "express";

// import { v4 as uuidv4 } from 'uuid';

//  import { Schema } from 'mongoose';
import Model from "./blog.model";
import { blog } from "../../interfaces/article";
// import {  makeUrl  } from '../../helpers/index';

export async function countPosts() {
  return Model.count();
}
export async function getBlog(req: Request, res: Response) {
  try {
    const name = req.params.url;
    const article = await Model.findOne({ url: name });
    const b = article as blog;
    return b;
  } catch (err) {
    return {} as blog;
  }
}
export async function getBlogs(req: Request, res: Response) {
  try {
    const blogs = await Model.find({});
    return blogs;
  } catch (err) {
    return { msg: "something went wrong", state: false };
  }
}
export async function getHomeBlogs(req: Request, res: Response) {
  try {
    const blogs = await Model.find({}).limit(3).exec();
    return blogs;
  } catch (err) {
    return { msg: "something went wrong", state: false };
  }
}
export async function articleDetails(req: Request, res: Response) {
  try {
    const url = req.params.url;
    const article = await Model.find({ url: url });
    res.send({ state: true, article });
  } catch (err: any) {
    res.send({ state: false, msg: err.message });
  }
}

export async function allArticles(req: Request, res: Response) {
  try {
    const articles = await Model.find({});
    res.send({ state: true, articles });
  } catch (err: any) {
    res.send({ state: false, msg: err.message });
  }
}
// export async function createArticle (req: Request, res: Response) {
//     try {
//         const articleData = JSON.parse(req.body.article);
//         const files = req.files;

//         const fileNames: any = {};
//         const sections = articleData?.sections || [];
//         articleData.sections = sections.map((section: any) => {
//             const id = uuidv4();
//            if (files && files[section.id]) {
//                section.image = id + '.webp';
//                 fileNames[section.id] = id;
//            }
//            return section;

//         }) || [];

//         if (files && files.image) {
//             articleData.image =  articleData.url + '.webp';
//         }

//         articleData.url = articleData.url || makeUrl(articleData?.heading);

//         // check if the url is already being used
//         const exists = await Model.findOne({ url: articleData.url });

//         if (exists) {
//             articleData.url = articleData.url + '-' + uuidv4();
//         }

//         const article = await Model.create(articleData);
//         if (files && files.image) {
//             await resizeSave({
//                 file: files.image,
//                 fileName: article.url,
//                 uploadFolder: 'blog',
//                 extension: 'webp',
//                 width: 1200,
//                 height: 800
//             });
//         }
//         //  const imagePromises = [];

//         if (files) {
//             for (const file in files) {
//                 if ( file === 'image' ) {
//                     continue;
//                 }

//                 if (!fileNames[file]) {
//                     continue;
//                 }

//                 await resizeSave({
//                     file: files[file],
//                     fileName: fileNames[file],
//                     uploadFolder: 'blog',
//                     extension: 'webp',
//                     width: 1200,
//                     height: 800
//                 });

//             }
//         }
//       res.send({ state: true, article });
//     } catch (err: any) {
//         res.send({ state: false, msg: err.message });
//     }
// }

// export async function configurePublished (req: Request, res: Response) {
//     try {
//         const id = req.params.id;

//         const { status } = req.body;

//         if (!id) {
//             throw(new Error('Invalid post id'));
//         }
//         const post = await Model.findById(id);
//         if (!post) {
//             throw(new Error('Invalid record'));
//         }

//         const updated = await Model.findOneAndUpdate({ _id: id }, { published: status }, { new: true });

//         res.send({ state: true, updated });
//     } catch (err: any) {
//         console.log(err);
//         res.status(500).send({ state: false, msg: err.message });
//     }
// }

// export async function updateArticle (req: Request, res: Response) {
//     try {
//         const id = req.params.id;
//         const articleData = JSON.parse(req.body.article);

//         delete articleData.url;

//         const files = req.files;

//         //  console.log(options, 'options')
//         const article = await Model.findById(id);

//         if (!article) {
//             throw(new Error('Post not found'));
//         }

//         const fileNames: any = {};
//         const sections = articleData?.sections || [];
//         articleData.sections = sections.map((section: any) => {
//             const id = uuidv4();
//            if (files && files[section.id]) {
//                section.image = id + '.webp';
//                 fileNames[section.id] = id;
//            }
//            return section;

//         }) || [];

//         if (files && files.image) {
//             await resizeSave({
//                 file: files.image,
//                 fileName: article.url,
//                 uploadFolder: 'blog',
//                 extension: 'webp',
//                 width: 1200,
//                 height: 800
//             });
//         }

//        const updated = await Model.findOneAndUpdate({ _id: id }, articleData, { new: true });

//         // upload section images
//         if (files) {
//             for (const file in files) {
//                 if ( file === 'image' ) {
//                     continue;
//                 }

//                 if (!fileNames[file]) {
//                     continue;
//                 }

//                 await resizeSave({
//                     file: files[file],
//                     fileName: fileNames[file],
//                     uploadFolder: 'blog',
//                     extension: 'webp',
//                     width: 1200,
//                     height: 800
//                 });

//             }
//         }

//         res.send({ state: true, article: updated });
//     } catch (err: any) {
//         res.send({ state: false, msg: err.message });
//     }
// }
