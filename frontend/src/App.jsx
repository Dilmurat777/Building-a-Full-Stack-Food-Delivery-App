import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PLaceOrder from './pages/PlaceOrder/PLaceOrder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
     
      <Navbar setShowLogin={ setShowLogin} />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PLaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
