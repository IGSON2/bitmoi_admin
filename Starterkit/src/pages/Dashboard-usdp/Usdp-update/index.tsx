import React, { useMemo } from "react";
import { Container } from "reactstrap";
import Breadcrumb from "Components/Common/Breadcrumb";
import { POSITION_LONG_KR } from "Components/Common/const";
import { column } from "Components/Common/type";
import TableContainer from "Components/Common/TableContainer";

const DashboardUsdpUpdate = (props: any) => {
  document.title = "Dashboards | usdp";

  let columns: column[] = useMemo(
    () => [
      {
        header: "회원번호",
        accessorKey: "number",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "닉네임",
        accessorKey: "nickname",
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
        header: "지급/차감",
        accessorKey: "value",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "사유",
        accessorKey: "title",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "지급/차감 시간",
        accessorKey: "createdat",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "방식",
        accessorKey: "way",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "지급자",
        accessorKey: "provider",
        enableColumnFilter: false,
        enableSorting: true,
      },
    ],
    []
  );

  let data: any[] = [
    {
      number: 1,
      nickname: "Jennifer Chang",
      id: "jennifer@gmail.com",
      value: 1200,
      title: "출석 보상",
      createdat: "12.10.12 19:32:12",
      way: "자동",
      provider: "시스템",
    },
    {
      number: 2,
      nickname: "John Doe",
      id: "john@gmail.com",
      value: 500,
      title: "Bonus",
      createdat: "12.10.12 20:15:30",
      way: "Manual",
      provider: "Admin",
    },
    {
      number: 3,
      nickname: "Jane Smith",
      id: "jane@gmail.com",
      value: 800,
      title: "Referral Reward",
      createdat: "12.10.12 21:45:10",
      way: "Automatic",
      provider: "System",
    },
    {
      number: 4,
      nickname: "Michael Johnson",
      id: "michael@gmail.com",
      value: 300,
      title: "Promotion Bonus",
      createdat: "12.10.12 22:30:45",
      way: "Manual",
      provider: "Admin",
    },
    {
      number: 5,
      nickname: "Emily Davis",
      id: "emily@gmail.com",
      value: 1000,
      title: "Monthly Incentive",
      createdat: "12.10.12 23:55:20",
      way: "Automatic",
      provider: "System",
    },
    {
      number: 6,
      nickname: "David Wilson",
      id: "david@gmail.com",
      value: 700,
      title: "Referral Bonus",
      createdat: "12.10.13 00:45:30",
      way: "Manual",
      provider: "Admin",
    },
    {
      number: 7,
      nickname: "Olivia Martinez",
      id: "olivia@gmail.com",
      value: 400,
      title: "Achievement Reward",
      createdat: "12.10.13 01:30:15",
      way: "Automatic",
      provider: "System",
    },
    {
      number: 8,
      nickname: "Daniel Anderson",
      id: "daniel@gmail.com",
      value: 900,
      title: "Performance Bonus",
      createdat: "12.10.13 02:15:40",
      way: "Manual",
      provider: "Admin",
    },
    {
      number: 9,
      nickname: "Sophia Taylor",
      id: "sophia@gmail.com",
      value: 600,
      title: "Referral Incentive",
      createdat: "12.10.13 03:05:50",
      way: "Automatic",
      provider: "System",
    },
    {
      number: 10,
      nickname: "James Brown",
      id: "james@gmail.com",
      value: 200,
      title: "Welcome Bonus",
      createdat: "12.10.13 04:40:25",
      way: "Manual",
      provider: "Admin",
    },
    {
      number: 11,
      nickname: "Ava Thomas",
      id: "ava@gmail.com",
      value: 1500,
      title: "Monthly Bonus",
      createdat: "12.10.13 05:25:10",
      way: "Automatic",
      provider: "System",
    },
    {
      number: 12,
      nickname: "Joseph Clark",
      id: "joseph@gmail.com",
      value: 100,
      title: "Referral Reward",
      createdat: "12.10.13 06:10:35",
      way: "Manual",
      provider: "Admin",
    },
    {
      number: 13,
      nickname: "Mia Rodriguez",
      id: "mia@gmail.com",
      value: 1800,
      title: "Promotion Bonus",
      createdat: "12.10.13 07:55:20",
      way: "Automatic",
      provider: "System",
    },
    {
      number: 14,
      nickname: "Benjamin Lee",
      id: "benjamin@gmail.com",
      value: 1300,
      title: "Monthly Incentive",
      createdat: "12.10.13 08:40:45",
      way: "Manual",
      provider: "Admin",
    },
    {
      number: 15,
      nickname: "Charlotte Hall",
      id: "charlotte@gmail.com",
      value: 1600,
      title: "Referral Bonus",
      createdat: "12.10.13 09:25:30",
      way: "Automatic",
      provider: "System",
    },
    {
      number: 16,
      nickname: "Henry Young",
      id: "henry@gmail.com",
      value: 1100,
      title: "Achievement Reward",
      createdat: "12.10.13 10:10:15",
      way: "Manual",
      provider: "Admin",
    },
    {
      number: 17,
      nickname: "Amelia Turner",
      id: "amelia@gmail.com",
      value: 1400,
      title: "Performance Bonus",
      createdat: "12.10.13 10:55:40",
      way: "Automatic",
      provider: "System",
    },
    {
      number: 18,
      nickname: "Ethan Adams",
      id: "ethan@gmail.com",
      value: 1700,
      title: "Referral Incentive",
      createdat: "12.10.13 11:40:50",
      way: "Manual",
      provider: "Admin",
    },
    {
      number: 19,
      nickname: "Harper Scott",
      id: "harper@gmail.com",
      value: 900,
      title: "Welcome Bonus",
      createdat: "12.10.13 12:25:25",
      way: "Automatic",
      provider: "System",
    },
    {
      number: 20,
      nickname: "Liam Murphy",
      id: "liam@gmail.com",
      value: 2000,
      title: "Monthly Bonus",
      createdat: "12.10.13 13:10:10",
      way: "Manual",
      provider: "Admin",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Dashboards" breadcrumbItem="USDP" />
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

export default DashboardUsdpUpdate;
