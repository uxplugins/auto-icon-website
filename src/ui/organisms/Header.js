import React from "react";
import { Nav, Navbar } from "rsuite";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query IconQuery {
          file(relativePath: { eq: "icon.png" }) {
            publicURL
          }
        }
      `}
      render={(data) => (
        <Container>
          <Navbar.Brand href="/auto-icon-website/">
            <Icon>
              <img src={data.file.publicURL} alt="Brand Auto Icon" width={30} height={30} />
              <BrandText className="poppins"> Auto Icon</BrandText>
            </Icon>
          </Navbar.Brand>
          <NavItemContainer>
            <Nav.Item className="poppins" href="/auto-icon-website/plugin">
              Plugin
            </Nav.Item>
            <Nav.Item className="poppins" href="/auto-icon-website/new-icons">
              New Icons
            </Nav.Item>
          </NavItemContainer>
        </Container>
      )}
    />
  );
};
const Container = styled(Navbar)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 32px;
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
