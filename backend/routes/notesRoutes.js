import express from "express"
import { addNotes, deleteNotes, getAllNotes, updateNotes } from "../controllers/notesController";
const router =  express.Router();

//fecth notes
router.get("/", getAllNotes);

//add notes
router.get("/", addNotes);

//uppdate notes
router.put("/:id", updateNotes);

//delete notes
router.delete("/:id", deleteNotes);


export default router;

