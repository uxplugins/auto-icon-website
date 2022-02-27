import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toaster from "rsuite/toaster";
import {CopyNotification} from "./NotificationMessage";
const CodePart = ({ code, language, showLineNumbers }) => {
  const handleOnCopy = () => {
    toaster.push(CopyNotification, "bottomCenter");
  };
  return (
    <CopyToClipboard onCopy={handleOnCopy} text={code}>
      <Container>
        <CodeBlock
          text={code}
          language={language}
          showLineNumbers={showLineNumbers}
          theme={dracula}
        />
      </Container>
    </CopyToClipboard>
  );
};
const Container = styled.div`
  margin: 20px 0;
  cursor: pointer;
`;
export default CodePart;
