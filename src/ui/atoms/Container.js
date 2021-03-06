import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export default Container;
