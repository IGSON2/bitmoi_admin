import React from "react";
import { Container } from "reactstrap";
import Breadcrumb from "Components/Common/Breadcrumb";

const DashboardUsdp = () => {
  document.title = "Dashboards | Bitmoi";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Dashboards" breadcrumbItem="Dashboards" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardUsdp;
