import { instance } from "./index.js";

const getAllData = async () => {
  const res = await instance.get(`/pets/`);
  return res;
};

const getDataId = async (Id) => {
  const res = await instance.get(`/pets/${Id}`);
  return res;
};

const addNewPet = async (name, type, image, adopted) => {
  const res = await instance.post(`/pets/`, {
    name,
    type,
    image,
    adopted,
  });
};

const updatePetId = async (Id, name, type, image) => {
  const res = await instance.put(`/pets/${Id}`, {
    name,
    type,
    image,
    adopted: 1,
  });
};

const unAdoptId = async (Id, name, type, image) => {
  const res = await instance.put(`/pets/${Id}`, {
    name,
    type,
    image,
    adopted: 0,
  });
};
const deletePetId = async (Id) => {
  const res = await instance.delete(`/pets/${Id}`);
};

export {
  getAllData,
  getDataId,
  addNewPet,
  updatePetId,
  deletePetId,
  unAdoptId,
};
