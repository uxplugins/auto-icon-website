import React from "react";
import { Nav, Navbar } from "rsuite";
import styled from "styled-components";
import Logo from "../../images/icon.svg";
const Header = () => {
  return (
    <Container id="header-container" className="Header_Container">
      <Navbar.Brand style={{ paddingLeft: 0 }} href="/">
        <Icon>
          <img src={Logo} alt="Brand Auto Icon" width={30} height={30} />
          <BrandText className="poppins"> Auto Icon</BrandText>
        </Icon>
      </Navbar.Brand>
      {/* <NavItemContainer>
        <Nav.Item className="poppins" href="/plugin">
          Plugin
        </Nav.Item>
        <Nav.Item className="poppins" href="/new-icons">
          New Icons
        </Nav.Item>
      </NavItemContainer> */}
    </Container>
  );
};
const Container = styled(Navbar)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 25px;
  padding-bottom: 5px;
  & .rs-navbar {
    display: flex;
  }
`;
const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const BrandText = styled.span`
  margin-left: 5px;
  font-size: 20px;
`;
const NavItemContainer = styled(Nav)`
  margin-left: 120px;
`;

export default Header;
