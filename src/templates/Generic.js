import React from "react";
import SubPages from "../layouts/subPages";

const Generic = ({ pageContext }) => {
  return (
    <SubPages>
      <h1>{pageContext.title}</h1>
      <h4>{pageContext.description}</h4>
      
    </SubPages>
  );
};

export default Generic;
