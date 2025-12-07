import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import RateLimitedUI from '../components/RateLimitedUI';
import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';


const HomePage = () => {

  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

      const fetchNotes = async () => {
        try {

          const res = await axios.get('http://localhost:5001/api/notes');
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
        { loading && <div className="text-center text-primary py-10">Loading notes...</div>}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/** DISPLAY THE NOTE */}
            {notes.map((note) => (
              <div key={note._id} className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition">
                <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
                <p className="text-gray-700">{note.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default HomePage
