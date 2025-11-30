
import Note from "../models/Note.js";

//FETCH NOTES
export async function getAllNotes(_, res) {
    try{
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    }catch(error){
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message:"Error on get all notes!"})
    }
};

//FETCH  SPECIFIC NOTE
export async function getNoteById(req, res) {
  try{
    const note = await Note.findById(req.params.id);

    if(!note) return res.status(404).json({message:"Note not found!"});

    res.status(200).json(note);
  }catch(error){

    console.error("Error in getNoteById!", error);
    res.status(500).json({message:"Error on getNoteById notes!"})

  }
}

//ADD NOTE
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

//EDIT NOTE
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller:", error);
    res.status(500).json({ message: "Error updating note!" });
  }
}

//DELETE NOTE
export async function deleteNote(req, res) {

    try {

      const deletedNote = await Note.findByIdAndDelete(
        req.params.id,
      );

      if (!deletedNote) {
        return res.status(404).json({ message: "Note not found!" });
      }

    res.status(200).json({message:"Note deleted successfully!"});
  } catch (error) {

      console.error("Error in deleting controller:", error);
      res.status(500).json({ message: "Error deleting note!" });

  }
};