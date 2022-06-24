import React, { Component } from "react";
import { DataGrid, useGridSlotComponentProps } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CFormGroup,
  CButton,
  CInput,
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
  { id: 1, title: "오늘의 공지사항", date: "2021-10-11 17:30:00" },
  { id: 2, title: "오늘의 공지사항", date: "2021-10-31 17:30:00" },
  { id: 3, title: "오늘의 공지사항", date: "2021-10-28 17:30:00" },
  { id: 4, title: "오늘의 공지사항", date: "2021-10-18 17:30:00" },
  { id: 5, title: "오늘의 공지사항", date: "2021-10-19 17:30:00" },
  { id: 6, title: "오늘의 공지사항", date: "2021-10-30 17:30:00" },
  { id: 7, title: "오늘의 공지사항", date: "2021-11-01 17:30:00" },
  { id: 8, title: "오늘의 공지사항", date: "2021-11-10 17:30:00" },
  { id: 9, title: "오늘의 공지사항", date: "2021-11-03 17:30:00" },
  { id: 10, title: "오늘의 공지사항", date: "2021-10-07 17:30:00" },
  { id: 11, title: "오늘의 공지사항", date: "2021-10-17 17:30:00" },
  { id: 12, title: "오늘의 공지사항", date: "2021-10-19 17:30:00" },
  { id: 13, title: "오늘의 공지사항", date: "2021-10-12 17:30:00" },
  { id: 14, title: "오늘의 공지사항", date: "2021-10-29 17:30:00" },
  { id: 15, title: "오늘의 공지사항", date: "2021-10-02 17:30:00" },
  { id: 16, title: "오늘의 공지사항", date: "2021-12-01 17:30:00" },
  { id: 17, title: "오늘의 공지사항", date: "2021-12-05 17:30:00" },
  { id: 18, title: "오늘의 공지사항", date: "2021-12-07 17:30:00" },
];

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  rowClicked = (item) => {
    this.setState({
      selectedItem: item,
      selectedSitem: null,
    });
  };

  rrowClicked = (sitem) => {
    this.setState({
      selectedSitem: sitem,
      selectedItem: null,
    });
  };

  breakDownAddBtnClicked = () => {
    this.setState({
      selectedItem: null,
      selectedSitem: null,
    });
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
          <CCol xs="12" sm="12" md="12" lg="12" xl="5">
            <CCard
              style={{
                backgroundColor: "#2BB2AC",
                boxShadow: "2px 2px 16px 4px #C0CEC6",
              }}
            >
              <CCardBody>
                <CRow>
                  <CCol
                    xs="7"
                    className="back-color-title-green"
                    style={{ height: "88px" }}
                  ></CCol>
                  <CCol
                    className="list-title"
                    style={{ padding: "30px 0px 0px 40px", color: "#fff" }}
                  >
                    <div>공지사항을 볼 수 있는 공간입니다.</div>
                    <div style={{ fontSize: "26px" }}>
                      <strong>공지사항</strong>
                    </div>
                  </CCol>
                  <CCol
                    xs="4"
                    className="text-right"
                    style={{ padding: 0, margin: 0 }}
                  >
                    <img
                      src={require("src/userviews/img/notice_m.png").default}
                      style={{ height: "110px" }}
                    />
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol className="form-row">
                    <CFormGroup
                      className="col-7 inline input-group"
                      sm="7"
                      xl="7"
                      xs="6"
                      lg="7"
                      style={{ padding: "10px 0px 10px 4px", margin: 0 }}
                    >
                      <CInput
                        style={{ borderRadius: "40px" }}
                        placeholder="공지사항 검색"
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
                <div xs="12" style={{ height: 640, width: "100%" }}>
                  <DataGrid
                    disableColumnMenu={true}
                    rows={this.noticeSortList()}
                    columns={columns}
                    disableSelectionOnClick
                    pagination
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    onRowClick={(item, index) => this.rowClicked(item)}
                    components={{
                      Pagination: CustomPagination,
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      cursor: "pointer",
                    }}
                    columns={columns.map((column) => ({
                      ...column,
                      sortable: false,
                      filterable: false,
                      columnField: false,
                      hideSortIcons: false,
                      targetColumnField: false,
                    }))}
                  />
                </div>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md="12" lg="12" sm="12" xl="7">
            {this.state.selectedItem && (
              <>
                <CCard id="deleteId">
                  <CCardBody>
                    <h5
                      style={{
                        marginBottom: "20px",
                        fontWeight: "700",
                        color: "#141414",
                      }}
                    >
                      공지 상세 정보
                    </h5>
                    <CRow>
                      <CCol>
                        <table className="table customtable">
                          <tr>
                            <td style={{ color: "#989898", fontSize: "14px" }}>
                              일자
                            </td>
                            <td class="text-right" style={{ fontSize: "14px" }}>
                              2021.02.01
                            </td>
                          </tr>
                          <tr>
                            <td style={{ color: "#989898", fontSize: "14px" }}>
                              제목
                            </td>
                            <td class="text-right" style={{ fontSize: "14px" }}>
                              도시재생과 생태적 공간인 문화비축기지
                            </td>
                          </tr>
                        </table>
                        <tr>
                          <td
                            style={{
                              fontSize: "14px",
                              padding: "10px 10px 20px 10px",
                            }}
                          >
                            도시재생과 생태적 공간인 문화비축기지를 중심으로
                            코로나-19 이후 건축적 공간의 기능상실에
                            <br />
                            직면한 현재를 반추하고 미래 삶의 공간에 대해
                            고민해보고, 해결책을 모색해 보는 공간전환학교의
                            참가자를 아래와 같이 모집하오니 많은 신청바랍니다.
                            <br />
                            2021. 7. 5. 서울특별시 서부공원녹지사업소장 <br />
                            <br />
                            1. 사업개요 <br />
                            가. 사 업 명 : 2021 문화비축학교 공간전환학교 <br />
                            나. 교육기간 : 2020년 7월 23일~8월 27일(매주 금요일,
                            총6회) <br />
                            다. 교육내용 : 문화비축기지와 공간을 주제로 하는
                            강연과 그룹별 프로젝트 수행 <br />
                            라. 운영위원 : 이윤하(협치위원, 건축사사무소 노둣돌
                            대표), 박준호(건국대학교 건축전문대학원 겸임교수),
                            이영범(경기대건축학과 교수), 정기황(사단법인
                            문화도시연구소 소장) <br />
                            마. 강사진 : 허서구(문화비축기지 설계자, ROA),
                            이윤하(협치위원, 건축사사무소 노둣돌 대표),
                            정기황(사단법인 문화도시연구소 소장),
                            박준호(건국대학교 건축전문대학원 겸임교수),
                            이영범(경기대 건축학과 교수) <br />
                            <br />
                            2. 모집 개요
                            <br />
                            가. 모집대상 : 건축 및 공간에 관심있는 시민 (20명
                            내외) <br />
                            나. 참여조건 : 교육 전체 일정 중 80% 이상 필참 ※
                            교육 종료 후 수료증 발급 <br />
                            다. 참 가 비 : 40,000원 (면접 후 서울시
                            공공예약시스템으로 납부) <br />
                            라. 모집기간 : 2021년 7월 5일 ~ 7월 15일 18:00 마감{" "}
                            <br />
                            마. 신청방법 : 아래 온라인 링크를 통해서만 접수{" "}
                            <br />
                            ※ 우편 및 방문접수 불가능
                            https://forms.gle/oCB2cp3S9Bc9eoFb8 <br />
                            바. 참가자 면접심사 - 면접일정 : 2021년 7월 20일(화)
                            14:00~ - 선정기준 : 건축 및 공간에 대한 경험과
                            이해도, 강의 참석 및 활동가능성 - 결과발표 : 2021년
                            7월 22일(목) 문화비축기지 홈페이지 게시 및 개별통보
                          </td>
                        </tr>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              </>
            )}
          </CCol>
        </CRow>
      </>
    );
  }
}

export default Notice;
