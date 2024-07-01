import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishyear, setPublishyear] = useState('');
  const [isbn, setIsbn] = useState('');
  const [genre, setGenre] = useState('');
  const [stock, setStock] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:7001/books/edit/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishyear(response.data.publishyear);
        setTitle(response.data.title);
        setIsbn(response.data.isbn);
        setGenre(response.data.genre);
        setStock(response.data.stock);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishyear,
      isbn,
      genre,
      stock
    };
    setLoading(true);
    axios
      .put(`http://localhost:7005/books/edit/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4' style={{ padding: '16px' }}>
      <BackButton />
      <h1 className='text-3xl my-4' style={{ fontSize: '24px', marginBottom: '16px' }}>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div
        className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid #38bdf8',
          borderRadius: '12px',
          width: '600px',
          padding: '16px',
          margin: '0 auto'
        }}
      >
        <div className='my-4' style={{ marginBottom: '16px' }}>
          <label className='text-xl mr-4 text-gray-500' style={{ fontSize: '20px', marginRight: '16px', color: '#6b7280' }}>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            style={{
              border: '2px solid #6b7280',
              padding: '8px 16px',
              width: '100%'
            }}
          />
        </div>
        <div className='my-4' style={{ marginBottom: '16px' }}>
          <label className='text-xl mr-4 text-gray-500' style={{ fontSize: '20px', marginRight: '16px', color: '#6b7280' }}>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-6 py-2 w-full'
            style={{
              border: '2px solid #6b7280',
              padding: '8px 24px',
              width: '100%'
            }}
          />
        </div>
        <div className='my-4' style={{ marginBottom: '16px' }}>
          <label className='text-xl mr-4 text-gray-500' style={{ fontSize: '20px', marginRight: '16px', color: '#6b7280' }}>Publish Year</label>
          <input
            type='number'
            value={publishyear}
            onChange={(e) => setPublishyear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            style={{
              border: '2px solid #6b7280',
              padding: '8px 16px',
              width: '100%'
            }}
          />
        </div>
        <div className='my-4' style={{ marginBottom: '16px' }}>
          <label className='text-xl mr-4 text-gray-500' style={{ fontSize: '20px', marginRight: '16px', color: '#6b7280' }}>ISBN Number</label>
          <input
            type='number'
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            style={{
              border: '2px solid #6b7280',
              padding: '5px 12px',
              width: '100%'
            }}
          />
        </div>
        <div className='my-4' style={{ marginBottom: '16px' }}>
          <label className='text-xl mr-4 text-gray-500' style={{ fontSize: '20px', marginRight: '16px', color: '#6b7280' }}>Genre Type</label>
          <input
            type='text'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            style={{
              border: '2px solid #6b7280',
              padding: '8px 16px',
              width: '100%'
            }}
          />
        </div>
        <div className='my-4' style={{ marginBottom: '16px' }}>
          <label className='text-xl mr-4 text-gray-500' style={{ fontSize: '20px', marginRight: '16px', color: '#6b7280' }}>Stock Amount</label>
          <input
            type='number'
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            style={{
              border: '2px solid #6b7280',
              padding: '8px 16px',
              width: '100%'
            }}
          />
        </div>
        <button
          className='p-2 bg-sky-300 m-8'
          onClick={handleEditBook}
          style={{
            padding: '8px 16px',
            backgroundColor: '#38bdf8',
            margin: '32px auto',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook;
