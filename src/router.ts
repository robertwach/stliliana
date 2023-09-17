import { Application } from "express";
import { all, business } from "./utils/data";
import { getBlog, getBlogs, getHomeBlogs } from "./cmd/blog/blog.controller";
import { getSeo } from "./cmd/seo/seo.controller";
import { Schema } from "mongoose";
import { blog } from "./interfaces/article";
const ObjectId = Schema.Types.ObjectId;
export const router = (app: Application) => {
  //   router(app);

  //   app.get("/about", (req: Request, res: Response) => {
  //     res.render("pages/about", {});
  //   });

  app.get("/", async (req, res) => {
    const galley_preview = all.slice(0, 6);
    const blogs = await getHomeBlogs(req, res);

    const seo = (await getSeo("/")) ?? business.seo;
    res.render("index", { galley_preview, blogs, seo, page: "/" });
  });

  app.get("/about", async (req, res) => {
    const seo = (await getSeo("/about")) ?? business.seo;
    res.render("pages/about", { seo, page: "/about" });
  });

  app.get("/location", async (req, res) => {
    const seo = (await getSeo("/location")) ?? business.seo;
    res.render("pages/ourLocation", {});
  });

  app.get("/faqs", async (req, res) => {
    const seo = (await getSeo("/faqs")) ?? business.seo;
    res.render("pages/faqs", { seo });
  });

  app.get("/admissions", async (req, res) => {
    const seo = (await getSeo("/admissions")) ?? business.seo;
    res.render("pages/admissions", { seo });
  });
  app.get("/newsletters", async (req, res) => {
    const seo = (await getSeo("/newsletters")) ?? business.seo;
    res.render("pages/newsletters", { page: "/newsletters", seo });
  });

  app.get("/thank-you", async (req, res) => {
    const seo = (await getSeo("/thank-you")) ?? business.seo;
    res.render("pages/thankYou", { seo });
  });

  app.get("/blog", async (req, res) => {
    const seo = (await getSeo("/blog")) ?? business.seo;
    const blogs = await getBlogs(req, res);

    // console.log("==============blogs", blogs);
    res.render("pages/blog", { seo, blogs, page: "/blog" });
  });
  app.get("/post/:url", async (req, res) => {
    const blog: any = (await getBlog(req, res)) || null;
    // console.log("=============blog", blog)
    let title = "st lilyann school";
    let meta = "st lilyann school";
    if (blog !== null) {
      title = blog?.metaTitle;
      meta = blog?.metaDescription;
    }

    const seo = {
      _id: "",
      page: "",
      header_1: "st lilyanna school",
      code: "code",
      content: "description",
      metaTitle: title,
      metaDescription: meta,
    };
    // const seo = seoholder;
    const blogs = (await getBlogs(req, res)) ?? business.seo;
    res.render("pages/blog-details", { blog, blogs, seo });
  });

  // app.get("/post/1", (req, res) => {
  //   res.render("pages/post", {});
  // });

  app.get("/contact-us", async (req, res) => {
    const seo = (await getSeo("/contact-us")) ?? business.seo;
    res.render("pages/contactUs", { seo, page: "/contact-us" });
  });

  app.get("/gallery", async (req, res) => {
    const seo = (await getSeo("/gallery")) ?? business.seo;

    res.render("pages/gallery", { all, seo, page: "/gallery" });
  });

  //   app.get("*", (req, res) => {
  //     res.render("pages/404", {});
  //   });
};
