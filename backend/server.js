import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//path sa render
const ___dirname = path.resolve();

//Middleware
if(process.env.NODE_ENV !== "production"){
    app.use(cors({  
            origin: 'http://localhost:5173'
        }));
};

app.use(express.json());
app.use(rateLimiter);

//routes
app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(___dirname,"../frontend/dist")));

    app.get("*",(req,res) => {
        res.sendFile(path.join(___dirname,"../frontend","dist","index.html"));
    });
};

connectDB().then(() =>{
    app.listen(PORT, () => {
        console.log("SERVER STARTED ON PORT 5001!", PORT);
    });
});

