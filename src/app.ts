import express, { Application, Request, Response } from "express";
import { business } from "./utils/data";

require("dotenv").config();

import { router } from "./router";

const app: Application = express();

app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");

const port = process.env.PORT ?? "3001";

router(app);

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
