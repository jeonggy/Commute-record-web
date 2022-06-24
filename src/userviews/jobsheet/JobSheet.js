import React, { Component } from "react";
import { makeStyles } from "@mui/styles";
import { DataGrid, useGridSlotComponentProps } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import {
  CBadge,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CButtonGroup,
} from "@coreui/react";
import JobSheetCalendar from "./JobSheetCalendar";

import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import DatePicker, { registerLocale } from "react-datepicker";
registerLocale("ko", ko);

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  ul: {
    "& .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
      color: "#fff",
      background: "#FFB425",
    },
  },
});

function CustomPagination() {
  const { state, apiRef } = useGridSlotComponentProps();
  const classes = useStyles();

  return (
    <Pagination
      className={classes.root}
      classes={{ ul: classes.ul }}
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const columns2 = [
  {
    field: "board_id",
    headerName: "제목",
    flex: 25,
    headerAlign: "center",
  },
  {
    field: "comment",
    headerName: "댓글",
    flex: 10,
    headerAlign: "center",
    renderCell: ({ value }) => <CBadge color="light">{value}</CBadge>,
  },
  {
    field: "boarddetail_count",
    headerName: "업무 수",
    flex: 10,
    headerAlign: "center",
    renderCell: ({ value }) => <CBadge color="info">{value}</CBadge>,
  },
  {
    field: "date",
    headerName: "작성일",
    flex: 15,
    headerAlign: "center",
  },
];

const rows2 = [
  {
    id: 1,
    board_id: "11.28(수)",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 2,
    board_id: "11.29(수)",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 3,
    board_id: "11.27(수)",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 4,
    board_id: "11.22(수)",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 5,
    board_id: "11.30(수)",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 6,
    board_id: "11.20(수)",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 7,
    board_id: "11.12(수)",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 8,
    board_id: "11.14(수)",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 9,
    board_id: "11.15(수)",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 10,
    board_id: "11.01(수)",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-21 17:30:00",
  },
];

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

class JobSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      rows2: rows2,
      selectedItem: null,
      startDate: new Date(),
      listType: 0,
      boardList: [
        {
          board_id: 1,
          user_id: 2,
          name: "YOOK",
          date: "2021-10-21 17:30:00",
          boarddetail_count: 2,
          comment_count: 2,
        },
        {
          board_id: 2,
          user_id: 2,
          name: "YOOK",
          date: "2021-10-21 17:30:00",
          boarddetail_count: 2,
          comment_count: 2,
        },
      ],
    };
  }

  rowClicked = (item) => {
    document.location.href = "#/jobsheetdetails";
  };

  listAddBtnClicked = () => {
    document.location.href = "#/jobsheetwrite";
  };

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  dateSortList = () => {
    let list = JSON.parse(JSON.stringify(rows2));
    var result;

    result = list.sort(function (a, b) {
      let x = a.board_id.toLowerCase();
      let y = b.board_id.toLowerCase();

      if (x < y) {
        return 1;
      }
      if (x > y) {
        return -1;
      }
      return 0;
    });

    console.log(result);
    return result;
  };

  render() {
    return (
      <>
        <CCol
          md="12"
          lg="12"
          sm="12"
          xl="12"
          className="justify-content-center"
        >
          <CCard
            style={{
              backgroundColor: "#ED776D",
              boxShadow: "2px 2px 16px 4px #CEC0C0",
            }}
          >
            <CCardBody>
              <CRow>
                <CCol
                  xs="5"
                  className="back-color-title-pink"
                  style={{ height: "88px" }}
                ></CCol>
                <CCol
                  className="list-title"
                  style={{ padding: "70px 0px 0px 40px", color: "#fff" }}
                >
                  <div>이용자의 업무 일지를 볼 수 있는 공간입니다.</div>
                  <div style={{ fontSize: "26px" }}>
                    내 <strong>업무일지</strong>
                  </div>
                  <CButton
                    style={{
                      padding: "8px 40px",
                      fontSize: "14px",
                      background: "#FFB425",
                      color: "#fff",
                      fontWeight: "600",
                      marginTop: "20px",
                      borderRadius: "50px",
                      boxShadow: "4px 4px 10px 1px #D86260",
                    }}
                    shape="square"
                    color="#318CFB"
                    onClick={() => this.listAddBtnClicked()}
                  >
                    작성하기
                  </CButton>
                </CCol>
                <CCol
                  xs="6"
                  className="text-right"
                  style={{ padding: 0, margin: 0, marginRight: "40px" }}
                >
                  <img
                    src={require("src/userviews/img/jobsheet.png").default}
                    style={{ height: "140px" }}
                  />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
          <CCard>
            <CCardBody>
              <CRow>
                <CCol xs="6" style={{ marginBottom: "20px" }}>
                  <DatePicker
                    customStyles={{ dateInput: { borderWidth: 0 } }}
                    locale="ko" // 달력 한글화
                    selected={new Date(this.state.startDate)} // 날짜 state
                    onChange={(date) => this.setStartDate(date)} // 날짜 설정 콜백 함수
                    customInput={<ExampleCustomInput />}
                    //minDate={new Date()} // 과거 날짜 disable
                    dateFormat="yyyy년 M월"
                    showMonthYearPicker
                    popperModifiers={{
                      // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
                      preventOverflow: { enabled: true },
                    }}
                    // popperPlacement="auto" // 화면 중앙에 팝업이 뜨도록
                    dayClassName={(date) =>
                      getDayName(createDate(date)) === "토"
                        ? "saturday"
                        : getDayName(createDate(date)) === "일"
                        ? "sunday"
                        : undefined
                    }
                  />
                </CCol>
                <CCol xs="6" className="text-right">
                  <CButtonGroup
                    style={{
                      backgroundColor: "#2BB2AC",
                      padding: "4px",
                      borderRadius: "30px",
                    }}
                  >
                    <CButton
                      style={{ borderRadius: "30px" }}
                      size="sm"
                      className={
                        this.state.listType == 0
                          ? "btn-outline-info"
                          : "btn-info"
                      }
                      onClick={() => this.setState({ listType: 0 })}
                    >
                      캘린더형
                    </CButton>
                    <CButton
                      style={{ borderRadius: "30px" }}
                      size="sm"
                      className={
                        this.state.listType == 1
                          ? "btn-outline-info"
                          : "btn-info"
                      }
                      onClick={() => this.setState({ listType: 1 })}
                    >
                      리스트형
                    </CButton>
                  </CButtonGroup>
                </CCol>
              </CRow>
              {this.state.listType == 0 && (
                <>
                  <JobSheetCalendar />
                </>
              )}
              {this.state.listType == 1 && (
                <>
                  {this.state.rows2.map((rowitem, rowindex) => (
                    <CRow>
                      <CCol xs="12" sm="12" lg="6" xl="6">
                        <CRow
                          onClick={() => this.rowClicked()}
                          className="hover1"
                          style={{
                            margin: 5,
                            marginBottom: "6px",
                            padding: "12px 0px 12px 10px",
                            borderRadius: "8px",
                            background: "#fff",
                            cursor: "pointer",
                            boxShadow: "4px 8px 16px 2px #f0f0f0",
                          }}
                        >
                          <CRow
                            style={{
                              color: "#141414",
                              fontWeight: "700",
                              padding: "4px 20px",
                            }}
                          >
                            {rowitem.board_id}
                          </CRow>
                          <CCol
                            className="text-left"
                            style={{
                              paddingTop: "2px",
                              marginRight: "4px",
                              fontSize: "16px",
                              marginLeft: "10px",
                            }}
                          >
                            <span class="badge badge-warning">
                              업무 {rowitem.boarddetail_count}
                            </span>
                            <span
                              class="badge badge-light"
                              style={{ marginLeft: "18px" }}
                            >
                              댓글 {rowitem.boarddetail_count}
                            </span>
                          </CCol>
                          <CCol
                            className="text-right"
                            style={{ color: "#989898", paddingTop: "2px" }}
                          >
                            {rowitem.date}
                          </CCol>
                        </CRow>
                      </CCol>
                      <CCol xs="12" sm="12" lg="6" xl="6">
                        <CRow
                          onClick={() => this.rowClicked()}
                          className="hover1"
                          style={{
                            margin: 5,
                            marginBottom: "6px",
                            padding: "12px 0px 12px 10px",
                            borderRadius: "8px",
                            background: "#fff",
                            cursor: "pointer",
                            boxShadow: "4px 8px 16px 2px #f0f0f0",
                          }}
                        >
                          <CRow
                            style={{
                              color: "#141414",
                              fontWeight: "700",
                              padding: "4px 20px",
                            }}
                          >
                            {rowitem.board_id}
                          </CRow>
                          <CCol
                            className="text-left"
                            style={{
                              paddingTop: "2px",
                              marginRight: "4px",
                              fontSize: "16px",
                              marginLeft: "10px",
                            }}
                          >
                            <span class="badge badge-warning">
                              업무 {rowitem.boarddetail_count}
                            </span>
                            <span
                              class="badge badge-light"
                              style={{ marginLeft: "18px" }}
                            >
                              댓글 {rowitem.boarddetail_count}
                            </span>
                          </CCol>
                          <CCol
                            className="text-right"
                            style={{ color: "#989898", paddingTop: "2px" }}
                          >
                            {rowitem.date}
                          </CCol>
                        </CRow>
                      </CCol>
                    </CRow>
                  ))}
                </>
              )}
              <CCol
                className="justify-content-right text-right"
                style={{ marginTop: "16px", right: 0 }}
              >
                <Pagination />
              </CCol>
            </CCardBody>
          </CCard>
        </CCol>
      </>
    );
  }
}

export default JobSheet;

const ExampleCustomInput = ({ value, onClick }) => (
  <CButton size="lg" onClick={onClick} className="btn-outline-info">
    {value}
  </CButton>
); // 월/일
const getDayName = (date) => {
  return date.toLocaleDateString("ko-KR", { weekday: "long" }).substr(0, 1);
}; // 날짜 비교시 년 월 일까지만 비교하게끔
const createDate = (date) => {
  return new Date(
    new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
  );
};
