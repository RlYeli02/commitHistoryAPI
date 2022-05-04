import dotenv from 'dotenv';
import express from "express";
import bodyparser from "body-parser";
dotenv.config()

const PORT = process.env.PORT || 5001

const app = express();

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get('/', (req, res) => {
  
  res.send('Hello World!');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);