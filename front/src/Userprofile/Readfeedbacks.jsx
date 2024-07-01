import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import FeedbackTable from '../components/home/FeedbackList'; // Ensure this path is correct

const Home = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:7005/feedbacks/all')
      .then((response) => {
        setFeedbacks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
       
        
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>All comments</h1>
        <Link to='/feedbacks/create'>
          <MdOutlineAddBox className='text-sky-500 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <FeedbackTable feedbacks={feedbacks} />
      ) : (
        <div>Show card view here</div> // Replace this with your card view component if needed
      )}
    </div>
  );
};

export default Home;
