import React from "react";
import { Container } from "reactstrap";
import Breadcrumb from "Components/Common/Breadcrumb";
import TableContainer from "Components/Common/TableContainer";
import { column } from "Components/Common/type";

const DashboardInvest = () => {
  const columns: column[] = [];
  const data: any[] = [];

  document.title = "Dashboards | Invest";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="회원관리" breadcrumbItem="Users" />
          <TableContainer
            columns={columns}
            data={data || []}
            isGlobalFilter={true}
            isPagination={true}
            SearchPlaceholder={`${data.length} records...`}
            pagination="pagination"
            paginationWrapper="dataTables_paginate paging_simple_numbers"
            tableClass="table-bordered dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardInvest;
