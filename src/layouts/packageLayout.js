import React from "react";
// import { Col } from "rsuite";
import SearchInput from "../ui/molecules/SearchInput";
const PackageLayout = ({ children }) => {
  return (
    <>
      <SearchInput />
      {children}
    </>
  );
};

export default PackageLayout;
