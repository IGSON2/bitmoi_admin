import React, { useMemo } from "react";
import { Container } from "reactstrap";
import Breadcrumb from "Components/Common/Breadcrumb";
import TableContainer from "Components/Common/TableContainer";
import { column } from "Components/Common/type";
import { POSITION_LONG_KR } from "Components/Common/const";

const DashboardInvestComp = () => {
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

  const data: any[] = [
    {
      number: 100,
      id: "jchang@gmail.com",
      bettingusdp: 100000,
      position: POSITION_LONG_KR,
      leverage: 10,
      roe: 12,
      pnl: 1200,
      positiontime: "4시간 20분",
      ownedtime: "4시간 30분",
      maxroe: "64%/-24%",
      submittime: "12.10.12 19:32:12",
      entrytime: "12.10.12 22:32:12",
      exittime: "12.10.14 19:32:12",
    },
    {
      number: 101,
      id: "jsmith@gmail.com",
      bettingusdp: 50000,
      position: POSITION_LONG_KR,
      leverage: 5,
      roe: 8,
      pnl: 400,
      positiontime: "2시간 30분",
      ownedtime: "3시간 45분",
      maxroe: "32%/-16%",
      submittime: "12.10.12 20:15:30",
      entrytime: "12.10.12 23:45:10",
      exittime: "12.10.14 18:20:45",
    },
    {
      number: 102,
      id: "ajohnson@gmail.com",
      bettingusdp: 75000,
      position: POSITION_LONG_KR,
      leverage: 7,
      roe: 10,
      pnl: 750,
      positiontime: "3시간 15분",
      ownedtime: "4시간 10분",
      maxroe: "48%/-20%",
      submittime: "12.10.12 21:30:45",
      entrytime: "12.10.13 00:15:20",
      exittime: "12.10.14 17:40:30",
    },
    {
      number: 103,
      id: "jdoe@gmail.com",
      bettingusdp: 25000,
      position: POSITION_LONG_KR,
      leverage: 3,
      roe: 6,
      pnl: 150,
      positiontime: "1시간 45분",
      ownedtime: "2시간 20분",
      maxroe: "16%/-8%",
      submittime: "12.10.12 22:45:30",
      entrytime: "12.10.13 01:30:15",
      exittime: "12.10.14 16:15:45",
    },
  ];

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
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardInvestComp;
