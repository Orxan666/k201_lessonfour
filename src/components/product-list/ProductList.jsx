import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../api/BaseConfig";
const ProductList = ({ categoryName, bannerName }) => {
  const [mainProducts, setMainProducts] = useState(null);
  const getProducts = () => {
    fetch(BASE_URL + "/Home/HomeScroll")
      .then((pro) => pro.json())
      .then((result) => setMainProducts(result));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            {mainProducts !== null ? (
              <div className="col-lg-12">
                {mainProducts[`${categoryName}`].products.map((product,index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="product-item">
                      <img className="img-fluid" src={product.photo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>LOADING</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
