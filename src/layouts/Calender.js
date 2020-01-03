import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const CalenderLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      {children}
    </Row>
  </Container>
);

// DefaultLayout.propTypes = {

// };

// DefaultLayout.defaultProps = {

// };

export default CalenderLayout;
