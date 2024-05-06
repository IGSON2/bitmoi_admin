import React, { useEffect, useMemo } from "react";
import { Container } from "reactstrap";
import Breadcrumb from "Components/Common/Breadcrumb";
import TableContainer from "Components/Common/TableContainer";
import { column } from "Components/Common/type";
import { DashboardScore } from "../types";
import { MODE_PRAC } from "Components/Common/const";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getScores } from "slices/dashboard-scores/thunk";
import { createSelector } from "reselect";

const DashboardScoresPrac = () => {
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
      {
        header: "주문 생성 시간",
        accessorKey: "submittime",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "진입 후 최대 손익률",
        accessorKey: "maxminroe",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "종료 이후 정리 시간",
        accessorKey: "afterexittime",
        enableColumnFilter: false,
        enableSorting: true,
      },

      {
        header: "비정상 종료 정산 시각",
        accessorKey: "settledat",
        enableColumnFilter: false,
        enableSorting: true,
      },
    ],
    []
  );

  interface selectState {
    dashboardScore: {
      // 가져오려는 오브젝트의 이름이 리듀서에서 설정한 이름과 같아야 함
      dashboardScores: DashboardScore[];
      loading: boolean;
    };
  }

  const selectProperties = createSelector(
    (state: selectState) => state.dashboardScore,
    (dashboard) => ({
      dashboardScores: dashboard.dashboardScores,
      loading: dashboard.loading,
    })
  );

  const dispatch = useDispatch<any>();
  const { dashboardScores, loading } = useSelector(selectProperties);

  useEffect(() => {
    dispatch(getScores(MODE_PRAC));
  }, []);

  document.title = "Dashboards | Invest";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="회원관리" breadcrumbItem="Invest" />
          <TableContainer
            columns={columns}
            data={dashboardScores || []}
            isGlobalFilter={true}
            isPagination={true}
            SearchPlaceholder={`${
              dashboardScores ? dashboardScores.length : 0
            } records...`}
            pagination="pagination"
            paginationWrapper="dataTables_paginate paging_simple_numbers"
            tableClass="dt-responsive nowrap w-100 dataTable no-footer dtr-inline table-hover"
            theadClass="table-light"
            isCustomPageSize={true}
            defaultSortingID="submittime"
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardScoresPrac;
