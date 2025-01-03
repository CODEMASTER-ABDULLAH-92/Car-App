import React from 'react';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (

      <div className="bg-custom-gradient">
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cartDetail/:id' element={<CarDetail />} />
        </Routes>
        <Footer />
      </div>
  );
};
export default App;