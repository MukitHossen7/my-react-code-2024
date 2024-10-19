import React from "react";

const Product = ({ product }) => {
  console.log(product);
  const { title, id } = product;
  return (
    <div>
      <h2>Title: {title}</h2>
      <h4>Id : {id}</h4>
    </div>
  );
};

export default Product;
