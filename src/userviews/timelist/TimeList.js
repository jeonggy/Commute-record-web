import React, { Component } from "react";
import { makeStyles } from "@mui/styles";
import { DataGrid, useGridSlotComponentProps } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CButtonGroup,
} from "@coreui/react";
import TimeListCalendar from "./TimeListCalendar";

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

const timetableList2 = [
  {
    field: "date",
    headerName: "출근날",
    flex: 3,
    headerAlign: "center",
  },
  {
    field: "godate",
    headerName: "출근",
    headerAlign: "center",
    flex: 2,
  },
  {
    field: "closedate",
    headerName: "퇴근",
    headerAlign: "center",
    flex: 2,
  },
];

const timetableList = [
  {
    id: 1,
    date: "02.29(금)",
    godate: "09:30",
    closedate: "18:30",
    check: "0",
    total: "9시간 30분",
  },
  {
    id: 2,
    date: "02.28(목)",
    godate: "09:30",
    closedate: "18:30",
    check: "0",
    total: "9시간 30분",
  },
  {
    id: 3,
    date: "02.07(수)",
    godate: "09:30",
    closedate: "18:30",
    check: "0",
    total: "9시간 30분",
  },
  {
    id: 4,
    date: "02.16(화)",
    godate: "09:30",
    closedate: "18:30",
    check: "0",
    total: "9시간 30분",
  },
  {
    id: 5,
    date: "02.12(월)",
    godate: "09:30",
    closedate: "18:30",
    check: "0",
    total: "9시간 30분",
  },
  {
    id: 6,
    date: "02.22(금)",
    godate: "09:30",
    closedate: "18:30",
    check: "0",
    total: "9시간 30분",
  },
  {
    id: 7,
    date: "02.27(목)",
    godate: "09:30",
    closedate: "18:30",
    check: "0",
    total: "9시간 30분",
  },
  {
    id: 8,
    date: "02.01(수)",
    godate: "09:30",
    closedate: "18:30",
    check: "0",
    total: "9시간 30분",
  },
  {
    id: 9,
    date: "02.09(화)",
    godate: "09:30",
    closedate: "18:30",
    check: "0",
    total: "9시간 30분",
  },
  {
    id: 10,
    date: "02.03(월)",
    godate: "09:30",
    closedate: "18:30",
    check: "0",
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

class TimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      startDate: new Date(),
      listType: 0,
      timetableList: timetableList,
    };
  }

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  dateSortList = () => {
    let list = JSON.parse(JSON.stringify(timetableList));
    var result;

    result = list.sort(function (a, b) {
      let x = a.date.toLowerCase();
      let y = b.date.toLowerCase();

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
              backgroundColor: "#666EF0",
              boxShadow: "2px 2px 16px 4px #BFC8E2",
            }}
          >
            <CCardBody>
              <CRow>
                <CCol xs="5" className="back-color-title"></CCol>
                <CCol
                  className="list-title"
                  style={{ padding: "20px 0px 10px 40px", color: "#fff" }}
                >
                  <div>이용자의 출퇴근 기록을 볼 수 있는 공간입니다.</div>
                  <div style={{ fontSize: "26px" }}>
                    내 <strong>출퇴근 기록 내역</strong>
                  </div>
                </CCol>
                <CCol
                  xs="6"
                  className="text-right"
                  style={{ padding: 0, margin: 0, marginRight: "40px" }}
                >
                  <img
                    src={require("src/userviews/img/list.png").default}
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
                  <TimeListCalendar />
                </>
              )}
              {this.state.listType == 1 && (
                <>
                  <CRow style={{ paddingTop: " 10px" }}>
                    {this.state.timetableList.map((timeitem, timeindex) => (
                      <CCol xs="6">
                        <CRow
                          className="hover1"
                          style={{
                            margin: "0px 2px",
                            marginBottom: "10px",
                            padding: "14px 0px 14px 10px",
                            borderRadius: "8px",
                            background: "#fff",
                            cursor: "pointer",
                            boxShadow: "4px 8px 16px 2px #f0f0f0",
                          }}
                        >
                          <CCol
                            CCol={{
                              color: "#141414",
                              fontWeight: 400,
                              padding: "4px 20px",
                            }}
                          >
                            {timeitem.date}
                          </CCol>
                          <CCol>
                            <CRow>
                              <CCol className="text-right">
                                <span class="badge badge-info">출근</span>
                              </CCol>
                              <CCol
                                style={{
                                  color: "#141414",
                                  margin: 0,
                                  padding: 0,
                                }}
                              >
                                <h6
                                  style={{
                                    padding: 0,
                                    margin: 0,
                                    fontWeight: 600,
                                    paddingTop: "4px",
                                  }}
                                >
                                  {timeitem.godate}
                                </h6>
                              </CCol>
                            </CRow>
                          </CCol>
                          <CCol>
                            <CRow>
                              <CCol className="text-right">
                                <span class="badge badge-warning">퇴근</span>
                              </CCol>
                              <CCol
                                style={{
                                  color: "#141414",
                                  margin: 0,
                                  padding: 0,
                                }}
                              >
                                <h6
                                  style={{
                                    padding: 0,
                                    margin: 0,
                                    fontWeight: 600,
                                    paddingTop: "4px",
                                  }}
                                >
                                  {timeitem.closedate}
                                </h6>
                              </CCol>
                            </CRow>
                          </CCol>
                          <CCol>
                            <CCol className="text-right">
                              <span class="badge badge-light">
                                총 근무시간
                                <br />
                                {timeitem.total}
                              </span>
                            </CCol>
                          </CCol>
                        </CRow>
                      </CCol>
                    ))}
                  </CRow>
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

export default TimeList;

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
