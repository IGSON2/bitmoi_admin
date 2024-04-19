import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "Components/Common/Breadcrumb";
import { Container } from "reactstrap";
import { column } from "Components/Common/type";
import TableContainer from "Components/Common/TableContainer";
import { DashboardUser } from "./types";
import { useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { getUsers } from "slices/dashboards-user/thunk";

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

  const [data, setData] = useState<any>([]);

  interface selectState {
    dashboardUser: {
      dashboardUsers: DashboardUser[];
      loading: boolean;
    };
  }

  const selectProperties = createSelector(
    (state: selectState) => state.dashboardUser,
    (dashboard) => ({
      dashboardUsers: dashboard.dashboardUsers,
      loading: dashboard.loading,
    })
  );

  const dispatch = useDispatch<any>();
  const { dashboardUsers, loading } = useSelector(selectProperties);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  document.title = "Dashboards | Users";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="회원관리" breadcrumbItem="Users" />
          <TableContainer
            columns={columns}
            data={dashboardUsers || []}
            isGlobalFilter={true}
            isPagination={true}
            SearchPlaceholder={`${
              dashboardUsers.length ? dashboardUsers.length : 0
            } records...`}
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
