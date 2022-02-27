import { useAtom } from "jotai";
import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import CodePart from "../atoms/CodePart";
import { IsModalOpenAtom, ModalItemAtom } from "../../Store/modal";
import { Close } from "auto-icon-react/Material Design Icons";
import { downloader } from "../../utils/downloader";
import { makeFirstCharUpperCase } from "../../utils/helpers";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "transparent",
  },
};
const PopupModal = () => {
  const [modalIsOpen, setModalIsOpen] = useAtom(IsModalOpenAtom);
  const [item, setModalItem] = useAtom(ModalItemAtom);

  Modal.setAppElement("body");
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setModalIsOpen(false);
    setModalItem({ id: "", name: "", packName: "", source: "", pngSrc: "" });
  }
  const name = makeFirstCharUpperCase(item.name);
  const fullName = `${item.packName}_${item.name}`;
  const importCode = `import { ${name} } from "auto-icon-react/${item.packName}";`;
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Popup Modal"
    >
      <Container>
        <ImgContainer>
          <ImgContent>
            <Img src={item.source} />
          </ImgContent>
        </ImgContainer>
        <Content>
          <ContentHeader>
            <p>
              {item.packName} - {item.name.charAt(0).toUpperCase() + item.name.slice(0)}
            </p>
            <IcnContainer onClick={closeModal}>
              <IcnClose />
            </IcnContainer>
          </ContentHeader>
          <BtnContainer>
            <Btn onClick={() => downloader(item.pngSrc, fullName, "png")}>
              Download PNG
            </Btn>
            <Btn onClick={() => downloader(item.source, fullName, "svg")}>
              Download SVG
            </Btn>
          </BtnContainer>
          <CodePart
            code={importCode}
            language="jsx"
            showLineNumbers={false}
          />
        </Content>
      </Container>
    </Modal>
  );
};
const Container = styled.div`
  width: 650px;
  height: 300px;
  display: flex;
  flex-direction: row;
`;
const ImgContent = styled.div`
  background-color: #f7fbff;
  border: 1px solid #d0efff;
  border-radius: 7px;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgContainer = styled.div`
  width: 100%;
  flex: 2;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  flex: 5;
  align-items: center;
  justify-content: center;
`;
const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 150px;
`;
const Btn = styled.button`
  border: 1px solid #1c88e9;
  width: 140px;
  height: 40px;
  text-align: center;
  color: #1c88e9;
  margin-right: 20px;
  background: transparent;
  border-radius: 20px;
  &:hover {
    background: #d0efff;
  }
`;
const IcnClose = styled(Close)`
  color: #b2b2b2;
  width: 15px;
`;


const IcnContainer = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default PopupModal;
