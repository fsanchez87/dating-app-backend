import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import Cors from "cors";
import Cards from "./dbCards.js";

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = process.env.MONGO_URI;

//Middleware
app.use(express.json());
app.use(Cors());

//Db config
mongoose.connect(connection_url);

//API endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));

app.post("/dating/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listeners config
app.listen(port, () => console.log(`Listening on localhost ${port}`));
