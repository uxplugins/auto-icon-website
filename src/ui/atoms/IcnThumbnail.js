import React, { useState } from "react";
import { Placeholder, Tooltip, Whisper } from "rsuite";
import styled from "styled-components";
import Typography from "./Typography";
const BASE_URL = "https://icon.fra1.cdn.digitaloceanspaces.com/";
// 'https://auto-icon-public-svg.s3.ir-thr-at1.arvanstorage.com/';
const IcnThumbnail = (props) => {
  const { icon } = props;
  const [loaded, setLoaded] = useState(false);
  const encodedPack = encodeURI(icon.packName);
  const url = `${BASE_URL}${encodedPack}/icons/${icon.name}.svg`;
  return (
    <Container>
      <Content draggable>
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
          <Text small>{icon.name}</Text>
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
  width: 110px;
  height: 110px;
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
const Text = styled(Typography)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 110px;
  width: 100%;
  height: 100%;
  flex: 1;
  cursor: pointer;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export default IcnThumbnail;
