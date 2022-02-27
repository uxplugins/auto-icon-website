import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import { useDebounce } from "use-debounce";
import Layout from "../layouts";
import PackageLayout from "../layouts/packageLayout";
// import PackageLayout from "../layouts/packageLayout";
import SubPages from "../layouts/subPages";
import { ChildrenAtom } from "../Store/children";
import { IconListAtom } from "../Store/filter";
import { SearchAtom } from "../Store/search";
// import IcnThumbnail from "../ui/atoms/IcnThumbnail";
import IconsList from "../ui/organisms/IconsList";
import { getIconByName } from "../utils/icons";
import { handleSearchList } from "../utils/search";
const Generic = ({ pageContext }) => {
  const [, setData] = useAtom(IconListAtom);
  const [search] = useAtom(SearchAtom);
  const [strSearch] = useDebounce(search, 500);
  const [child, setChild] = useAtom(ChildrenAtom);
  useEffect(() => {
    setData([]);
    const pack = getIconByName(pageContext.title);
    if (strSearch === "" && strSearch.length <= 0) setData(pack.items);
    else {
      handleSearchList(pack.items, strSearch, setData);
    }
  }, [pageContext, strSearch]);

  return (
    <SubPages>
      <IconsList />
    </SubPages>
  );
};
// const Title = styled.h1`
//   background-color: #fff;
//   padding-left: 25px;
// `;
export default Generic;
