import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [name, setname] = useState('');
  const [comments, setcomments] = useState('');
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:7004/feedbacks/${id}`)
    .then((response) => {
        setname(response.data.name);
        setcomments(response.data.comments)
      
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditBook = () => {
    const data = {
      name,
      comments,
     

    };
    setLoading(true);
    axios
      .put(`http://localhost:7005/feedbacks/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('comment Edited successfully', { variant: 'success' });
        navigate('/feedbacks/all');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit feedbacks</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setname(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>comment</label>
          <input
            type='text'
            value={comments}
            onChange={(e) => setcomments(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        
       
       
       
       
        
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Save changes
        </button>
      </div>
    </div>
  )
}

export default EditBook