import React from "react";

const Product = ({ handleSum }) => {
  return (
    <div>
      <h3>Hello Third Child</h3>
      {handleSum(5)}
    </div>
  );
};

export default Product;
