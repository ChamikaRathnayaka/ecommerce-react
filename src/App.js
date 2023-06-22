import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
    <Footer/>
      
    </div>
  );
}

export default App;
