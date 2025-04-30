import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login.jsx'
import SignUpPage from './pages/signup.jsx'
import Header from './components/header.jsx';
import AdminPage from './pages/adminPage.jsx';
import HomePage from './pages/home.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />   
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>

    {/* <div className='w-full h-screen bg-amber-200 flex flex-col justify-center items-center'>
      <div className='w-[600px] h-[600px] bg-amber-900 relative flex flex-col justify-center items-center'>
        <div className='w-[100px] h-[100px] bg-red-600 absolute top-[10px] left-[10px]'></div>
        <div className='w-[100px] h-[100px] bg-blue-600'></div>
        <div className='w-[100px] h-[100px] bg-purple-600'></div>
        <div className='w-[100px] h-[100px] bg-green-600'></div>
        <div className='w-[100px] h-[100px] bg-orange-400'></div>
      </div>
    </div> */}

    {/* <Header/>
    <ProductCard
      name="Apple Laptop"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis a quo laudantium! 
      Sed officiis quam atque optio perferendis voluptas rem illum laudantium dicta ex doloremque nobis, 
      exercitationem non consequatur."
      price="1000/="
      picture="https://img.freepik.com/free-photo/laptop-stone-surface-sea-background_1232-430.jpg"
    />
    <ProductCard
      name="Gaming Laptop"
      description="Lorem ipsum dolor sit amet consectetur"
      price="84000/="
      picture="https://cdn.mos.cms.futurecdn.net/3kcgKLkfPRbskpsYzW239d.jpg"
    /> */}
    </>
  )
}

export default App
