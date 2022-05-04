import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import bodyparser from "body-parser";
import GitHub from "./routes/api/commits/index.js"

const PORT = process.env.PORT || 5001

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// GitHub Routes
app.use("/github/commits", GitHub )

app.get('/', (req, res) => {
  console.log("REQ",req)
  res.send('Ok');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);