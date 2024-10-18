import React from "react";

const Card = ({ pet }) => {
  const { pet_name, breed, date_of_birth, image, gender, price } = pet;
  return (
    <div>
      <div className=" p-6 rounded-xl border border-slate-200 w-full h-full object-cover">
        <figure className="">
          <img
            src={image}
            alt="Pets"
            className="rounded-xl w-full object-cover h-36"
          />
        </figure>
        <div className="">
          <h2 className="card-title pt-4 font-bold">{pet_name}</h2>

          <div className="text-sm flex flex-col gap-1 py-4 text-slate-600 font-medium">
            <img src="assets/dollar.png" />
            <p>Price : {price} $</p>
            <p>Breed : {breed || "Not Available"}</p>
            <p>Date of Birth : {date_of_birth || "Not Available"}</p>
            <p>Gender : {gender}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary px-5 py-1 font-bold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
