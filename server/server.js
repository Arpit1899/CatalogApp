const express = require("express");
const app = express();
const port = 3001;

const fs = require("fs");
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/items", (req, res) => {
  res.send("Hello, World!");
});

app.post("/api/handleSubmit", async (req, res) => {
  console.log("Request received:", req.body);
  try {
    const data = JSON.stringify(req.body);
    await fs.promises.writeFile("./data.json", data);
    res.send({ message: "Request received and saved" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error saving data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
