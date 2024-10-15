import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const portName = "localhost:";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on ${portName}${port}`);
});
