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

const columns2 = [
  {
    field: "board_id",
    headerName: "제목",
    flex: 25,
    headerAlign: "center",
  },
  {
    field: "team",
    headerName: "소속",
    flex: 15,
    headerAlign: "center",
  },
  {
    field: "boarddetail_count",
    headerName: "업무 수",
    flex: 10,
    headerAlign: "center",
    renderCell: ({ value }) => <CBadge color="info">{value}</CBadge>,
  },
  {
    field: "comment",
    headerName: "댓글",
    flex: 10,
    headerAlign: "center",
    renderCell: ({ value }) => <CBadge color="light">{value}</CBadge>,
  },
  {
    field: "date",
    headerName: "작성일",
    flex: 20,
    headerAlign: "center",
  },
];

const rows2 = [
  {
    id: 1,
    board_id: "김길동",
    team: "개발팀",
    position: "과장",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 2,
    board_id: "박길동",
    team: "디자인팀",
    position: "대리",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-31 17:30:00",
  },
  {
    id: 3,
    board_id: "강길동",
    team: "마케팅팀",
    position: "팀장",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-28 17:30:00",
  },
  {
    id: 4,
    board_id: "오길동",
    team: "마케팅팀",
    position: "사원",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-19 17:30:00",
  },
  {
    id: 5,
    board_id: "강길동",
    team: "경영팀",
    position: "사원",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-25 17:30:00",
  },
  {
    id: 6,
    board_id: "양길동",
    team: "디자인팀",
    position: "대리",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-24 17:30:00",
  },
  {
    id: 7,
    board_id: "고길동",
    team: "개발팀",
    position: "이사",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-26 17:30:00",
  },
  {
    id: 8,
    board_id: "구길동",
    team: "마케팅팀",
    position: "주임",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-11 17:30:00",
  },
  {
    id: 9,
    board_id: "송길동",
    team: "개발팀",
    position: "대리",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-29 17:30:00",
  },
  {
    id: 10,
    board_id: "송길동",
    team: "개발팀",
    position: "대리",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-29 17:30:00",
  },
  {
    id: 11,
    board_id: "송길동",
    team: "개발팀",
    position: "대리",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-29 17:30:00",
  },
  {
    id: 12,
    board_id: "송길동",
    team: "개발팀",
    position: "대리",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-29 17:30:00",
  },
  {
    id: 13,
    board_id: "송길동",
    team: "개발팀",
    position: "대리",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-29 17:30:00",
  },
  {
    id: 14,
    board_id: "송길동",
    team: "개발팀",
    position: "대리",
    boarddetail_count: 2,
    comment: "댓글",
    date: "2021-10-29 17:30:00",
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
      selectedItem: null,
      startDate: new Date(),
      rows2: rows2,
      listType: 0,
      sortType: 0,
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
    document.location.href = "#/memberjobsheetdetails";
  };

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  // dateSortList = () => {      //일반 테이블 정렬
  //   let list = JSON.parse(JSON.stringify(rows2));
  //   var result;

  //   result = list.sort(function (a, b) {
  //     let x = a.date.toLowerCase();
  //     let y = b.date.toLowerCase();

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
                backgroundColor: "#ED776D",
                boxShadow: "2px 2px 16px 4px #CEC0C0",
              }}
            >
              <CCardBody>
                <CRow>
                  <CCol
                    xs="5"
                    className="back-color-title-pink"
                    style={{ height: "90px" }}
                  ></CCol>
                  <CCol
                    className="list-title"
                    style={{ padding: "20px 0px 10px 40px", color: "#fff" }}
                  >
                    <div>전체 구성원들의 공간입니다.</div>
                    <div style={{ fontSize: "26px" }}>
                      전체 <strong>업무일지</strong>
                    </div>
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
                  {this.state.rows2.map((rowitem, rowindex) => (
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
                            paddingLeft: "30px",
                            paddingTop: "2px",
                            fontSize: "16px",
                          }}
                        >
                          <span class="badge badge-light">{rowitem.team}</span>
                          <span style={{ fontSize: "12px", color: "#898989" }}>
                            {" "}
                            {rowitem.position}
                          </span>
                        </CCol>
                        <CCol
                          className="text-left"
                          style={{
                            paddingTop: "2px",
                            fontSize: "16px",
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
