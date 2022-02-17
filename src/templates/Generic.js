import React, {useEffect, useState} from "react";
import SubPages from "../layouts/subPages";
// import IcnThumbnail from "../ui/atoms/IcnThumbnail";
import IconsList from "../ui/organisms/IconsList";
import { getIconByName } from "../utils/icons";
const Generic = ({ pageContext }) => {
  const [data, setData] = useState([])
  useEffect(()=>{
    setData([])
    const pack = getIconByName(pageContext.title)
    setData(pack.items);
   
  },[pageContext])
  
  return (
    <SubPages>
      <h1>{pageContext.title}</h1>
      <h4>{pageContext.description}</h4>
      <IconsList icons={data} />
    </SubPages>
  );
};

export default Generic;
