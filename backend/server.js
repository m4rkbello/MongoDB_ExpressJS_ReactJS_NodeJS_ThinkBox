import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log("SERVER STARTED ON PORT 5001!");
});



// mongodb+srv://markamarcortejopanesbello_db_user:0YN3xbFCtIlpvCQJ@cluster0.owk8mag.mongodb.net/?appName=Cluster0