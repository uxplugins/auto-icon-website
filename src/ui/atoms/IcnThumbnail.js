import React from "react";
import { Tooltip, Whisper } from "rsuite";
import styled from "styled-components";
import Typography from "./Typography";
const BASE_URL = "https://icon.fra1.cdn.digitaloceanspaces.com/";
// 'https://auto-icon-public-svg.s3.ir-thr-at1.arvanstorage.com/';
const IcnThumbnail = (props) => {
  const { icon } = props;
  const encodedPack = encodeURI(icon.packName);
  const url = `${BASE_URL}${encodedPack}/icons/${icon.name}.svg`;
  return (
    <Container>
      <Content draggable>
        <Img id={icon.id} src={url} alt={`${icon.name} icon`} />
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
  width: 55px;
  height: 68px;
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
    cursor: grab;
    justify-content: center;
    &:hover {
        background-color: #1ce3dc;
        transition: all 0.5s;
    }
`;
const TxtTooltip = styled.p`
    color: #CBCBCB !important;
`;
const tooltip = (title) => (
  <StyledTooltip>
      <TxtTooltip>{title}</TxtTooltip>
  </StyledTooltip>
);
const Img = styled.img`
  margin-top: 3px;
  width: 24px;
  height: 24px;
`;
const StyledTooltip = styled(Tooltip)`
    z-index: 9991;
    & > .rs-tooltip-inner {
        background-color: #E9F5FE;
    }
    & > .rs-tooltip-arrow {
        border-top-color: #E9F5FE !important;
    }
`;
const Text = styled(Typography)`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 43px;
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
