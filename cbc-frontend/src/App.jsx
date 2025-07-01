import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx';
import AdminPage from './pages/adminPage.jsx';
import HomePage from './pages/home.jsx';
import TestingPage from './pages/testingPage.jsx';
import ProductPage from './pages/client/productPage.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Toaster position='top-right' />
          {/* <Header/> */}
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />   
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/products" element={<ProductPage />} /> {/* ✅ add this */}
            <Route path="/testing" element={<TestingPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
