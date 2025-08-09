import { createContext, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState('');

  const [list, setList] = useState([]);

  const url = 'http://localhost:4000';

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    setList(response.data.data);
  };

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url+"/api/cart/add", {itemId}, {headers: {token}})
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
     if (token) {
      await axios.post(url+"/api/cart/remove", {itemId}, {headers: {token}})
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = list.find((pro) => pro._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const loadCartData = async (token) => {
    const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } })
    setCartItems(response.data.cartData || {})
  }

  useEffect(() => {
    async function loadData() {
      await fetchList();
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
        await loadCartData(localStorage.getItem('token'))
      }
    }
    loadData()
  }, []);

  const contextValue = {
    list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };
  return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};
export default StoreContextProvider;
