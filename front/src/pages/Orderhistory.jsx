import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Orderlist from '../components/home/Orderlist';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [orders, setorders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:7005/orders/history')
      .then((response) => {
        setorders(response.data.data);
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

  return (



  <div className='p-4'>
    <div className='flex justify-center items-center gap-x-4'>
      <button
        className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        onClick={() => setShowType('table')}
      >
        Table
      </button>
      <button
        className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        onClick={() => setShowType('card')}
      >
        Card
      </button>
      <button
        className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        onClick={handlePlaceOrder}
      >
        Place an Order
      </button>

    
    </div>
    <div className='flex justify-between items-center'>
      <h1 className='text-3xl my-8'>Books List</h1>
      <Link to='/books/create'>
        <MdOutlineAddBox className='text-sky-800 text-4xl' />
      </Link>

    
    </div>
    {loading ? (
      <Spinner />
    ) : showType === 'table' ? (
      <Orderlist orders={orders} />
    ) : (
      <BooksCard orders={orders} />
    )}
  </div>
);
};

export default Home