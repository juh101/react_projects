import './App.css'
import { useState,useEffect,} from 'react';
import {Provider, useDispatch} from 'react-redux';
import authService from './appwrite/auth';
import { login,logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then(userData =>{
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    })
    .finally(setLoading(false))
  }, []);

  return !loading ? (
    <div className="flex justify-center items-center h-screen">
      <div className='block w-full max-w-4xl mx-auto'>
        {/* <Header /> */}
        {/* <Outlet /> */}
        <main className="container my-5 p-4">
          <h2 className="text-xl font-semibold mb-4">Welcome to MegaBlog</h2>
          <p className="text-gray-200">This is a simple blogging platform built with React and Redux.</p>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  ): (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Loading...</h1>
    </div>
  );
}

export default App
