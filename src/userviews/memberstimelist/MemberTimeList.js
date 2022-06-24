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
import TimeListCalendar from "../timelist/TimeListCalendar";

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
      background: "#666EF0",
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
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "date",
    headerName: "출근날",
    flex: 3,
  },
  {
    field: "godate",
    headerName: "출근",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "closedate",
    headerName: "퇴근",
    headerAlign: "center",
    flex: 1,
  },
];

const usertimetableList = {
  user_name: "홍길동",
  timetableList: [
    { id: 1, date: "02.01", godate: "09:30", closedate: "18:30", check: "0" },
    { id: 2, date: "02.18", godate: "09:30", closedate: "18:30", check: "0" },
    { id: 3, date: "02.17", godate: "09:30", closedate: "18:30", check: "0" },
    { id: 4, date: "02.16", godate: "09:30", closedate: "18:30", check: "0" },
    { id: 5, date: "02.05", godate: "09:30", closedate: "18:30", check: "0" },
    { id: 6, date: "02.12", godate: "09:30", closedate: "18:30", check: "0" },
    { id: 7, date: "02.08", godate: "09:30", closedate: "18:30", check: "0" },
    { id: 8, date: "02.10", godate: "09:30", closedate: "18:30", check: "0" },
    { id: 9, date: "02.09", godate: "09:30", closedate: "18:30", check: "0" },
    { id: 10, date: "02.08", godate: "09:30", closedate: "18:30", check: "0" },
  ],
};

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

class MemberTimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      startDate: new Date(),
      listType: 0,
      user_name: usertimetableList.user_name,
    };
  }

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };
  dateSortList = () => {
    let list = JSON.parse(JSON.stringify(usertimetableList.timetableList));
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
        <CCard
          style={{
            backgroundColor: "#666EF0",
            boxShadow: "2px 2px 16px 4px #BFC8E2",
          }}
        >
          <CCardBody>
            <CRow>
              <CCol style={{ padding: "30px 0px 10px 40px", color: "#fff" }}>
                <div>멤버의 출퇴근 기록을 볼 수 있는 공간입니다.</div>
                <div style={{ fontSize: "26px" }}>
                  <strong>{this.state.user_name}님의 출퇴근 기록 내역</strong>
                </div>
              </CCol>
              <CCol
                xs="5"
                className="text-right"
                style={{ marginRight: "80px" }}
              >
                <img
                  src={require("src/userviews/img/card.png").default}
                  style={{ height: "160px" }}
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
                  style={{}}
                />
              </CCol>
              <CCol xs="6" className="text-right">
                <CButtonGroup>
                  <CButton
                    size="sm"
                    className={
                      this.state.listType == 0 ? "btn-info" : "btn-outline-info"
                    }
                    onClick={() => this.setState({ listType: 0 })}
                  >
                    리스트형
                  </CButton>
                  <CButton
                    size="sm"
                    className={
                      this.state.listType == 1 ? "btn-info" : "btn-outline-info"
                    }
                    onClick={() => this.setState({ listType: 1 })}
                  >
                    캘린더형
                  </CButton>
                </CButtonGroup>
              </CCol>
            </CRow>
            {this.state.listType == 0 && (
              <>
                <div style={{ height: 640, width: "100%" }}>
                  <DataGrid
                    disableColumnMenu={true}
                    columns={timetableList2}
                    rows={this.dateSortList()}
                    disableSelectionOnClick
                    pagination={false}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    components={{
                      Pagination: CustomPagination,
                    }}
                    disableColumnFilter
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                    columns={timetableList2.map((column) => ({
                      ...column,
                      sortable: false,
                      filterable: false,
                      columnField: false,
                      hideSortIcons: false,
                      targetColumnField: false,
                    }))}
                  />
                </div>
              </>
            )}
            {this.state.listType == 1 && (
              <>
                <TimeListCalendar />
              </>
            )}
          </CCardBody>
        </CCard>
      </>
    );
  }
}

export default MemberTimeList;

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
