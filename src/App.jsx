import React from 'react';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import { Routes, Route } from 'react-router-dom';
import Add from './dashboard/Add';
import List from './dashboard/List';
import Order from './dashboard/Order';
import Update from './dashboard/Update';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './dashboard/Profile';
const App = () => {
  return (

      <div className="bg-custom-gradient">
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cartDetail/:id' element={<CarDetail />} />
          <Route path='/car/add' element={<Add/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/car/list' element={<List/>}/>
          <Route path='/car/order' element={<Order/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer />
      </div>
  );
};
export default App;