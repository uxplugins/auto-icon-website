import data from '../assets/data/data.json'
export const getIconByName = name => {
  const pack = data.packs.find(pack => pack.name === name);
  return pack;
};
