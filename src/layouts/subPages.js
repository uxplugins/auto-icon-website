import React from "react";
import { Grid, Row, Col } from "rsuite";
import Sidebar from '../ui/organisms/Sidebar'
const SubPages = ({ children }) => {
  return (
    <Grid fluid>
      <Row className="show-grid">
        <Col xs={24} md={6}>
          <Sidebar />
        </Col>
        <Col xs={24} md={18}>
          {children}
        </Col>
      </Row>
    </Grid>
  );
};

export default SubPages;
