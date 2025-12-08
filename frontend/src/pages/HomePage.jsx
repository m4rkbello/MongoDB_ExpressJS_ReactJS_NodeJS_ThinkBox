import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import RateLimitedUI from '../components/RateLimitedUI';
import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import api from '../lib/axios';



const HomePage = () => {

  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

      const fetchNotes = async () => {
        try {

          const res = await api.get('/notes');
          console.log("Fetched notes:", res.data);

          setNotes(res.data);
          setIsRateLimited(false);

        } catch(error) {
          console.error("Error fetching notes:", error);

          if(error.response && error.response.status === 429){
            setIsRateLimited(true);
          } else {
            toast.error("Error fetching notes!");
          }
          
        } finally {
            setLoading(false);
        }
      }

      fetchNotes();

  },[]);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        { loading && 
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        }
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/** DISPLAY THE NOTE */}
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default HomePage
