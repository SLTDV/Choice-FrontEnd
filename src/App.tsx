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
import Page404 from './pages/Page404';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import ScrollToTop from './components/common/ScrollToTop';
import ChangePassword from './pages/ChangePassword';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <ScrollToTop />
          <ToastContainer className='toast' />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/:idx' element={<PostDetail />} />
            <Route path='/my' element={<MyPage />} />
            <Route path='/makeChoice' element={<MakeChoice />} />
            <Route path='/password' element={<ChangePassword />} />
            <Route path='/*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
