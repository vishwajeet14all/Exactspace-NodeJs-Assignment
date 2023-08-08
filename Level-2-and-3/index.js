const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // res.send();
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit-level-2", (req, res) => {
  const json = req.body.json;

  try {
    const parsedJson = JSON.parse(json);
    res.json(parsedJson);
  } catch (error) {
    res.status(400).send("Invalid JSON format.");
  }
});

app.post("/submit-level-3", (req, res) => {
  const json = req.body.json;

  try {
    const parsedJson = JSON.parse(json);
    const formFields = Object.entries(parsedJson)
      .map(
        ([key, value]) =>
          `<span style="margin: 60px 30px 0px 60px; font-size: 40px">${key}</span>
           <input style="margin: 60px 0px 0px 0px; font-size: 40px" type="text" name="${key}" value="${value}" readonly>`
      )
      .join("");

    res.send(`
        <form>
          ${formFields}
        </form>
      `);
  } catch (error) {
    res.status(400).send("Invalid JSON format.");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
