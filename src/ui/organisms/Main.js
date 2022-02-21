import React, { useEffect, useState } from "react";
import { handleSearchList } from "../../utils/search";
import Container from "../atoms/Container";
import IconsList from "./IconsList";
import defaultData from "../../assets/data/data.json";
import { SearchAtom } from "../../Store/search";
import { useDebounce } from "use-debounce";
import { useAtom } from "jotai";
import { handleAllIconList } from "../../utils/icons";
import { FilterAtom } from "../../Store/filter";
const Main = () => {
  const [data, setData] = useState(defaultData);
  const [search] = useAtom(SearchAtom);
  const [filterOption] = useAtom(FilterAtom);
  const [strSearch] = useDebounce(search, 500);
  const allIconList = handleAllIconList(defaultData.packs, filterOption);
  useEffect(() => {
    setData([]);
    if (strSearch === "" && strSearch.length <= 0) setData([]);
    else {
      handleSearchList(allIconList, strSearch, setData);
    }
  }, [strSearch]);
  return (
    <Container>
      {search.length > 0 ? <IconsList icons={data} /> : <p>Main</p>}
    </Container>
  );
};

export default Main;
