const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 8080;

let data = [
  {
    _id: "6374e91f8266a57210d00222",
    name: "Watts Dejesus",
    title: "Nodejs Developer Roadmap 2022",
    story:
      "Nodejs is a very popular runtime environment for chrome V8 javascript engine. The popularity of nodejs is increasing every day for scalable network applications Nodejs is javascript based and it enables javascript developers to write backend (server) application Nodejs uses event loops that allow nodejs to perform non blocking I/O operationsIn this tutorial, we will look at the tools and languages needed to be known to be a successful nodejs developer",
  },
  {
    _id: "6374e91fb0d03d57f27dfe78",
    name: "Kimberley Bradley",
    title: "React developer roadmap 2022",
    story:
      "React is a very popular UI framework for creating user interfaces. There are also so many benefits of using react. With React we can create: Progressive web applications Scalable web applications Reusable components Small to big-scale projects Here in this tutorial, we will discuss which languages and tools you need to learn to become a successful react developer. ",
  },
];

// get api

app.get("/", (req, res) => {
  res.json(data);
});

// get single api

app.get("/single/:id", (req, res) => {
  let single = data.find((ele) => ele._id === req.params.id);
  res.json(single);
});

// post api

app.post("/add", (req, res) => {
  let d = req.body;
  d._id = uuidv4();

  data.push(d);

  res
    .json({
      message: "Successfully added",
    })
    .status(200);
});

// delete api

app.delete("/delete/:id", (req, res) => {
  data = data.filter((ele) => ele._id != req.params.id);
  res
    .json({
      message: "Successfully deleted",
    })
    .status(200);
});

app.put("/edit/:id", (req, res) => {
  let d = req.body;
  d._id = req.params.id;

  let filtered_Data = data.filter((ele) => ele._id != req.params.id);

  filtered_Data.push(d);

  data = filtered_Data;

  res.json({
    message: "Data edited",
  });
});

app.listen(PORT, () => {
  console.log(`Server Running at Port ${PORT}`);
});
