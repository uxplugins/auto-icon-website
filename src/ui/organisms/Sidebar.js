import React from "react";
import { Nav, Sidenav } from "rsuite";
import styled from "styled-components";
import { ALL_ICONS } from "../../utils/icons";

const Sidebar = () => {
  const iconsList = ALL_ICONS.sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <Container>
      <Sidenav>
        <Sidenav.Body>
          <SidebarContainer>
            {iconsList.map((icon) => (
              <Nav.Item key={icon.id} eventKey={icon.id}>
                  <Tag className="px2 py1">{icon.name}</Tag>
              </Nav.Item>
            ))}
          </SidebarContainer>
        </Sidenav.Body>
      </Sidenav>
    </Container>
  );
};
const Container = styled.div`
`;
const SidebarContainer = styled(Nav)`
  margin: 0;
  padding-top: 0;
  list-style-type: none;
  width: 100%;
  li,
  a {
    display: block;
  }

  a {
    line-height: 1.7rem;
    color: #000000;
    border: 2px solid transparent;
    outline: none;
    transition: all 0.1s ease;

    &:focus {
      border-color: rgba(#434343, 0.5);
      background: rgba(#434343, 0.05);
    }

    &.active {
      border-color: transparent;
      font-weight: 600;
    }
  }
`;

const Tag = styled.p`
  border-radius: 5px;
`;
export default Sidebar;
