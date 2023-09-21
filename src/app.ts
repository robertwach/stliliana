import express, { Application, Request, Response } from "express";
import { business } from "./utils/data";
// var favicon = require("serve-favicon");
// var path = require("path");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

import { router } from "./router";

const app: Application = express();

app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");

const port = process.env.PORT ?? "8080";

mongoose.Promise = global.Promise;

const dbUrl = process.env.DATABASE_URL ?? "mongodb://localhost:27017/stlilyann";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
router(app);
app.use(async function (req, res, next) {
  // res.locals.imageUrl = "http://localhost:5400";
  // res.locals.imageUrl = "https://example.co.ke";
  next();
});

// app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use("/favicon.ico", express.static("/favicon.ico"));

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
