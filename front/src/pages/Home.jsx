import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/Bookstable';
import BooksCard from '../components/home/BooksCard';
import sarasavi from '../assets/image-sarasavi.webp';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:7005/books/')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handlePlaceOrder = () => {
    navigate('/orders/create');
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='p-4'>
      {/* Header with title and add new book link */}
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl'>Books List</h1>
        <Link to='/books/create'>
        <MdOutlineAddBox
        className='text-sky-800 text-5xl cursor-pointer'
        style={{ color: '#00BFFF', fontSize: '40px', cursor: 'pointer', marginTop: '10px', marginLeft: '20px' }}
      />
        </Link>
      </div>

      {/* Buttons for selecting view type */}
      <div className='flex justify-center items-center gap-x-4 mb-20'>
        <button
          className='bg-sky-200 hover:bg-sky-600 px-4 py-5 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table View
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-5 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card View
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={handlePlaceOrder}
        >
          Place an Order
        </button>
      </div>

      {/* Search input */}
      <div className='flex justify-center items-center mb-4'>
        <input
          type='text'
          placeholder='Search by title'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='border-2 border-gray-300 p-2 rounded-lg w-full max-w-md'
        />
      </div>

      {/* Background image section */}
      

      {/* Conditional rendering based on view type */}
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={filteredBooks} />
      ) : (
        <BooksCard books={filteredBooks} />
      )}
    </div>
  );
};

export default Home;
