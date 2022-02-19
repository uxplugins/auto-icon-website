import React from "react";
import styled from "styled-components";
import GlobalStyle from "../assets/themes/GlobalStyle";
import Header from "../ui/organisms/Header";

const Layout = ({ children }) => {
  return (
    <Container className="Layout_Container">
      <GlobalStyle />
      <Header />
      {children}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Layout;
