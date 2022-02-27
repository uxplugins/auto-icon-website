import React, { useState } from "react";
import { Placeholder, Tooltip, Whisper } from "rsuite";
import { useAtom } from "jotai";
import styled from "styled-components";
import Highlighter from "react-highlight-words";
import Typography from "./Typography";
import { IsModalOpenAtom, ModalItemAtom } from "../../Store/modal";
import { SearchAtom } from "../../Store/search";
const BASE_URL = "https://icon.fra1.cdn.digitaloceanspaces.com/";

// 'https://auto-icon-public-svg.s3.ir-thr-at1.arvanstorage.com/';
const IcnThumbnail = (props) => {
  const { icon } = props;
  const [loaded, setLoaded] = useState(false);
  const [, setIsModalOpen] = useAtom(IsModalOpenAtom);
  const [, setModalItem] = useAtom(ModalItemAtom);
  const [search] = useAtom(SearchAtom);
  const encodedPack = encodeURI(icon.packName);
  const url = `${BASE_URL}${encodedPack}/icons/${icon.name}.svg`;
  const pngUrl = `${BASE_URL}${encodedPack}/icons/${icon.name}.png`;
  const handleOnClick = () => {
    setModalItem({ id: "", name: "", packName: "", source: "", pngSrc: "" });
    setIsModalOpen(true);
    setModalItem({
      id: icon.id,
      name: icon.name,
      packName: icon.packName,
      source: url,
      pngSrc: pngUrl,
    });
  };
  const contentWidth = document.getElementById("icn-thumbnail-content");
  let txtWidth = contentWidth ? contentWidth.offsetWidth : 100;
  return (
    <Container>
      <Content id="icn-thumbnail-content" onClick={handleOnClick}>
        {!loaded && (
          <Placeholder.Graph style={{ width: 110, height: 100 }} active />
        )}
        <Img
          onLoad={() => setLoaded(true)}
          id={icon.id}
          src={url}
          alt={`${icon.name} icon`}
          loaded={loaded}
        />
      </Content>

      <Whisper
        delayHide={0}
        delayShow={300}
        placement="bottom"
        trigger="hover"
        speaker={tooltip(icon.name)}
      >
        <TextContainer>
          <Text
            highlightClassName="YourHighlightClass"
            searchWords={[search]}
            autoEscape={true}
            textToHighlight={icon.name}
            txtWidth={txtWidth}
            highlightStyle={{ color: "#002a36", background: "#FFD63F" }}
          />
        </TextContainer>
      </Whisper>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 100px;
  border-radius: 3px;
  overflow: hidden;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  flex: 4;
  border-radius: 3px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  &:hover {
    background-color: #1ce3dc;
    transition: all 0.5s;
  }
`;
const TxtTooltip = styled.p`
  color: #cbcbcb !important;
`;
const tooltip = (title) => (
  <StyledTooltip>
    <TxtTooltip>{title}</TxtTooltip>
  </StyledTooltip>
);
const Img = styled.img`
  margin-top: 3px;
  width: 32px;
  height: 32px;
  display: ${(props) => (props.loaded ? "block" : "none")};
`;
const StyledTooltip = styled(Tooltip)`
  z-index: 9991;
  & > .rs-tooltip-inner {
    background-color: #e9f5fe;
  }
  & > .rs-tooltip-arrow {
    border-top-color: #e9f5fe !important;
  }
`;
const Text = styled(Highlighter)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: ${(props) => props.txtWidth}px;
  width: 100%;
  height: 100%;
  flex: 1;
  color: #777777;
  font-size: 12px;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export default IcnThumbnail;
