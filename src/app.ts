import express, { Application, Request, Response } from "express";

require("dotenv").config();

const app: Application = express();

app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");

const port = process.env.PORT ?? "3001";

app.get("/greetings", (req: Request, res: Response) => {
  res.send("Hello user");
});

app.get("/", (req: Request, res: Response) => {
  res.render("index", { name: "School" });
});

app.listen(port, function () {
  console.log(`App is listening on port ${port}!`);
});
