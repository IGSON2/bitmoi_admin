import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "Components/Common/Breadcrumb";
import { Container } from "reactstrap";
import { column } from "Components/Common/type";
import TableContainer from "Components/Common/TableContainer";
import { getUsers } from "@helpers/backend_helper";

type user = {
  number: number;
  nickname: string;
  id: string;
  usdp: number;
  token: number;
  attendance: number;
  prac: string;
  comp: string;
  referral: number;
  recom: string;
  signup: string;
  lastaccess: string;
};

const Dashboard = () => {
  const columns: column[] = useMemo(
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
        header: "USDP",
        accessorKey: "usdp",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Token",
        accessorKey: "token",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "출석 횟수",
        accessorKey: "attendance",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "전적 (연습)",
        accessorKey: "prac",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "전적 (경쟁)",
        accessorKey: "comp",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "레퍼럴 수",
        accessorKey: "referral",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "추천 코드",
        accessorKey: "recom",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "가입일",
        accessorKey: "signup",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "최근 접속일",
        accessorKey: "lastaccess",
        enableColumnFilter: false,
        enableSorting: true,
      },
    ],
    []
  );

  const initData: user[] = [
    {
      number: 1,
      nickname: "Jennifer Chang",
      id: "jchang@gmail.com",
      usdp: 187382.72,
      token: 320800,
      attendance: 87,
      prac: "100/50/50",
      comp: "46/16/30",
      referral: 42,
      recom: "AEIFJEIWE",
      signup: "24.10.12 19:24:12",
      lastaccess: "24.12.30 08:24:12",
    },
    {
      number: 2,
      nickname: "Gavin Joyce",
      id: "sdsd@gmail.com",
      usdp: 187382.72,
      token: 320800,
      attendance: 87,
      prac: "100/50/50",
      comp: "46/16/30",
      referral: 42,
      recom: "AEIFJEIWE",
      signup: "24.10.12 19:24:12",
      lastaccess: "24.12.30 08:24:12",
    },
    {
      number: 3,
      nickname: "John Doe",
      id: "johndoe@gmail.com",
      usdp: 100000,
      token: 500000,
      attendance: 50,
      prac: "50/25/25",
      comp: "20/10/10",
      referral: 10,
      recom: "ABCDE12345",
      signup: "2022-01-01 12:00:00",
      lastaccess: "2022-01-02 08:00:00",
    },
    {
      number: 4,
      nickname: "Jane Smith",
      id: "janesmith@gmail.com",
      usdp: 150000,
      token: 400000,
      attendance: 60,
      prac: "60/30/30",
      comp: "25/15/10",
      referral: 15,
      recom: "FGHIJ67890",
      signup: "2022-01-03 10:00:00",
      lastaccess: "2022-01-04 09:00:00",
    },
    {
      number: 5,
      nickname: "Michael Johnson",
      id: "michaeljohnson@gmail.com",
      usdp: 80000,
      token: 200000,
      attendance: 40,
      prac: "40/20/20",
      comp: "15/10/5",
      referral: 5,
      recom: "KLMNO12345",
      signup: "2022-01-05 14:00:00",
      lastaccess: "2022-01-06 12:00:00",
    },
    {
      number: 6,
      nickname: "Sarah Johnson",
      id: "sarahjohnson@gmail.com",
      usdp: 120000,
      token: 300000,
      attendance: 35,
      prac: "35/15/20",
      comp: "12/8/5",
      referral: 8,
      recom: "PQRST67890",
      signup: "2022-01-07 16:00:00",
      lastaccess: "2022-01-08 14:00:00",
    },
    {
      number: 7,
      nickname: "David Lee",
      id: "davidlee@gmail.com",
      usdp: 90000,
      token: 250000,
      attendance: 30,
      prac: "30/10/20",
      comp: "10/5/5",
      referral: 5,
      recom: "UVWXYZ12345",
      signup: "2022-01-09 18:00:00",
      lastaccess: "2022-01-10 16:00:00",
    },
    {
      number: 8,
      nickname: "Emily Wilson",
      id: "emilywilson@gmail.com",
      usdp: 60000,
      token: 150000,
      attendance: 25,
      prac: "25/5/20",
      comp: "8/3/5",
      referral: 3,
      recom: "ABCDE67890",
      signup: "2022-01-11 20:00:00",
      lastaccess: "2022-01-12 18:00:00",
    },
    {
      number: 9,
      nickname: "Daniel Brown",
      id: "danielbrown@gmail.com",
      usdp: 30000,
      token: 100000,
      attendance: 20,
      prac: "20/0/20",
      comp: "5/0/5",
      referral: 0,
      recom: "FGHIJ12345",
      signup: "2022-01-13 22:00:00",
      lastaccess: "2022-01-14 20:00:00",
    },
    {
      number: 10,
      nickname: "Olivia Davis",
      id: "oliviadavis@gmail.com",
      usdp: 15000,
      token: 50000,
      attendance: 15,
      prac: "15/0/15",
      comp: "3/0/3",
      referral: 0,
      recom: "KLMNO67890",
      signup: "2022-01-15 00:00:00",
      lastaccess: "2022-01-16 22:00:00",
    },
    {
      number: 11,
      nickname: "James Wilson",
      id: "jameswilson@gmail.com",
      usdp: 7500,
      token: 25000,
      attendance: 10,
      prac: "10/0/10",
      comp: "2/0/2",
      referral: 0,
      recom: "PQRST12345",
      signup: "2022-01-17 02:00:00",
      lastaccess: "2022-01-18 00:00:00",
    },
    {
      number: 12,
      nickname: "Sophia Anderson",
      id: "sophiaanderson@gmail.com",
      usdp: 3750,
      token: 12500,
      attendance: 5,
      prac: "5/0/5",
      comp: "1/0/1",
      referral: 0,
      recom: "UVWXYZ67890",
      signup: "2022-01-19 04:00:00",
      lastaccess: "2022-01-20 02:00:00",
    },
    {
      number: 13,
      nickname: "Alexander Martinez",
      id: "alexandermartinez@gmail.com",
      usdp: 1875,
      token: 6250,
      attendance: 3,
      prac: "3/0/3",
      comp: "0/0/0",
      referral: 0,
      recom: "ABCDE12345",
      signup: "2022-01-21 06:00:00",
      lastaccess: "2022-01-22 04:00:00",
    },
    {
      number: 14,
      nickname: "Isabella Taylor",
      id: "isabellataylor@gmail.com",
      usdp: 938,
      token: 3125,
      attendance: 2,
      prac: "2/0/2",
      comp: "0/0/0",
      referral: 0,
      recom: "FGHIJ67890",
      signup: "2022-01-23 08:00:00",
      lastaccess: "2022-01-24 06:00:00",
    },
    {
      number: 15,
      nickname: "Mason Thomas",
      id: "masonthomas@gmail.com",
      usdp: 469,
      token: 1562,
      attendance: 1,
      prac: "1/0/1",
      comp: "0/0/0",
      referral: 0,
      recom: "KLMNO12345",
      signup: "2022-01-25 10:00:00",
      lastaccess: "2022-01-26 08:00:00",
    },
    {
      number: 16,
      nickname: "Emma Hernandez",
      id: "emmahernandez@gmail.com",
      usdp: 234,
      token: 781,
      attendance: 0,
      prac: "0/0/0",
      comp: "0/0/0",
      referral: 0,
      recom: "PQRST67890",
      signup: "2022-01-27 12:00:00",
      lastaccess: "2022-01-28 10:00:00",
    },
    {
      number: 17,
      nickname: "William Moore",
      id: "williammoore@gmail.com",
      usdp: 117,
      token: 390,
      attendance: 0,
      prac: "0/0/0",
      comp: "0/0/0",
      referral: 0,
      recom: "UVWXYZ12345",
      signup: "2022-01-29 14:00:00",
      lastaccess: "2022-01-30 12:00:00",
    },
    {
      number: 18,
      nickname: "Ava Clark",
      id: "avaclark@gmail.com",
      usdp: 58,
      token: 195,
      attendance: 0,
      prac: "0/0/0",
      comp: "0/0/0",
      referral: 0,
      recom: "ABCDE67890",
      signup: "2022-01-31 16:00:00",
      lastaccess: "2022-02-01 14:00:00",
    },
    {
      number: 19,
      nickname: "Liam Rodriguez",
      id: "liamrodriguez@gmail.com",
      usdp: 29,
      token: 97,
      attendance: 0,
      prac: "0/0/0",
      comp: "0/0/0",
      referral: 0,
      recom: "FGHIJ12345",
      signup: "2022-02-02 18:00:00",
      lastaccess: "2022-02-03 16:00:00",
    },
    {
      number: 20,
      nickname: "Charlotte Lewis",
      id: "charlottelewis@gmail.com",
      usdp: 14,
      token: 48,
      attendance: 0,
      prac: "0/0/0",
      comp: "0/0/0",
      referral: 0,
      recom: "KLMNO67890",
      signup: "2022-02-04 20:00:00",
      lastaccess: "2022-02-05 18:00:00",
    },
  ];

  const [data, setData] = useState<user[]>(initData);

  // useEffect(() => {
  //   async function getUsersData() {
  //     const users = await getUsers();
  //     console.log(users);
  //     if (users.status === 200) {
  //       setData(users.data);
  //       return;
  //     }
  //   }
  //   getUsersData();
  // }, []);

  document.title = "Dashboards | Users";

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
            isCustomPageSize={true}
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
