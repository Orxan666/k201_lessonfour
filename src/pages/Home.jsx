import React from "react";
import ProductList from "../components/product-list/ProductList";

const Home = () => {
  return (
    <div>
      <h1>Home Sehife</h1>
      <ProductList categoryName="seller" bannerName="sellerBanners" />
    </div>
  );
};

export default Home;
