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
  CFormGroup,
  CInput,
  CButtonGroup,
} from "@coreui/react";

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

const timetableallList2 = [
  {
    field: "name",
    headerName: "회원",
    flex: 5,
    headerAlign: "center",
  },
  {
    field: "team",
    headerName: "소속",
    flex: 4,
    headerAlign: "center",
  },
  {
    field: "godate",
    headerName: "출근",
    headerAlign: "center",
    editable: true,
    flex: 3,
  },
  {
    field: "closedate",
    headerName: "퇴근",
    headerAlign: "center",
    editable: true,
    flex: 3,
  },
];

const timetableallList = [
  {
    id: 1,
    name: "홍길동",
    team: "개발팀",
    position: "과장",
    godate: "09:35",
    closedate: "18:12",
    total: "9시간 30분",
  },
  {
    id: 2,
    name: "박길동",
    team: "개발팀",
    position: "팀장",
    godate: "09:26",
    closedate: "18:47",
    total: "9시간 00분",
  },
  {
    id: 3,
    name: "김길동",
    team: "마케팅팀",
    position: "사원",
    godate: "09:27",
    closedate: "18:31",
    total: "9시간 50분",
  },
  {
    id: 4,
    name: "오길동",
    team: "개발팀",
    position: "사원",
    godate: "09:37",
    closedate: "18:44",
    total: "9시간 22분",
  },
  {
    id: 5,
    name: "이길동",
    team: "마케팅팀",
    position: "대리",
    godate: "09:22",
    closedate: "18:39",
    total: "8시간 30분",
  },
  {
    id: 6,
    name: "왕길동",
    team: "개발팀",
    position: "대리",
    godate: "09:29",
    closedate: "18:38",
    total: "9시간 10분",
  },
  {
    id: 7,
    name: "임길동",
    team: "마케팅팀",
    position: "사원",
    godate: "09:31",
    closedate: "18:42",
    total: "7시간 30분",
  },
  {
    id: 8,
    name: "강길동",
    team: "디자인팀",
    position: "팀장",
    godate: "09:50",
    closedate: "18:10",
    total: "3시간 30분",
  },
  {
    id: 9,
    name: "안길동",
    team: "디자인팀",
    position: "사원",
    godate: "09:46",
    closedate: "18:50",
    total: "9시간 22분",
  },
  {
    id: 10,
    name: "안길동",
    team: "디자인팀",
    position: "사원",
    godate: "09:46",
    closedate: "18:50",
    total: "9시간 10분",
  },
  {
    id: 11,
    name: "안길동",
    team: "디자인팀",
    position: "사원",
    godate: "09:46",
    closedate: "18:50",
    total: "9시간 30분",
  },
  {
    id: 12,
    name: "이도현",
    team: "디자인팀",
    position: "사원",
    godate: "09:46",
    closedate: "18:50",
    total: "9시간 30분",
  },
  {
    id: 13,
    name: "박서준",
    team: "디자인팀",
    position: "사원",
    godate: "09:46",
    closedate: "18:50",
    total: "9시간 00분",
  },
  {
    id: 14,
    name: "유승호",
    team: "디자인팀",
    position: "대리",
    godate: "09:46",
    closedate: "18:50",
    total: "8시간 33분",
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

class MembersTimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selectedItem: null,
      startDate: new Date(),
      listType: 0,
      sortType: 0,
      timetableallList: timetableallList,
    };
  }

  rowClicked = (item) => {
    this.setState({
      selectedItem: item,
    });
  };

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  rowClicked = (item) => {
    document.location.href = "#/membertimelist";
  };
  // dateSortList = () => {   //일반 테이블 정렬
  //   let list = JSON.parse(JSON.stringify(timetableallList));
  //   var result;

  //   result = list.sort(function (a, b) {
  //     let x = a.godate.toLowerCase();
  //     let y = b.godate.toLowerCase();

  //     if (x < y) {
  //       return 1;
  //     }
  //     if (x > y) {
  //       return -1;
  //     }
  //     return 0;
  //   });

  //   console.log(result);
  //   return result;
  // };

  dateSortList = (array) => {
    var result;

    var key;

    var test = 1;

    if (this.state.sortType == 0) {
      key = "godate";
    } else if (this.state.sortType == 1) {
      key = "closedate";
      test = -1;
    } else if (this.state.sortType == 2) {
      key = "total";
      test = -2;
    }

    result = array.sort(function (a, b) {
      let x = a[key].toLowerCase();
      let y = b[key].toLowerCase();

      if (x < y) {
        return -1 * test;
      }
      if (x > y) {
        return 1 * test;
      }
      return 0;
    });
    // if(this.state.sortType==1) {
    //    result = result.sort().reverse();
    // }       //방법1. 한번더 정렬을 역순으로 돌림

    // 방법2. result를 다 넣어주고 역순 정렬이 필요한 곳에는 -1과 1을 바꿔줌 / 방법3. 함수를 넣어서 곱하기 해줌

    console.log(result);

    return result;
  };

  render() {
    return (
      <>
        <CRow className="justify-content-center">
          <CCol md="12" lg="12" sm="12" xl="12">
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
                    <div>회사 구성원들의 공간입니다.</div>
                    <div style={{ fontSize: "26px" }}>
                      전체 <strong>출퇴근 기록 내역</strong>
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
                  <CCol xs="4" style={{ marginBottom: "20px" }}>
                    <DatePicker
                      customStyles={{ dateInput: { borderWidth: 0 } }}
                      locale="ko" // 달력 한글화
                      selected={new Date(this.state.startDate)} // 날짜 state
                      onChange={(date) => this.setStartDate(date)} // 날짜 설정 콜백 함수
                      customInput={<ExampleCustomInput />}
                      //minDate={new Date()} // 과거 날짜 disable
                      dateFormat="yyyy년 M월 d일 (eee)"
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
                  <CCol xs="4" className="text-right">
                    <CButtonGroup
                      style={{
                        backgroundColor: "#2BB2AC",
                        padding: "2px",
                        marginTop: "8px",
                        borderRadius: "30px",
                      }}
                    >
                      <CButton
                        style={{ borderRadius: "30px" }}
                        className={
                          this.state.sortType == 0
                            ? "btn-outline-info"
                            : "btn-info"
                        }
                        onClick={() => this.setState({ sortType: 0 })}
                      >
                        늦은 순
                      </CButton>
                      <CButton
                        style={{ borderRadius: "30px" }}
                        className={
                          this.state.sortType == 1
                            ? "btn-outline-info"
                            : "btn-info"
                        }
                        onClick={() => this.setState({ sortType: 1 })}
                      >
                        빠른 순
                      </CButton>
                      <CButton
                        style={{ borderRadius: "30px" }}
                        className={
                          this.state.sortType == 2
                            ? "btn-outline-info"
                            : "btn-info"
                        }
                        onClick={() => this.setState({ sortType: 2 })}
                      >
                        근무시간 순
                      </CButton>
                    </CButtonGroup>
                  </CCol>
                  <CCol xs="4" className="text-right">
                    <CFormGroup
                      className="col-12 inline input-group float-right"
                      sm="7"
                      xl="7"
                      xs="6"
                      lg="7"
                      style={{ padding: "10px 0px 10px 0px", margin: 0 }}
                    >
                      <CInput
                        style={{ borderRadius: "40px" }}
                        placeholder="회원 또는 소속 검색"
                      />
                      <CButton
                        style={{
                          marginLeft: "6px",
                          borderRadius: "4px",
                          backgroundColor: "#FFB425",
                          border: "#FFB425",
                          borderRadius: "40px",
                        }}
                        color="info"
                        className="my-2 my-sm-0"
                        type="submit"
                      >
                        검색
                      </CButton>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow style={{ paddingTop: " 20px" }}>
                  {this.state.timetableallList.map((timeitem, timeindex) => (
                    <CCol xs="6">
                      <CRow
                        onClick={() => this.rowClicked()}
                        className="hover1"
                        style={{
                          margin: "0px 2px",
                          marginBottom: "10px",
                          padding: "12px 0px 12px 10px",
                          borderRadius: "8px",
                          background: "#fff",
                          cursor: "pointer",
                          boxShadow: "4px 8px 16px 2px #f0f0f0",
                        }}
                      >
                        <CCol
                          style={{
                            color: "#141414",
                            fontWeight: 400,
                            padding: "4px 10px",
                          }}
                        >
                          {timeitem.name}
                        </CCol>
                        <CCol
                          className="text-left"
                          style={{
                            fontSize: "16px",
                          }}
                        >
                          <span class="badge badge-light">
                            {timeitem.team}{" "}
                          </span>
                          <span style={{ fontSize: "12px", color: "#898989" }}>
                            {" "}
                            {timeitem.position}
                          </span>
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
                <CCol
                  className="justify-content-right text-right"
                  style={{ marginTop: "16px", right: 0 }}
                >
                  <Pagination />
                </CCol>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default MembersTimeList;

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
