import express from "express";
import uwuifier from "./uwufier/uwuify";

const app = express();
app.use(express.json());
app.use(express.static("public"));
const PORT = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/api", (req, res) => {
  if (req.body && req.body.text) {
    res.status(200).json({
      text: uwuifier.uwuifySentence(req.body.text),
    });
  } else {
    res.status(200).json({ text: "" });
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
