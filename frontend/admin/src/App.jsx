import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './page/Add/Add';
import List from './page/LIst/List';
import Orders from './page/Orders/Orders';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const url = 'http://localhost:4000';
  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
