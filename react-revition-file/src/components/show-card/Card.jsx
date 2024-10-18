import React from "react";
import dollar from "../../assets/dollar.png";
import femenine from "../../assets/femenine.png";
import frame from "../../assets/Frame (1).png";
import frame2 from "../../assets/Frame.png";
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
            <div className="flex items-center gap-1">
              <img className="w-3" src={dollar} />
              <p>Price : {price || "Not Available"} $</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-3" src={frame2} />
              <p>Breed : {breed || "Not Available"}</p>
            </div>

            <div className="flex items-center gap-1">
              <img className="w-3" src={frame} />
              <p>Date of Birth : {date_of_birth || "Not Available"}</p>
            </div>

            <div className="flex items-center gap-1">
              <img className="w-3" src={femenine} />
              <p>Gender : {gender}</p>
            </div>
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
