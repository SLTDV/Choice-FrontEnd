import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import GlobalStyle from './style/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from './pages/Signin';
import Main from './pages/Main';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ToastContainer className='toast' />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/post' element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
