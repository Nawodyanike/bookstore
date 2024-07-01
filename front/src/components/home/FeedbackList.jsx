import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const FeedbackList = ({ feedbacks }) => {
  return (
    <div className='feedback-list'>
      {feedbacks.map((feedback, index) => (
        <div key={feedback._id} className='feedback-item border border-slate-400 rounded-md p-6 mb-4'>
          <h3 className='font-bold mb-2'>Feedback #{index + 1}</h3>
          <p className='mb-2'><strong>Name:</strong> {feedback.name}</p>
          <p className='mb-2'><strong>Comments:</strong> {feedback.comments}</p>
          <div className='flex justify-center gap-x-4 mt-2'>
            <Link to={`/books/details/${feedback._id}`}>
              <BsInfoCircle className='text-2xl text-green-800' />
            </Link>
            <Link to={`/feedbacks/edit/${feedback._id}`}>
              <AiOutlineEdit className='text-2xl text-yellow-600' />
            </Link>
            <Link to={`/feedbacks/delete/${feedback._id}`}>
              <MdOutlineDelete className='text-2xl text-red-600' />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
