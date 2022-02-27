import React from "react";
import styled from "styled-components";
import GlobalStyle from "../assets/themes/GlobalStyle";
import PopupModal from "../ui/organisms/PopupModal";
import { useAtom } from "jotai";
import { ModalItemAtom } from "../Store/modal";
const Layout = ({ children }) => {
  const [modal] = useAtom(ModalItemAtom);

  return (
    <Container className="Layout_Container">
      <GlobalStyle />
      {modal.id.length > 0 && <PopupModal />}
      {children}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Layout;
