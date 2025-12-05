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

    </div>
  )
}

export default HomePage
