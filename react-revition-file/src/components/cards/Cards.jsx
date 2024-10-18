import React, { useEffect, useState } from "react";
import Card from "../show-card/card";

const Cards = () => {
  const [pets, setPets] = useState([]);

  console.log(pets);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => setPets(data.pets));
  }, []);
  return (
    <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {pets.map((pet) => (
        <Card pet={pet}></Card>
      ))}
    </div>
  );
};

export default Cards;
