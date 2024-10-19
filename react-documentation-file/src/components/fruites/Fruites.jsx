import React from "react";

const Fruites = () => {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  return (
    <div>
      <h2>Fruits : {products.length} </h2>
      {products.map((product) => (
        <h3 style={{ color: product.isFruit ? "green" : "red" }}>
          {product.title}
        </h3>
      ))}
    </div>
  );
};

export default Fruites;
