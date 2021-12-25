import React from "react";
import styled from "styled-components";
import GlobalStyle from "../assets/themes/GlobalStyle";
import Header from "../ui/organisms/Header";

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      {children}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export default Layout;
