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
  CModal,
  CModalBody,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

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

const timetableallList = [
  {
    id: 1,
    date: "02.08(월)",
    godate: "09:31",
    closedate: "18:30",
    total: "9시간 32분",
  },
  {
    id: 2,
    date: "02.09(화)",
    godate: "09:32",
    closedate: "18:30",
    total: "9시간 22분",
  },
  {
    id: 3,
    date: "02.20(화)",
    godate: "09:26",
    closedate: "18:30",
    total: "9시간 45분",
  },
  {
    id: 4,
    date: "02.12(금)",
    godate: "09:24",
    closedate: "18:30",
    total: "9시간 32분",
  },
  {
    id: 5,
    date: "02.22(수)",
    godate: "09:31",
    closedate: "18:30",
    total: "9시간 02분",
  },
  {
    id: 6,
    date: "02.24(금)",
    godate: "09:29",
    closedate: "18:30",
    total: "9시간 12분",
  },
];

const columns2 = [
  {
    field: "board_id",
    headerName: "제목",
    flex: 3,
    headerAlign: "center",
  },
  {
    field: "comment",
    headerName: "댓글",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ value }) => <CBadge color="light">{value}</CBadge>,
  },
  {
    field: "boarddetail_count",
    headerName: "업무 수",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ value }) => <CBadge color="info">{value}</CBadge>,
  },
];

const rows2 = [
  {
    id: 1,
    board_id: "03.14(월)",
    comment: "댓글",
    boarddetail_count: "2",
    date: "2021-11-02 17:30:00",
  },
  {
    id: 2,
    board_id: "03.11(금)",
    comment: "댓글",
    boarddetail_count: "3",
    date: "2021-11-02 17:30:00",
  },
  {
    id: 3,
    board_id: "03.10(목)",
    comment: "댓글",
    boarddetail_count: "1",
    date: "2021-11-02 17:30:00",
  },
  {
    id: 4,
    board_id: "03.09(수)",
    comment: "댓글",
    boarddetail_count: "1",
    date: "2021-11-02 17:30:00",
  },
  {
    id: 5,
    board_id: "03.08(화)",
    comment: "댓글",
    boarddetail_count: "3",
    date: "2021-11-02 17:30:00",
  },
  {
    id: 6,
    board_id: "03.07(월)",
    comment: "댓글",
    boarddetail_count: "4",
    date: "2021-11-02 17:30:00",
  },
  {
    id: 7,
    board_id: "03.04(금)",
    comment: "댓글",
    boarddetail_count: "3",
    date: "2021-11-02 17:30:00",
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      timetableallList: timetableallList,
      rows2: rows2,
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
      timetableList: [
        {
          id: 1,
          date: "2021-10-30",
          godate: "2021-10-30 09:30:00",
          closedate: "2021-10-30 18:30:00",
          check: 1,
        },
        {
          id: 2,
          date: "2021-10-29",
          godate: "2021-10-30 09:30:00",
          closedate: "2021-10-30 18:30:00",
          check: 1,
        },
      ],
      todoList: [
        {
          todo_id: 1,
          user_id: 1,
          title: "출퇴근 앱 기획",
          due_date: "2021-10-21 19:00:00",
          date: "2021-11-02 17:30:00",
        },
        {
          todo_id: 2,
          user_id: 2,
          title: "출퇴근 앱 기획",
          due_date: "2021-10-21 19:00:00",
          date: "2021-11-02 17:30:00",
        },
        {
          todo_id: 3,
          user_id: 3,
          title: "출퇴근 앱 기획",
          due_date: "2021-10-21 17:30:00",
          date: "2021-11-02 17:30:00",
        },
        {
          todo_id: 4,
          user_id: 4,
          title: "출퇴근 앱 기획",
          due_date: "2021-10-21 17:30:00",
          date: "2021-11-02 17:30:00",
        },
      ],
    };
  }

  test = () => {
    var stationData2;
  };

  gotoworkAddBtnClicked = () => {
    this.setState({
      gotoworkAddModalOpen: true,
    });
  };
  leaveworkAddBtnClicked = () => {
    this.setState({
      leaveworkAddModalOpen: true,
    });
  };
  jobsheetAddBtnClicked = () => {
    document.location.href = "#/jobsheet";
  };
  jobsheetpageBtnClicked = () => {
    document.location.href = "#/jobsheetdetails";
  };
  timelistAddBtnClicked = () => {
    document.location.href = "#/timelist";
  };
  todaylistAddBtnClicked = () => {
    document.location.href = "#/todaylist";
  };

  todaylistcheckAddBtnClicked = () => {
    document.location.href = "#/todaylist";
  };

  dateSortList = () => {
    let list = JSON.parse(JSON.stringify(timetableallList));
    var result;
    // var key = 'date';

    result = list.sort(function (a, b) {
      let x = a.date.toLowerCase();
      let y = b.date.toLowerCase();
      // let x = a[key].toLowerCase();
      // let y = b[key].toLowerCase(); //key -> 함수를 쓰는 이유는 여러 개의 조건(if)이 있을 경우 씀
      // let x = a['date'].toLowerCase();
      // let y = b['date'].toLowerCase();

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
        <CRow className="justify-content-center">
          <CCol md="12" lg="12" sm="12" xl="12" xxl="6">
            <CCard>
              <CCardBody>
                <CRow style={{ paddingBottom: "26px" }}>
                  <CCol
                    xs="6"
                    style={{ padding: "16px 0px 0px 20px", color: "#141414" }}
                  >
                    <div
                      className="text-muted"
                      style={{ marginBottom: "16px", fontSize: "16px" }}
                    >
                      000님, 좋은 하루 되세요!
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        lineHeight: "30px",
                        paddingBottom: "10px",
                      }}
                    >
                      오늘 날짜
                      <br />
                      <span style={{ fontSize: "28px", fontWeight: 700 }}>
                        2021년 08월 23일
                      </span>
                    </div>
                    <div style={{ fontSize: "16px", lineHeight: "30px" }}>
                      현재 시각
                      <br />
                      <span style={{ fontSize: "28px", fontWeight: 700 }}>
                        2021년 08월 23일
                      </span>
                    </div>
                  </CCol>

                  <CCol className="back-color"></CCol>
                  <CRow className="img-home" style={{ padding: 0, margin: 0 }}>
                    <img
                      src={require("src/userviews/img/members.png").default}
                      style={{ maxHeight: "220px", maxWidth: "100%" }}
                    />
                  </CRow>
                </CRow>
                <CRow>
                  <CCol
                    style={{
                      margin: "20px 10px 2px 10px",
                      padding: "10px 0px 0px 0px",
                      borderRadius: "8px",
                      background: "#F5F8FF",
                      fontSize: "14px",
                      color: "#14476e",
                      textAlign: "center",
                    }}
                  >
                    <CIcon
                      content={freeSet["cilAlarm"]}
                      style={{ marginRight: "6px", textAlign: "center" }}
                    />
                    출근시간
                    <br />
                    <span
                      style={{
                        color: "#14476e",
                        fontSize: "22px",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      08:30:30
                    </span>
                    <CCol>
                      <CCard
                        style={{
                          backgroundColor: "#666EF0",
                          boxShadow: "2px 2px 14px 2px #BFC8E2",
                          padding: 0,
                          marginTop: "16px",
                        }}
                      >
                        <CCardBody
                          style={{ padding: "10px 20px 10px 20px", margin: 0 }}
                        >
                          <CButton
                            block
                            style={{
                              padding: "2px 0px",
                              fontSize: "22px",
                              color: "#fff",
                              fontWeight: "700",
                              textAlign: "left",
                            }}
                            shape="square"
                            size="lg"
                            onClick={() => this.gotoworkAddBtnClicked()}
                          >
                            <span style={{ lineHeight: "70px" }}>출근하기</span>
                            <img
                              src={
                                require("src/userviews/img/paper.png").default
                              }
                              style={{
                                height: "56px",
                                float: "right",
                                marginTop: "6px",
                              }}
                            />
                          </CButton>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CCol>
                  <CCol
                    style={{
                      margin: "20px 10px 2px 10px",
                      padding: "10px 0px 6px 0px",
                      borderRadius: "8px",
                      background: "#FFF6E9",
                      fontSize: "14px",
                      color: "#cc820a",
                      textAlign: "center",
                    }}
                  >
                    <CIcon
                      content={freeSet["cilAlarm"]}
                      style={{ marginRight: "6px", textAlign: "center" }}
                    />
                    퇴근시간
                    <br />
                    <span
                      style={{
                        color: "#64491d",
                        fontSize: "22px",
                        fontWeight: "700",
                      }}
                    >
                      19:30:30
                    </span>
                    <CCol>
                      <CCard
                        style={{
                          backgroundColor: "#FFB425",
                          boxShadow: "2px 2px 14px 2px #EAD0AC",
                          padding: 0,
                          marginTop: "16px",
                          textAlign: "center",
                        }}
                      >
                        <CCardBody
                          style={{ padding: "10px 20px 10px 20px", margin: 0 }}
                        >
                          <CButton
                            block
                            style={{
                              padding: "2px 0px",
                              fontSize: "22px",
                              color: "#fff",
                              fontWeight: "700",
                              textAlign: "left",
                            }}
                            shape="square"
                            size="lg"
                            color="#318CFB"
                            onClick={() => this.leaveworkAddBtnClicked()}
                          >
                            <span style={{ lineHeight: "70px" }}>퇴근하기</span>
                            <img
                              src={require("src/userviews/img/bag.png").default}
                              style={{
                                height: "56px",
                                float: "right",
                                marginTop: "6px",
                              }}
                            />
                          </CButton>
                        </CCardBody>
                      </CCard>
                      <CCol
                        className="text-center"
                        style={{
                          fontSize: "16px",
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        <span class="badge badge-warning">
                          총 근무시간 8시간 40분
                        </span>
                      </CCol>
                    </CCol>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard style={{ backgroundColor: "#666EF0" }}>
              <CCardBody style={{ padding: 0 }}>
                <CRow style={{ margin: "14px 10px 10px 10px" }}>
                  <CRow style={{ marginBottom: "2px" }}>
                    <img
                      src={require("src/userviews/img/list_s.png").default}
                      style={{ height: "36px" }}
                    />
                  </CRow>
                  <CRow className="text-left">
                    <h5
                      style={{
                        marginTop: "8px",
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    >
                      출퇴근 기록 내역
                    </h5>
                  </CRow>
                  <CCol className="text-right">
                    <CButton
                      size="sm"
                      style={{
                        marginTop: "4px",
                        backgroundColor: "#4C61D8",
                        border: "0px",
                        color: "#fff",
                      }}
                      active
                      onClick={() => this.timelistAddBtnClicked()}
                      color="light"
                      aria-pressed="true"
                    >
                      더보기
                    </CButton>
                  </CCol>
                </CRow>
                <CRow
                  display="inline"
                  style={{
                    backgroundColor: "#fff",
                    padding: "16px",
                    margin: 0,
                    borderRadius: "11px",
                    boxShadow: "4px 8px 26px 0px #C1C7D3",
                  }}
                >
                  {this.state.timetableallList.map((timeitem, timeindex) => (
                    <CCol xs="4" style={{ padding: 5, margin: 0 }}>
                      <CCol
                        onClick={() => this.timelistAddBtnClicked()}
                        style={{
                          padding: "14px",
                          borderRadius: "10px",
                          background: "#fff",
                          cursor: "pointer",
                          boxShadow: "4px 8px 16px 2px #f0f0f0",
                        }}
                      >
                        <CCol
                          style={{
                            color: "#141414",
                            fontWeight: "600",
                            padding: "0px 2px",
                            marginBottom: "8px",
                            display: "inline-block",
                            fontSize: "16px",
                          }}
                        >
                          {timeitem.date}
                        </CCol>
                        <CCol
                          style={{
                            backgroundColor: "#f8f8f8",
                            paddingTop: "8px",
                            paddingLeft: "8px",
                            borderRadius: "8px",
                            paddingBottom: "2px",
                          }}
                        >
                          <CCol
                            style={{
                              fontSize: "16px",
                              padding: 0,
                              display: "inline-block",
                            }}
                          >
                            <CRow>
                              <CCol xs="2">
                                <span class="badge badge-info">출근</span>
                              </CCol>
                              <CCol
                                style={{
                                  paddingLeft: "20px",
                                  color: "#141414",
                                }}
                              >
                                <h5 style={{ padding: 0, fontWeight: 400 }}>
                                  {timeitem.godate}
                                </h5>
                              </CCol>
                            </CRow>
                          </CCol>
                          <CCol
                            style={{
                              paddingTop: "2px",
                              fontSize: "14px",
                              margin: 0,
                              padding: 0,
                              display: "inline-block",
                            }}
                          >
                            <CRow>
                              <CCol xs="2">
                                <span class="badge badge-warning">퇴근</span>
                              </CCol>
                              <CCol
                                style={{
                                  paddingLeft: "20px",
                                  color: "#141414",
                                }}
                              >
                                <h5 style={{ padding: 0, fontWeight: 400 }}>
                                  {timeitem.closedate}
                                </h5>
                              </CCol>
                            </CRow>
                            <CCol
                              className="text-left"
                              style={{
                                fontSize: "14px",
                                margin: 0,
                                padding: 0,
                              }}
                            >
                              <span class="badge badge-light">
                                총 근무시간 {timeitem.total}
                              </span>
                            </CCol>
                          </CCol>
                        </CCol>
                      </CCol>
                    </CCol>
                  ))}
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="12" md="12" lg="12" xl="12" xxl="6">
            <CCard style={{ backgroundColor: "#ED776D" }}>
              <CCardBody style={{ padding: 0 }}>
                <CRow style={{ margin: "14px 10px 10px 10px" }}>
                  <CRow style={{ marginBottom: "2px" }}>
                    <img
                      src={require("src/userviews/img/jobsheet_s.png").default}
                      style={{ height: "36px" }}
                    />
                  </CRow>
                  <CRow className="text-left">
                    <h5
                      style={{
                        marginTop: "8px",
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    >
                      내 업무일지
                    </h5>
                  </CRow>
                  <CCol className="text-right">
                    <CButton
                      size="sm"
                      active
                      onClick={() => this.jobsheetAddBtnClicked()}
                      color="light"
                      aria-pressed="true"
                      style={{
                        marginTop: "4px",
                        backgroundColor: "#D35C59",
                        color: "#fff",
                        border: "0px",
                      }}
                    >
                      더보기
                    </CButton>
                  </CCol>
                </CRow>

                <CCol
                  style={{
                    backgroundColor: "#fff",
                    padding: "16px",
                    margin: 0,
                    borderRadius: "11px",
                    boxShadow: "4px 8px 26px 0px #C1C7D3",
                  }}
                >
                  {this.state.rows2.map((rowitem, rowindex) => (
                    <CRow
                      onClick={() => this.jobsheetAddBtnClicked()}
                      className="hover1"
                      style={{
                        margin: 5,
                        marginBottom: "10px",
                        padding: "10px 0px 10px 10px",
                        borderRadius: "8px",
                        background: "#fff",
                        cursor: "pointer",
                        boxShadow: "4px 8px 16px 2px #f0f0f0",
                      }}
                    >
                      <CRow
                        style={{
                          color: "#141414",
                          fontWeight: "600",
                          padding: "4px 20px",
                        }}
                      >
                        {rowitem.board_id}
                      </CRow>
                      <CCol
                        xs="2"
                        className="text-left"
                        style={{
                          paddingLeft: "30px",
                          paddingTop: "2px",
                          marginRight: "4px",
                        }}
                      >
                        <span class="badge badge-warning">
                          업무 {rowitem.boarddetail_count}
                        </span>
                      </CCol>
                      <CCol
                        xs="2"
                        className="text-left"
                        style={{ padding: 0, margin: 0, paddingTop: "2px" }}
                      >
                        <span class="badge badge-light">
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
                  ))}
                </CCol>
              </CCardBody>
            </CCard>
            <CCard style={{ backgroundColor: "#2BB2AC" }}>
              <CCardBody style={{ padding: 0 }}>
                <CRow style={{ margin: "14px 10px 10px 10px" }}>
                  <CRow style={{ marginBottom: "2px" }}>
                    <img
                      src={require("src/userviews/img/check_s.png").default}
                      style={{ height: "36px" }}
                    />
                  </CRow>
                  <CRow className="text-left">
                    <h5
                      style={{
                        marginTop: "8px",
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    >
                      오늘 할 일
                    </h5>
                  </CRow>
                  <CCol className="text-right">
                    <CButton
                      size="sm"
                      style={{
                        marginTop: "4px",
                        backgroundColor: "#129E90",
                        color: "#fff",
                        border: "0px",
                      }}
                      active
                      onClick={() => this.todaylistAddBtnClicked()}
                      color="light"
                      aria-pressed="true"
                    >
                      더보기
                    </CButton>
                  </CCol>
                </CRow>
                <CCol
                  style={{
                    backgroundColor: "#fff",
                    padding: "16px",
                    margin: 0,
                    borderRadius: "11px",
                    boxShadow: "4px 8px 26px 0px #C1C7D3",
                  }}
                >
                  {this.state.todoList.map((item, index) => (
                    <CRow
                      onClick={() => this.todaylistcheckAddBtnClicked()}
                      className="hover1"
                      style={{
                        margin: "0px 4px",
                        marginBottom: "8px",
                        padding: "12px 0px 12px 0px",
                        borderRadius: "8px",
                        background: "#f8f8f8",
                        cursor: "pointer",
                      }}
                    >
                      <CCol
                        xs="1"
                        style={{ fontSize: "16px", paddingBottom: "2px" }}
                      >
                        <span class="badge bg-warning text-white">대기중</span>
                      </CCol>
                      <CCol
                        style={{
                          color: "#141414",
                          fontWeight: "600",
                          marginLeft: "4px",
                          paddingTop: "2px",
                        }}
                      >
                        {item.title}
                      </CCol>
                      <CCol className="text-right" style={{ color: "#989898" }}>
                        {item.due_date} 까지
                      </CCol>
                    </CRow>
                  ))}
                </CCol>
              </CCardBody>
            </CCard>
          </CCol>
          <CModal
            centered
            size="sm"
            show={this.state.gotoworkAddModalOpen}
            onClose={() => this.setState({ gotoworkAddModalOpen: false })}
          >
            <CModalBody>
              <CRow style={{ marginBottom: "10px", paddingLeft: "2px" }}>
                <h5>출근하셨습니다.</h5>
              </CRow>
              <CCol className="text-right" style={{ margin: 0, padding: 0 }}>
                <CButton
                  className="check-btn"
                  onClick={() => this.setState({ gotoworkAddModalOpen: false })}
                >
                  확인
                </CButton>
              </CCol>
            </CModalBody>
          </CModal>
          <CModal
            centered
            size="sm"
            show={this.state.leaveworkAddModalOpen}
            onClose={() => this.setState({ leaveworkAddModalOpen: false })}
          >
            <CModalBody>
              <CRow style={{ marginBottom: "10px", paddingLeft: "2px" }}>
                <h5>퇴근하셨습니다.</h5>
              </CRow>
              <CCol className="text-right" style={{ margin: 0, padding: 0 }}>
                <CButton
                  className="check-btn"
                  onClick={() =>
                    this.setState({ leaveworkAddModalOpen: false })
                  }
                >
                  확인
                </CButton>
              </CCol>
            </CModalBody>
          </CModal>
        </CRow>
      </>
    );
  }
}

export default Home;
