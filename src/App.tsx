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
import MyPage from './pages/MyPage';
import MakeChoice from './pages/MakeChoice';

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
          <Route path='/my' element={<MyPage />} />
          <Route path='/makeChoice' element={<MakeChoice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
