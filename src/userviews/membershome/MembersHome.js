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
    flex: 2,
    headerAlign: "center",
  },
  {
    field: "team",
    headerName: "소속",
    flex: 2,
    headerAlign: "center",
  },
  {
    field: "godate",
    headerName: "출근",
    headerAlign: "center",
    editable: true,
    flex: 1,
  },
  {
    field: "closedate",
    headerName: "퇴근",
    headerAlign: "center",
    editable: true,
    flex: 1,
  },
];

const timetableallList = [
  {
    id: 1,
    name: "홍길동",
    team: "개발팀",
    godate: "09:35",
    closedate: "18:30",
    total: "8시간 30분",
  },
  {
    id: 2,
    name: "박길동",
    team: "마케팅팀",
    godate: "09:26",
    closedate: "18:30",
    total: "8시간 30분",
  },
  {
    id: 3,
    name: "김길동",
    team: "마케팅팀",
    godate: "09:27",
    closedate: "18:30",
    total: "8시간 30분",
  },
  {
    id: 4,
    name: "오길동",
    team: "디자인팀",
    godate: "09:37",
    closedate: "18:30",
    total: "8시간 30분",
  },
  {
    id: 5,
    name: "이길동",
    team: "디자인팀",
    godate: "09:22",
    closedate: "18:30",
    total: "8시간 30분",
  },
  {
    id: 6,
    name: "왕길동",
    team: "경영팀",
    godate: "09:29",
    closedate: "18:30",
    total: "8시간 30분",
  },
  {
    id: 7,
    name: "임길동",
    team: "개발팀",
    godate: "09:31",
    closedate: "18:30",
    total: "8시간 30분",
  },
  {
    id: 8,
    name: "강길동",
    team: "마케팅팀",
    godate: "09:50",
    closedate: "18:30",
    total: "8시간 30분",
  },
  {
    id: 9,
    name: "안길동",
    team: "개발팀",
    godate: "09:46",
    closedate: "18:30",
    total: "8시간 30분",
  },
];

const columns = [
  {
    field: "title",
    headerName: "제목",
    flex: 2,
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "등록일",
    flex: 2,
    headerAlign: "center",
  },
];

const rows = [
  { id: 1, title: "오늘의 공지사항", date: "2021-10-21 17:30:00" },
  { id: 2, title: "오늘의 공지사항", date: "2021-11-21 17:30:00" },
  { id: 3, title: "오늘의 공지사항", date: "2021-11-27 17:30:00" },
  { id: 4, title: "오늘의 공지사항", date: "2021-10-20 17:30:00" },
  { id: 5, title: "오늘의 공지사항", date: "2021-10-26 17:30:00" },
];

const columns2 = [
  {
    field: "board_id",
    headerName: "제목",
    flex: 2,
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
    board_id: "홍길동",
    comment: "댓글",
    boarddetail_count: "2",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 2,
    board_id: "김하동",
    comment: "댓글",
    boarddetail_count: "3",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 3,
    board_id: "홍희망",
    comment: "댓글",
    boarddetail_count: "1",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 4,
    board_id: "박서준",
    comment: "댓글",
    boarddetail_count: "1",
    date: "2021-10-21 17:30:00",
  },
  {
    id: 5,
    board_id: "유승호",
    comment: "댓글",
    boarddetail_count: "3",
    date: "2021-10-21 17:30:00",
  },
];

class MembersHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      timeList: timetableallList,
      rows2: rows2,
      rows: rows,
      memberCount: 10,
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
      timetableallList: [
        {
          name: 1,
          date: "2021-10-30",
          godate: "2021-10-30 09:30:00",
          closedate: "2021-10-30 18:30:00",
          check: 1,
        },
        {
          name: 1,
          date: "2021-10-29",
          godate: "2021-10-30 09:30:00",
          closedate: "2021-10-30 18:30:00",
          check: 1,
        },
      ],
    };
  }

  rowClicked = (item) => {
    document.location.href = "#/memberjobsheetdetails";
  };

  memberstimelistAddBtnClicked = () => {
    document.location.href = "#/memberstimelist";
  };
  memberjobsheetAddBtnClicked = () => {
    document.location.href = "#/membersjobsheet";
  };
  noticeAddBtnClicked = () => {
    document.location.href = "#/notice";
  };

  readyAddBtnClicked = () => {
    this.setState({
      readyAddModalOpen: true,
    });
  };
  membertimelistAddBtnClicked = () => {
    document.location.href = "#/membertimelist";
  };

  dateSortList = () => {
    let list = JSON.parse(JSON.stringify(timetableallList));
    var result;

    result = list.sort(function (a, b) {
      let x = a.godate.toLowerCase();
      let y = b.godate.toLowerCase();

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
  noticeSortList = () => {
    let list = JSON.parse(JSON.stringify(rows));
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
        <CRow className="justify-content-center">
          <CCol md="12" lg="12" sm="12" xl="12" xxl="7">
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol xs="6" style={{ padding: "16px 0px 0px 20px" }}>
                    <div
                      className="text-muted"
                      style={{ marginBottom: "16px", fontSize: "16px" }}
                    >
                      회사 구성원들과 공유하는 공간입니다.
                    </div>
                    <div
                      style={{
                        color: "#141414",
                        fontSize: "24px",
                        lineHeight: "36px",
                      }}
                    >
                      오늘은
                      <br />
                      <span style={{ fontSize: "34px", fontWeight: 700 }}>
                        {this.state.memberCount}명
                      </span>
                      <br />
                      출근 하였습니다.
                    </div>
                  </CCol>
                  <CCol className="back-color-members"></CCol>
                  <CRow
                    className="img-home-members"
                    style={{ padding: 0, margin: 0 }}
                  >
                    <img
                      src={require("src/userviews/img/members.png").default}
                      style={{ maxHeight: "220px", maxWidth: "100%" }}
                    />
                  </CRow>
                </CRow>

                <CRow style={{ marginTop: "40px", padding: "0px 14px" }}>
                  <CCol style={{ margin: 0, padding: "0px 8px" }}>
                    <CButton
                      block
                      style={{
                        padding: "12px 20px",
                        fontSize: "14px",
                        background: "#D9E0FF",
                        color: "#666EF0",
                        fontWeight: "700",
                        textAlign: "left",
                        borderRadius: "10px",
                      }}
                      shape="square"
                      onClick={() => this.memberstimelistAddBtnClicked()}
                    >
                      출퇴근 내역
                    </CButton>
                  </CCol>
                  <CCol style={{ margin: 0, padding: "0px 8px" }}>
                    <CButton
                      block
                      style={{
                        padding: "12px 20px",
                        fontSize: "14px",
                        background: "#FFD3D2",
                        color: "#ED776D",
                        fontWeight: "700",
                        textAlign: "left",
                        borderRadius: "10px",
                      }}
                      shape="square"
                      onClick={() => this.memberjobsheetAddBtnClicked()}
                    >
                      업무일지
                    </CButton>
                  </CCol>
                  <CCol style={{ margin: 0, padding: "0px 8px" }}>
                    <CButton
                      block
                      style={{
                        padding: "12px 20px",
                        fontSize: "14px",
                        background: "#BCE2DF",
                        color: "#2BB2AC",
                        fontWeight: "700",
                        textAlign: "left",
                        borderRadius: "10px",
                      }}
                      shape="square"
                      onClick={() => this.noticeAddBtnClicked()}
                    >
                      공지사항
                    </CButton>
                  </CCol>
                  <CCol style={{ margin: 0, padding: "0px 8px" }}>
                    <CButton
                      block
                      style={{
                        padding: "12px 20px",
                        fontSize: "14px",
                        background: "#FFE1B6",
                        color: "#EF9300",
                        fontWeight: "700",
                        textAlign: "left",
                        borderRadius: "10px",
                      }}
                      shape="square"
                      onClick={() => this.readyAddBtnClicked()}
                    >
                      준비중
                    </CButton>
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
                      전체 출퇴근 기록 내역
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
                      onClick={() => this.memberstimelistAddBtnClicked()}
                      color="light"
                      aria-pressed="true"
                    >
                      더보기
                    </CButton>
                  </CCol>
                </CRow>
                <CRow
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    margin: 0,
                    borderRadius: "11px",
                    boxShadow: "4px 8px 26px 0px #C1C7D3",
                  }}
                >
                  {this.state.timeList.map((timeitem, timeindex) => (
                    <CCol xs="3" style={{ padding: 5, margin: 0 }}>
                      <CCol
                        onClick={() => this.memberstimelistAddBtnClicked()}
                        style={{
                          padding: "14px",
                          borderRadius: "10px",
                          background: "#fff",
                          cursor: "pointer",
                          boxShadow: "4px 8px 16px 2px #f0f0f0",
                        }}
                      >
                        <CRow style={{ margin: 0 }}>
                          <CCol
                            style={{
                              color: "#141414",
                              fontWeight: "600",
                              padding: "0px 2px",
                              marginBottom: "6px",
                              display: "inline-block",
                              fontSize: "16px",
                            }}
                          >
                            {timeitem.name}
                          </CCol>

                          <CCol
                            className="text-right"
                            style={{
                              paddingTop: "2px",
                              fontSize: "14px",
                              marginBottom: "2px",
                              padding: 0,
                              display: "inline-block",
                            }}
                          >
                            <span class="badge badge-light">
                              {timeitem.team}
                            </span>
                          </CCol>
                        </CRow>
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
                              paddingTop: "2px",
                              fontSize: "16px",
                              marginBottom: "2px",
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
                              fontSize: "16px",
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
                                paddingTop: "2px",
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
          <CCol xs="12" sm="12" md="12" lg="12" xl="12" xxl="5">
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
                      전체 업무일지
                    </h5>
                  </CRow>
                  <CCol className="text-right">
                    <CButton
                      size="sm"
                      active
                      onClick={() => this.rowClicked()}
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
                      onClick={() => this.rowClicked()}
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
                      <CCol className="text-right" style={{ color: "#989898" }}>
                        {rowitem.date}
                      </CCol>
                    </CRow>
                  ))}
                  <CCol
                    className="justify-content-right text-right"
                    style={{ marginTop: "16px", right: 0 }}
                  >
                    <Pagination />
                  </CCol>
                </CCol>
              </CCardBody>
            </CCard>
            <CCard style={{ backgroundColor: "#2BB2AC" }}>
              <CCardBody style={{ padding: 0 }}>
                <CRow style={{ margin: "14px 10px 10px 10px" }}>
                  <CRow style={{ marginBottom: "2px" }}>
                    <img
                      src={require("src/userviews/img/notice_s.png").default}
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
                      공지사항
                    </h5>
                  </CRow>
                  <CCol className="text-right">
                    <CButton
                      size="sm"
                      active
                      onClick={() => this.noticeAddBtnClicked()}
                      color="light"
                      aria-pressed="true"
                      style={{
                        marginTop: "4px",
                        backgroundColor: "#129E90",
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
                  {this.state.rows.map((item, index) => (
                    <CRow
                      onClick={() => this.noticeAddBtnClicked()}
                      className="hover1"
                      style={{
                        margin: 5,
                        marginBottom: "8px",
                        padding: "12px 0px 12px 0px",
                        borderRadius: "8px",
                        background: "#f8f8f8",
                        cursor: "pointer",
                      }}
                    >
                      <CCol style={{ color: "#141414", fontWeight: "600" }}>
                        {item.title} <CBadge color="danger">N</CBadge>
                      </CCol>
                      <CCol className="text-right" style={{ color: "#989898" }}>
                        {item.date}
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
            show={this.state.readyAddModalOpen}
            onClose={() => this.setState({ readyAddModalOpen: false })}
          >
            <CModalBody>
              <CRow style={{ marginBottom: "10px", paddingLeft: "2px" }}>
                <h5>준비중 입니다.</h5>
              </CRow>
              <CCol className="text-right" style={{ margin: 0, padding: 0 }}>
                <CButton
                  className="check-btn"
                  onClick={() => this.setState({ readyAddModalOpen: false })}
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

export default MembersHome;
