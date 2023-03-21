const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const date = new Date();

  const dateFormate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  response.send(dateFormate);
});

app.listen(3000);

module.exports = app;
