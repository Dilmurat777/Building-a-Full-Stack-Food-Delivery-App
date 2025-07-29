import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PLaceOrder from './pages/PlaceOrder/PLaceOrder';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
        <Navbar />
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
