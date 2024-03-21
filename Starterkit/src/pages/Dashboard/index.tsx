import React from "react";
import Breadcrumb from "Components/Common/Breadcrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  CardTitle,
  Nav,
  NavItem,
} from "reactstrap";
import LatestTransaction from "Components/Common/LatestTransaction";

const Dashboard = () => {
  document.title = "Dashboards | Skote - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Dashboards" breadcrumbItem="Dashboards" />
          <Row>
            <Col lg={12}>
              <LatestTransaction />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
