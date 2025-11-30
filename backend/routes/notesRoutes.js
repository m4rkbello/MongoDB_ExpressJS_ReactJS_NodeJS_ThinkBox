import express from "express"
import { getAllNotes, getNoteById, addNote, updateNote, deleteNote } from "../controllers/notesController.js";
const router =  express.Router();

//fecth all notes
router.get("/", getAllNotes);

//fecth specific notes
router.get("/:id", getNoteById);

//add notes
router.post("/", addNote);

//uppdate notes
router.put("/:id", updateNote);

//delete notes
router.delete("/:id", deleteNote);

export default router;

