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

const updatePetId = async () => {
  const res = await instance.put(`/pets/`, {
    name: "notTurki",
    type: "Dog",
    image:
      "https://cdn.discordapp.com/avatars/315122151495696387/f21c67f2ee3ba644a7e4e25096e48f67?size=1024",
    adopted: 0,
  });
};
const deletePetId = async () => {
  const res = await instance.delete(`/pets/`);
};

export { getAllData, getDataId, addNewPet, updatePetId, deletePetId };
