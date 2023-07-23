// console.log("And we have lift-off. 🫡");

const express = require("express");
const { readFile } = require("fs");

const app = express();

app.get("/home", (request, response) => {
  readFile("./home.html", "utf-8", (err, html) => {
    if (err) {
      response.status(500).send("Sorry, something went wrong.");
    }

    response.send(html);
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("\nApp available at: http://localhost:3000")
);
