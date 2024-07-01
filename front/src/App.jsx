import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import Order from './pages/Order';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Navbar from './Navbar/Navbar';
import Footer from './Navbar/Footer';
import Feedbacks from './Userprofile/Insertfeedback';
import Readfeedbacks from './Userprofile/Readfeedbacks';
import Deletefeedbacks from './Userprofile/Deletefeedback';
import Updatefeedbacks from './Userprofile/Updatefeedbacks';
import Userprofiles from './Userprofile/Userprofile';
import Fiction from './Books/Fiction';
import './App.css'; // Import the global styles
import Accounts from './Userprofile/Accounts';
import Orderhistory from './pages/Orderhistory';
const App = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      {location.pathname === '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logins/create' element={<Login />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
        <Route path='/orders/create' element={<Order />} />
        <Route path='/registers/create' element={<Register />} />
        <Route path='/navigation' element={<Navbar />} />
        <Route path='/feedbacks/create' element={<Feedbacks />} />
        <Route path='/feedbacks/all' element={<Readfeedbacks />} />
        <Route path='/feedbacks/delete/:id' element={<Deletefeedbacks />} />
        <Route path='/feedbacks/edit/:id' element={<Updatefeedbacks />} />
        <Route path='/userprofile' element={<Userprofiles />} />
        <Route path='/books/fiction' element={<Fiction />} />
        <Route path='/Userprofile/accounts' element={<Accounts />} /> 
        <Route path='/orders/history' element={<Orderhistory />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
