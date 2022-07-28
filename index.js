require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json("Hello World");

// res.json("hello world");
});

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log("Application is running on port", PORT);
});