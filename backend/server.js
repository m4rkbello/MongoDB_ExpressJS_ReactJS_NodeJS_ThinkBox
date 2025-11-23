// import express from "express";
const express = require("express");

const app = express();

app.get("/api/notes", (req, res) =>{
    res.send("you got 5 notes patotoya!");
});

app.listen(5001, () => {
    console.log("SERVER STARTED ON PORT 5001!");
});
