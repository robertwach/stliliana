import { Application } from "express";
import { all } from "./utils/data";
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

    const seoholder = {
      _id: "",
      page: "",
      title: "st lilyann school",
      meta: "st lilyann school",
      header_1: "st lilyann school",
      code: "code",
      content: "description",
    };
    const seo = (await getSeo("home")) || seoholder;
    // console.log("==============seo", seo)
    res.render("index", { galley_preview, blogs, seo, page: "/" });
  });

  app.get("/about", async (req, res) => {
    const seoholder = {
      _id: "",
      page: "",
      title: "st lilyann school",
      meta: "st lilyann school",
      header_1: "st lilyann school",
      code: "code",
      content: "description",
    };
    const seo = (await getSeo("about")) || seoholder;
    res.render("pages/about", { seo, page: "/about" });
  });

  app.get("/location", async (req, res) => {
    res.render("pages/ourLocation", {});
  });

  app.get("/admissions", async (req, res) => {
    res.render("pages/admissions", {});
  });

  app.get("/thank-you", async (req, res) => {
    res.render("pages/thankYou", {});
  });

  app.get("/blog", async (req, res) => {
    const seoholder = {
      _id: "",
      page: "",
      title: "st lilyann school",
      meta: "st lilyann school",
      header_1: "st lilyann school",
      code: "code",
      content: "description",
    };
    const seo = (await getSeo("blog")) || seoholder;
    const blogs = await getBlogs(req, res);
    res.render("pages/blog", { seo, blogs, page: "/blog" });
  });
  app.get("/blog-details/:url", async (req, res) => {
    const blog = (await getBlog(req, res)) || null;
    // console.log("=============blog", blog)
    let title = "st lilyann school";
    let meta = "st lilyann school";
    if (blog !== null) {
      title = blog.title;
      meta = blog.meta;
    }

    const seoholder = {
      _id: "",
      page: "",
      title: title,
      meta: meta,
      header_1: "st lilyann school",
      code: "code",
      content: "description",
    };
    const seo = seoholder;
    const blogs = await getBlogs(req, res);
    res.render("pages/blog-details", { blog, blogs, seo });
  });

  app.get("/post/1", (req, res) => {
    res.render("pages/post", {});
  });

  app.get("/contact-us", async (req, res) => {
    const seoholder = {
      _id: "",
      page: "",
      title: "st lilyann school",
      meta: "st lilyann school",
      header_1: "st lilyann school",
      code: "code",
      content: "description",
    };
    const seo = (await getSeo("conctactUs")) || seoholder;
    res.render("pages/contactUs", { seo, page: "/contact-us" });
  });

  app.get("/gallery", async (req, res) => {
    const seoholder = {
      _id: "",
      page: "",
      title: "st lilyann school",
      meta: "st lilyann school",
      header_1: "st lilyann school",
      code: "code",
      content: "description",
    };
    const seo = (await getSeo("gallery")) || seoholder;
    res.render("pages/gallery", { all, seo, page: "/gallery" });
  });

  //   app.get("*", (req, res) => {
  //     res.render("pages/404", {});
  //   });
};
