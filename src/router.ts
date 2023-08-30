import { Application } from "express";
import { all } from "./utils/data";

export const router = (app: Application) => {
  //   router(app);

  //   app.get("/about", (req: Request, res: Response) => {
  //     res.render("pages/about", {});
  //   });

  app.get("/", (req, res) => {
    const galley_preview = all.slice(0,6)
    res.render("index", {galley_preview});
  });

  app.get("/about", (req, res) => {
    res.render("pages/about", {});
  });

  app.get("/blog", (req, res) => {
    res.render("pages/blog", {});
  });

  app.get("/post/1", (req, res) => {
    res.render("pages/post", {});
  });

  app.get("/contact-us", (req, res) => {
    res.render("pages/contactUs", {});
  });

  app.get("/gallery", (req, res) => {
    res.render("pages/gallery", {all});
  });

  //   app.get("*", (req, res) => {
  //     res.render("pages/404", {});
  //   });
};
