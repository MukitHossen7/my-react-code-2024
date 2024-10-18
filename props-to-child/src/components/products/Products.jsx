import React from "react";
import Product from "../product/Product";

const Products = ({ handleSum }) => {
  return (
    <div>
      <h2>Hello Second Child</h2>
      <Product handleSum={handleSum}></Product>
    </div>
  );
};

export default Products;
