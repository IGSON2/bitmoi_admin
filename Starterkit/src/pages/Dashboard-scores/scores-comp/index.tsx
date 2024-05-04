import React, { useMemo } from "react";
import { Container } from "reactstrap";
import Breadcrumb from "Components/Common/Breadcrumb";
import TableContainer from "Components/Common/TableContainer";
import { column } from "Components/Common/type";

const DashboardScoresComp = () => {
  const columns: column[] = useMemo(
    () => [
      {
        header: "회원번호",
        accessorKey: "number",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "아이디(이메일)",
        accessorKey: "id",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "배팅 USDP",
        accessorKey: "bettingusdp",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "포지션",
        accessorKey: "position",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "배율",
        accessorKey: "leverage",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "수익률",
        accessorKey: "roe",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "수익 USDP",
        accessorKey: "pnl",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "포지션 시간",
        accessorKey: "positiontime",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "경과 시간",
        accessorKey: "ownedtime",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "진입 후 최대 손익률",
        accessorKey: "maxroe",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "주문 생성 시간",
        accessorKey: "submittime",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "진입 시간",
        accessorKey: "entrytime",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "종료 시간",
        accessorKey: "exittime",
        enableColumnFilter: false,
        enableSorting: true,
      },
    ],
    []
  );

  const data: any[] = [];

  document.title = "Dashboards | Invest";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="회원관리" breadcrumbItem="Invest" />
          <TableContainer
            columns={columns}
            data={data || []}
            isGlobalFilter={true}
            isPagination={true}
            SearchPlaceholder={`${data.length} records...`}
            pagination="pagination"
            paginationWrapper="dataTables_paginate paging_simple_numbers"
            tableClass="table-bordered dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
            isCustomPageSize={true}
            defaultSortingID=""
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardScoresComp;
