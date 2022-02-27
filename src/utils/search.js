import Fuse from 'fuse.js/dist/fuse.common';

const options = {
    shouldSort: true,
    threshold: 0.3,
    findAllMatches: false,
    includeScore: true,
    keys: [{name: 'name', weight: 10}],
    useExtendedSearch: true
};
export const handleSearchList = (allIconList, inpVal, setIconList) => {
    const fuse = new Fuse(allIconList, options);
    const result = fuse.search(inpVal);
    
    if (result.length !== 0) {
        setIconList(result.map((item) => ({...item.item})));
    } else {
        setIconList([]);
    }
};
