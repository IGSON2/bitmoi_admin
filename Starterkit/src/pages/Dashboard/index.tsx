import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "Components/Common/Breadcrumb";
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalHeader,
  Row,
} from "reactstrap";
import { column } from "Components/Common/type";
import TableContainer from "Components/Common/TableContainer";
import { DashboardUser, SetUsdpParam } from "./types";
import { useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { getUsers } from "slices/dashboard/thunk";
import Switch from "react-switch";
import { setUsdpInfo } from "helpers/backend_helper";
import * as Yup from "yup";
import { useFormik } from "formik";

const PosSymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2,
      }}
    >
      <i className="fas fa-plus"></i>
    </div>
  );
};

const NegSymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2,
      }}
    >
      <i className="fas fa-minus"></i>
    </div>
  );
};

const Dashboard = () => {
  const [modal_set_balance, setmodal_set_balance] = useState(false);
  const [switch1, setswitch1] = useState(true);
  const [userId, setUserId] = useState("");

  function tog_set_balance() {
    setmodal_set_balance(!modal_set_balance);
    removeBodyCss();
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

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
        header: "",
        accessorKey: "adjust",
        enableColumnFilter: false,
        enableSorting: false,
        cell: (cellProps: any) => {
          return (
            <Button
              type="button"
              className="btn btn-soft-secondary btn-rounded"
              onClick={() => {
                setUserId(cellProps.row.original.id);
                setmodal_set_balance(true);
              }}
              data-toggle="modal"
            >
              <i className="far fa-edit"></i>
            </Button>
          );
        },
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
        accessorKey: "last_access",
        enableColumnFilter: false,
        enableSorting: true,
      },
    ],
    []
  );

  interface selectState {
    dashboardUser: {
      // 가져오려는 오브젝트의 이름이 리듀서에서 설정한 이름과 같아야 함
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

  // Form validation
  const validation: any = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      user_id: "",
      title: "",
      amount: 0,
    },

    validationSchema: Yup.object().shape({
      title: Yup.string().required("잔고를 변경하는 사유를 입력해 주세요."),
      amount: Yup.number()
        .min(1, "0보다 큰 값을 입력해 주세요.")
        .required("지급 / 삭감할 금액을 입력해 주세요."),
    }),
    onSubmit: async (values: any, { resetForm }) => {
      values.user_id = userId;
      if (!switch1) {
        values.amount = -values.amount;
      }
      await setUsdpInfo(values as SetUsdpParam);
      resetForm();
      tog_set_balance();
      dispatch(getUsers());
    },
  });

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
              dashboardUsers ? dashboardUsers.length : 0
            } records...`}
            pagination="pagination"
            paginationWrapper="dataTables_paginate paging_simple_numbers"
            tableClass="dt-responsive nowrap w-100 dataTable no-footer dtr-inline table-hover"
            theadClass="table-light"
            isCustomPageSize={true}
            defaultSortingID="last_access"
          />
        </Container>

        <Modal
          isOpen={modal_set_balance}
          toggle={() => {
            tog_set_balance();
          }}
          centered
        >
          <ModalHeader
            toggle={() => {
              tog_set_balance();
            }}
          >
            <div className="modal-title mt-0 h5" id="myModalLabel">
              유저의 USDP를 조정합니다.
            </div>
          </ModalHeader>
          <div className="modal-body">
            <Form onSubmit={validation.handleSubmit}>
              <Row className="mb-4">
                <Label
                  htmlFor="input_title"
                  className="col-sm-2 col-form-label"
                >
                  Title
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="title"
                    autoComplete="off"
                    placeholder="사유를 입력하세요."
                    value={validation.values.title || ""}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched.title && validation.errors.title
                        ? true
                        : false
                    }
                  />
                </Col>
                {validation.touched.title && validation.errors.title ? (
                  <FormFeedback type="invalid">
                    {validation.errors.title}
                  </FormFeedback>
                ) : null}
              </Row>
              <Row className="mb-3">
                <Switch
                  uncheckedIcon={<NegSymbol />}
                  checkedIcon={<PosSymbol />}
                  className="col-sm-2"
                  onColor="#38a4f8"
                  offColor="#ec4561"
                  onChange={() => setswitch1(!switch1)}
                  checked={switch1}
                />
                <Col sm={10}>
                  <Input
                    type="number"
                    name="amount"
                    autoComplete="off"
                    placeholder="금액을 입력하세요."
                    value={validation.values.amount || ""}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched.amount && validation.errors.amount
                        ? true
                        : false
                    }
                  />
                </Col>
              </Row>
              {validation.touched.amount && validation.errors.amount ? (
                <FormFeedback type="invalid">
                  {validation.errors.amount}
                </FormFeedback>
              ) : null}
              <div className="modal-footer">
                <Button
                  type="reset"
                  color="secondary"
                  onClick={() => tog_set_balance()}
                >
                  닫기
                </Button>
                <Button type="submit" color="primary">
                  적용
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
