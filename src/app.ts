import express, { Application, Request, Response } from "express";
import { business } from "./utils/data";
const mongoose = require("mongoose");

require("dotenv").config();

import { router } from "./router";

const app: Application = express();

app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");

const port = process.env.PORT ?? "3001";

router(app);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/lilyanna", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(async function (req, res, next) {
  // res.locals.imageUrl = "http://localhost:5400";
  // res.locals.imageUrl = "https://example.co.ke";
  next();
});

app.locals = {
  ...business,
};

app.get("*", (req: Request, res: Response) => {
  res.render("pages/404", {});
});

app.listen(port, function () {
  console.log(`App is listening on port ${port}!`);
});

// export default app;
