import * as React from "react";
import "rsuite/dist/rsuite.min.css";
import Main from "../ui/organisms/Main";
import SubPages from '../layouts/subPages.js'
// markup
const IndexPage = () => {
  return (
      <SubPages><Main/></SubPages>
  );
};

export default IndexPage;
