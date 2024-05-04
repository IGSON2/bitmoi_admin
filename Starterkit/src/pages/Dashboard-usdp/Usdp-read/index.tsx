import React, { useEffect, useMemo } from "react";
import { Container } from "reactstrap";
import Breadcrumb from "Components/Common/Breadcrumb";
import { column } from "Components/Common/type";
import TableContainer from "Components/Common/TableContainer";
import { DashboardUsdpInfo } from "../types";
import { useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { getUsdpInfo } from "slices/dashboard-usdp/thunk";

const DashboardUsdpRead = () => {
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
        accessorKey: "amount",
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
        header: "방식",
        accessorKey: "method",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "지급자",
        accessorKey: "giver",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "일자",
        accessorKey: "created_at",
        enableColumnFilter: false,
        enableSorting: true,
      },
    ],
    []
  );

  interface selectState {
    // 가져오려는 오브젝트의 이름이 Root 리듀서에서 설정한 이름과 같아야 함
    dashboardUsdpInfo: {
      dashboardUsdpInfos: DashboardUsdpInfo[];
      loading: boolean;
    };
  }

  const selectProperties = createSelector(
    (state: selectState) => state.dashboardUsdpInfo,
    (dashboard) => ({
      DashboardUsdpInfos: dashboard.dashboardUsdpInfos,
      loading: dashboard.loading,
    })
  );

  const dispatch = useDispatch<any>();
  const { DashboardUsdpInfos, loading } = useSelector(selectProperties);

  useEffect(() => {
    dispatch(getUsdpInfo());
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Dashboards" breadcrumbItem="USDP" />
          <TableContainer
            columns={columns}
            data={DashboardUsdpInfos || []}
            isGlobalFilter={true}
            isPagination={true}
            SearchPlaceholder={`${
              DashboardUsdpInfos ? DashboardUsdpInfos.length : 0
            } records...`}
            pagination="pagination"
            paginationWrapper="dataTables_paginate paging_simple_numbers"
            tableClass="dt-responsive nowrap w-100 dataTable no-footer dtr-inline table-hover"
            theadClass="table-light"
            isCustomPageSize={true}
            defaultSortingID="created_at"
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardUsdpRead;
