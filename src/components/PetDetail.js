import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getDataId, unAdoptId, updatePetId, deletePetId } from "../api/pets";
import { useEffect } from "react";
import { useState } from "react";
const PetDetail = () => {
  const [petsData, setPetsData] = useState([]);
  const { petId } = useParams();
  const pet = petsData;
  const [Turki, setTurki] = useState("");
  const callApi = async () => {
    const data = await getDataId(petId);
    setPetsData(data.data);
    if (data.data.name === "Turki") {
      setTurki("Turki");
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const checkIfTurki = () => {
    if (pet.name == "Turki") {
      setTurki("You Cant delete Turki");
    } else {
      deletePetId(petId);
    }
  };

  if (!pet) {
    return (
      <div className="container-noPet">
        <h1>There is no pet with the id: {petId}</h1>
      </div>
    );
  }
  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet.image}
            alt={pet.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {Turki}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>adopted: {pet.adopted}</h1>

          <button
            onClick={() => updatePetId(petId, pet.name, pet.type, pet.image)}
            className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5"
          >
            Adopt
          </button>
          <button
            onClick={() => unAdoptId(petId, pet.name, pet.type, pet.image)}
            className="w-[70px] border border-black rounded-md  hover:bg-orange-400 mb-5"
          >
            unAdopt
          </button>
          
            <button
              onClick={() => checkIfTurki()}
              className="w-[70px] border border-black rounded-md  hover:bg-red-400"
            >
              Delete
            </button>
        
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
