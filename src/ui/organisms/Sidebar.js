import { Link } from "gatsby";
import React from "react";
import { Nav, Sidenav } from "rsuite";
import styled from "styled-components";
// import { ALL_ICONS } from "../../utils/icons";
import data from "../../assets/data/data.json";

const Sidebar = () => {
  const packList = data.packs;

  return (
    <Container>
      <Sidenav style={{ overflowY: "scroll" }}>
        <Sidenav.Body>
          <SidebarContainer>
            {packList.map((pack) => (
              <Link to={`/${pack.name}`} key={pack.id} eventKey={pack.id}>
                <Tag className="px2 py1">{pack.name}</Tag>
              </Link>
            ))}
          </SidebarContainer>
        </Sidenav.Body>
      </Sidenav>
    </Container>
  );
};
const Container = styled.div`
  /* overflow-y: scroll; */
  height: 100%;
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
