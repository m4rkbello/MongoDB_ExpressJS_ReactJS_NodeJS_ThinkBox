// import express from "express";
const express = require("express");

const app = express();

//fetch data
app.get("/api/notes", (req, res) =>{
    res.status(200).send("Note fetch successfully!");
});

//create data
app.post("api/notes", (req, res) => {
    res.status(201).json({message: "Note created successfully!"})
});

//update data
app.put("api/notes/:id", (req, res) => {
    res.status(200).json({message: "Note updated successfully!"})
});


app.delete("api/notes/:id", (req, res) => {
    res.status(200).json({message: "Note deleted successfully!"})
});


app.listen(5001, () => {
    console.log("SERVER STARTED ON PORT 5001!");
});
