import React from "react";
import "rsuite/dist/rsuite.min.css";
import Main from "../ui/organisms/Main";
import SubPages from "../layouts/subPages";
import PopupModal from "../ui/organisms/PopupModal";

// markup
const IndexPage = () => {
  return (
    <SubPages>
      <PopupModal />
      <Main />
    </SubPages>
  );
};

export default IndexPage;
