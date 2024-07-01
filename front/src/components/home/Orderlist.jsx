import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ orders }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>order id</th>
          <th className='border border-slate-600 rounded-md'>name</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>date</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'> book name</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'> price</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>cash</th>
          
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={order._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
            <td className='border border-slate-700 rounded-md text-center'>{order.orderid}</td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{order.name}</td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{order.date}</td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{order.bookname}</td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{order.cash}</td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{order.price}</td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${order._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${order._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${order._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
