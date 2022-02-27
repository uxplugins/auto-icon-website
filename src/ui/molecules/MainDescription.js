import React from "react";
import styled from "styled-components";
import {
  MAIN_PACKAGE_USAGE_TEXT,
  CODE_YARN_INSTALL,
  CODE_NPM_INSTALL,
  CODE_USAGE,
  MAIN_TITLE_INSTALLATION,
  MAIN_WHY_AUTO_ICON,
  MAIN_WHY_AUTO_ICON_TITLE,
} from "../../Store/codes";
import CodePart from "../atoms/CodePart";
const MainDescription = () => {
  return (
    <Container>
      <TxtDescription>{MAIN_PACKAGE_USAGE_TEXT}</TxtDescription>
      <TxtTitle>{MAIN_TITLE_INSTALLATION}</TxtTitle>
      <CodePart
        code={CODE_YARN_INSTALL}
        language="jsx"
        showLineNumbers={false}
      />
      <TxtDescription>or</TxtDescription>
      <CodePart
        code={CODE_NPM_INSTALL}
        language="jsx"
        showLineNumbers={false}
      />
      <TxtTitle>Usage</TxtTitle>
      <CodePart code={CODE_USAGE} language="jsx" showLineNumbers={true} />
      <TxtTitle>{MAIN_WHY_AUTO_ICON_TITLE}</TxtTitle>
      <TxtDescription>{MAIN_WHY_AUTO_ICON}</TxtDescription>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 20px;
  height: calc(100vh - 104px);
  overflow-y: scroll;
  background-color: #ffffff;
`;
const TxtDescription = styled.p`
  color: #002a36;
  font-size: 16px;
  -webkit-user-select: none;
  user-select: none;
`;
const TxtTitle = styled.p`
  color: #002a36;
  font-size: 18px;
  font-weight: bold;
  -webkit-user-select: none;
  user-select: none;
`;
// const TxtLogo = styled.h2`
//   color: #cb3837;
//   font-size: 22px;
//   font-weight: bold;
//   -webkit-user-select: none;
//   user-select: none;
// `;
export default MainDescription;
