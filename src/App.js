import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { productsData } from "./api/Api";
import SingleProduct from "./components/SingleProduct";


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} loader={productsData} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/singleproduct/:id" element={<SingleProduct/>} />
      </Routes>
    </Router>
    <Footer/>
      
    </div>
  );
}

export default App;
