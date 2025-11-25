
import Note from "../models/Note.js";

//fetch all notes data
export async function getAllNotes(req, res) {

    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }catch(error){
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message:"Error on get all notes!"})
    }
};

//ADD
export async function addNote(req, res) {

    try{
        const {title, content} = req.body;
        const note = new Note({title,content});

        const saveNote =   await note.save();
      
        res.status(201).json(saveNote);

    }catch(error){

        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message:"Error on get all notes!"})

    }

    res.status(201).json({message: "Note created successfully!"});
};

//EDIT
export async function updateNote(req, res) {

    

    // res.status(200).json({message: "Note updated successfully!"});
};

//DELETE
export async function deleteNote(req, res) {
    res.status(200).json({message: "Note deleted successfully!"});
};