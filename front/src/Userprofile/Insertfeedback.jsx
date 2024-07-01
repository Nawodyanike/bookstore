import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Createfeedbacks = () => {
  const [name, setname] = useState('');
  const [comments, setcomments] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveFeedback = () => {
    const data = {
      name,
      comments,
    };
    setLoading(true);
    axios
      .post('http://localhost:7005/feedbacks/create', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Insert comments successfully', { variant: 'success' });
        navigate('/feedbacks/all');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.error('Error details:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Add comments</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[400px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Add comments</label>
          <input
            type='text'
            value={comments}
            onChange={(e) => setcomments(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setname(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveFeedback}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Createfeedbacks;
