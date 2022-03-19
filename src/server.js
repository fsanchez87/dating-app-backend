import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';

//App config
const app = express();
const port = process.env.PORT || 8001;

//Middleware

//Db config

//API endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));

//Listeners config
app.listen(port, () => console.log(`Listening on localhost ${port}`));
