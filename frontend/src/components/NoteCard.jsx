import React from 'react'
import { Link } from 'react-router';
import {Pen, Trash2Icon} from 'lucide-react';
import { formatDate } from '../lib/Utils';
import api from '../lib/axios';
import toast from 'react-hot-toast';

const NoteCard = ({note, setNotes}) => {

    const handleDeleteNote = async(e, id) => {
        e.preventDefault();

        if(!window.confirm("Are you sure you want to delete this note?")) return;

        try{
            await api.delete(`/notes/${id}`)
            setNotes((prev) => prev.filter(note => note._id !== id)) //e filter niya ang nadelete ug mawala  sa UI without refreshing
            toast.success("Note deleted successfully!");
        }catch(error){
            console.log("Error deleting note!",error);
            toast.error("Failed to delete note!");
        }   
    };


  return  (
    <>
        <Link to={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]">
           <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
            </div></div>
            <div className="card-body">
                <h3 className="card-title text-base-content">{note.title}</h3>
                <p className="text-base-content/70 lime-clamp-3">{note.content}</p>
                <div className='card-actions justify-between items-center mt-4'>
                    <span className='text-small tex-base-content/60'>
                    {formatDate(new Date(note.createdAt))}
                    
                    </span>
                    <div className="flex item-center gap-1">
                        <Pen className="size-4" />
                        <button>
                            <Trash2Icon className="size-4" onClick={(e) => handleDeleteNote(e,note._id)} />
                        </button>
                    </div>
                </div>
            </div>
           
           
         </Link>
    </>

  )
  
  
};

export default NoteCard
