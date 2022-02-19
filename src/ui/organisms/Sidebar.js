import { Link } from "gatsby";
import React from "react";
import { Nav, Sidenav } from "rsuite";
import styled from "styled-components";
// import { ALL_ICONS } from "../../utils/icons";
import data from "../../assets/data/data.json";
import useWindowSize from "../../utils/use-window-size";

const Sidebar = () => {
  const packList = data.packs;
  const size = useWindowSize();

  return (
    <Container height={size.height - 75}>
      <Sidenav>
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
  overflow-y: scroll;
  height: ${(props) => props.height}px;
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
    padding: 16px 25px;
    &:focus {
      border-color: rgba(#f7fbff, 0.5);
      background: #c6c9cc !important;
      text-decoration: none !important;
    }
    &:hover {
      text-decoration: none !important;
      background: #dee2e6 !important;
    }
    &:active {
      border-color: transparent;
      font-weight: 600;
      text-decoration: none !important;
      background-color: #c6c9cc !important;
    }
  }
`;

const Tag = styled.p`
  border-radius: 5px;
`;
export default Sidebar;
