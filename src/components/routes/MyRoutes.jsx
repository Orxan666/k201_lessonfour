import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import ProductDetail from "../../pages/ProductDetail";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mehsullar:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default MyRoutes;
