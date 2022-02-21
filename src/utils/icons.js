import data from '../assets/data/data.json'
export const getIconByName = name => {
  const pack = data.packs.find(pack => pack.name === name);
  return pack;
};


export const handleAllIconList = (packs, option) => {
  const result = [];
  packs.map((pack) =>
      pack.items.map((item) =>
          option === 'All'
              ? result.push({
                    ...item,
                    packageName: pack.name,
                })
              : option === 'Premium'
              ? !item.isFree &&
                result.push({
                    ...item,
                    packageName: pack.name,
                })
              : option === 'Free' &&
                item.isFree &&
                result.push({
                    ...item,
                    packageName: pack.name,
                })
      )
  );

  return result;
};