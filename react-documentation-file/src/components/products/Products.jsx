import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div>
      <h3>Products</h3>

      {/* {products.map((product) => (
        <Product product={product}></Product>
      ))} */}
      {products.map((product) => (
        <div>
          <h2>Title: {product.title}</h2>
          <h5>Id : {product.id}</h5>
        </div>
      ))}
    </div>
  );
};

export default Products;
