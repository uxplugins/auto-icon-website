import React from "react";
import { Grid, Row, Col } from "rsuite";
import SearchInput from "../ui/molecules/SearchInput";
import Sidebar from "../ui/organisms/Sidebar";
const SubPages = ({ children }) => {
  return (
    <Grid className="SubPage_Grid" style={{ height: "100%" }} fluid>
      <Row className="show-grid">
        <Col className="Sidebar_Container" xs={6} md={6}>
          <Sidebar />
        </Col>
        <Col id="list-container" xs={18} md={18}>
          <SearchInput />
          {children}
        </Col>
      </Row>
    </Grid>
  );
};

export default SubPages;
