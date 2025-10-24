import React from 'react';
import HomePage from './pages/home/HomePage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import OrdersPage from './pages/orders/OrdersPage';
import TrackingPage from './pages/tracking/TrackingPage';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import api from './utils/api';
import './App.css'

function App() {
  

   const [cart, setCart] = useState([]);

    const loadCart = async () => {
      const response = await api.get('/cart-items?expand=product')
       setCart(response.data);
    };

   useEffect(() => {
    loadCart();
  }, []);

  return (
   <Routes>
    <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
    <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
    <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart}/>} />
    <Route path="tracking" element={<TrackingPage />} />
   </Routes>
  )
}

export default App
