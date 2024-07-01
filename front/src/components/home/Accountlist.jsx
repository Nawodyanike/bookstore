import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import Register from '../../pages/Register';

const BooksTable = ({ registers }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {registers.map((register) => (
        <div
          key={register._id}
          style={{
            padding: '16px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <div style={{ marginBottom: '8px' }}>
            <strong>User Name: phi@123</strong> {register.username}
          </div>
          <div style={{ marginBottom: '8px' }}>
            <strong>Password:123456</strong> {register.password}
          </div>
          <div style={{ marginBottom: '8px' }}>
            <strong>Email: Nawo@gmail.com</strong> {register.email}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link to={`/books/details/${register._id}`}>
              <BsInfoCircle style={{ fontSize: '24px', color: 'green' }} />
            </Link>
            <Link to={`/books/edit/${register._id}`}>
              <AiOutlineEdit style={{ fontSize: '24px', color: 'yellow' }} />
            </Link>
            <Link to={`/books/delete/${register._id}`}>
              <MdOutlineDelete style={{ fontSize: '24px', color: 'red' }} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksTable;
