import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PLaceOrder from './pages/PlaceOrder/PLaceOrder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';

const App = () => {
    const url = 'http://localhost:4000';
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
     
      <Navbar setShowLogin={ setShowLogin} />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home url={url} />} />
          <Route path="/cart" element={<Cart url={url} />} />
          <Route path="/order" element={<PLaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
