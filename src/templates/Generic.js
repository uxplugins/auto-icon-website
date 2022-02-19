import { useAtom } from "jotai";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useDebounce} from 'use-debounce';
import SubPages from "../layouts/subPages";
import { SearchAtom } from "../Store/search";
// import IcnThumbnail from "../ui/atoms/IcnThumbnail";
import IconsList from "../ui/organisms/IconsList";
import { getIconByName } from "../utils/icons";
import { handleSearchList } from "../utils/search";
const Generic = ({ pageContext }) => {
  const [data, setData] = useState([])
  const [search]=  useAtom(SearchAtom)
  const [strSearch] = useDebounce(search, 500);
  useEffect(()=>{
    setData([])
    const pack = getIconByName(pageContext.title)
    if(strSearch === "" && strSearch.length <= 0)
    setData(pack.items);
    else{
      handleSearchList(pack.items, strSearch, setData)
    }
   
  },[pageContext, strSearch])
  
  return (
    <SubPages>
      <Title>{pageContext.title}</Title>
      <h4>{pageContext.description}</h4>
      <IconsList icons={data} />
    </SubPages>
  );
};
const Title = styled.h1`
background-color: #FFF;
padding-left: 25px;
`
export default Generic;
