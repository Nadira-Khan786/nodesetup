const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongoose");
const { mode } = require("./config/app");
const path = require("path");

if (mode === "development") {
  const cors = require("cors");
  var corsOption = {
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    exposedHeaders: ["x-auth-token", "authorization"],
  };
  app.use(cors(corsOption));
}
app.use(express.static(path.join(__dirname, "build")));
   let url = "mongodb://localhost:27017/userManagement";
MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  function (err, db) {
    if (err) throw err;
    console.log("Database connected");
  }
);
app.use(bodyParser.json());

const apiApiRoutes = require("./routes/apiRoutes");

app.use("/api", apiApiRoutes);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`App listening to port ${port}`);
});

module.exports = app;
