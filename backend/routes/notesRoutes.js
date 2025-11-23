import express from "express"
import { getAllNotes, addNote, updateNote, deleteNote } from "../controllers/notesController.js";
const router =  express.Router();

//fecth notes
router.get("/", getAllNotes);
//add notes
router.get("/", addNote);
//uppdate notes
router.put("/:id", updateNote);
//delete notes
router.delete("/:id", deleteNote);

export default router;

