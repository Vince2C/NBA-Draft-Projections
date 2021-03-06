const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const apiRouter = require("./routes/api");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "../src")));

app.use("/api", apiRouter);

app.use((req, res) =>
  res.status(404).send("Vince says This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  console.log(err);
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
