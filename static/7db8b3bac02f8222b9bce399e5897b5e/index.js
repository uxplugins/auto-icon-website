import * as React from "react";
import { Col, Grid, Row } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Sidebar from "../ui/organisms/Sidebar";
import Main from "../ui/organisms/Main";
import Container from "../ui/atoms/Container";
// markup
const IndexPage = ({data}) => {
  return (
    <Container>
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} md={6}>
            <Sidebar data="hi" />
          </Col>
          <Col xs={24} md={18}>
            <Main />
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default IndexPage;
