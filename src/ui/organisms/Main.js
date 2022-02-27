import React, { useEffect } from "react";
import { useDebounce } from "use-debounce";
import styled from "styled-components";
import { useAtom } from "jotai";
import IconsList from "./IconsList";
import { SearchAtom } from "../../Store/search";
import { FilterAtom, IconListAtom } from "../../Store/filter";
import defaultData from "../../assets/data/data.json";
import { handleAllIconList } from "../../utils/icons";
import { handleSearchList } from "../../utils/search";
import MainDescription from "../molecules/MainDescription";
const Main = () => {
  const [data, setData] = useAtom(IconListAtom);
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
      {search.length > 0 ? <IconsList /> : <MainDescription />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -20px;
`;

export default Main;
