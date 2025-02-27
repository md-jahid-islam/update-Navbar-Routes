import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home';
import Aboute from './Pages/Aboute';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Layout from './Components/layoouts/Layout';

function App() {

  return (
    <>
 <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<Aboute />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
