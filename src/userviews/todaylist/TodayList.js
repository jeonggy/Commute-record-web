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
  CTabs,
  CInput,
  CFormGroup,
  CButtonGroup,
  CCardHeader,
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

function badgeColor(state) {
  if (state == "대기중") {
    return "warning";
  }
  if (state == "진행중") {
    return "info";
  }
  if (state == "지연중") {
    return "danger";
  }
  if (state == "완료") {
    return "light";
  }

  return "success"; //그 외일 경우

  // switch (state) {
  //     case '대기중':
  //         return 'warning'
  //         break;

  //     case '진행중':
  //         return 'info'
  //         break;

  //     case '지연중':
  //         return 'danger'
  //         break;

  //     case '완료':
  //         return 'light'
  //         break;

  //     default:  //그 외일 경우
  //         return 'success'
  //         break;
  // }
}

const columns = [
  {
    field: "status",
    headerName: "현재상태",
    flex: 10,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <CBadge color={badgeColor(value)}>{value}</CBadge>
    ),

    // renderCell: ({ value }) => <div className={'badge-color-'+badgeColor(value)} color={badgeColor(value)}>{value}</div> //직접 만들고 싶으면
  },
  {
    field: "title",
    headerName: "제목",
    flex: 25,
    headerAlign: "center",
  },
  {
    field: "due_date",
    headerName: "기한",
    flex: 15,
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "작성일",
    flex: 15,
    headerAlign: "center",
  },
];

const rows = [
  {
    id: 1,
    status: "지연중",
    title: "전기자동차 앱 기획1",
    due_date: "2021-12-25 17:30:00",
    date: "2021-12-20 17:30:00",
    user_id: 0,
    tododetailList: [
      {
        id: 1,
        content: "전기자동차 앱 기획",
        process: 0,
        color: "#FFB425",
      },
      {
        id: 2,
        content: "전기자동차 앱 개발",
        process: 30,
        color: "#61ABEA",
      },
      {
        id: 3,
        content: "전기자동차 앱 디자인",
        process: 0,
        color: "#FFB425",
      },
    ],
    team_member: [
      {
        team_name: "개발팀",
        memberList: [
          {
            user_id: 1,
            name: "육태섭",
            position: "대표",
          },
          {
            user_id: 2,
            name: "김재신",
            position: "이사",
          },
          {
            user_id: 3,
            name: "우재민",
            position: "개발자",
          },
        ],
      },
      {
        team_name: "디자인팀",
        memberList: [
          {
            user_id: 4,
            name: "정가연",
            position: "디자이너",
          },
          {
            user_id: 5,
            name: "정예은",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    status: "지연중",
    title: "전기자동차 앱 기획2",
    due_date: "2021-12-26 17:30:00",
    date: "2021-12-21 17:30:00",
    user_id: 1,
    tododetailList: [
      {
        id: 1,
        content: "전기자동차 앱 기획 및 개발",
        process: 50,
        color: "#61ABEA",
      },
      {
        id: 2,
        content: "전기자동차 앱 디자인",
        process: 30,
        color: "#61ABEA",
      },
    ],
    team_member: [
      {
        team_name: "개발팀",
        memberList: [
          {
            user_id: 3,
            name: "우재민",
            position: "개발자",
          },
        ],
      },
      {
        team_name: "디자인팀",
        memberList: [
          {
            user_id: 4,
            name: "정가연",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    status: "대기중",
    title: "전기자동차 앱 기획3",
    due_date: "2021-12-27 17:30:00",
    date: "2021-12-22 17:30:00",
    user_id: 0,
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
        process: 50,
        color: "#61ABEA",
      },
    ],
    team_member: [
      {
        team_name: "개발팀",
        memberList: [
          {
            user_id: 3,
            name: "우재민",
            position: "개발자",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    status: "진행중",
    title: "전기자동차 앱 기획4",
    due_date: "2021-12-27 20:30:00",
    date: "2021-12-25 17:30:00",
    user_id: 1,
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
        process: 50,
        color: "#61ABEA",
      },
      {
        id: 2,
        content: "Section 2 design",
        process: 0,
        color: "#FFB425",
      },
    ],
    team_member: [
      {
        team_name: "개발팀",
        memberList: [
          {
            user_id: 1,
            name: "육태섭",
            position: "대표",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    status: "진행중",
    title: "전기자동차 앱 기획5",
    due_date: "2021-12-28 17:30:00",
    date: "2021-12-24 17:30:00",
    user_id: 0,
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
        process: 50,
        color: "#61ABEA",
      },
      {
        id: 2,
        content: "Section 2 design",
        process: 30,
        color: "#61ABEA",
      },
    ],
    team_member: [
      {
        team_name: "디자인팀",
        memberList: [
          {
            user_id: 4,
            name: "정가연",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    status: "진행중",
    title: "전기자동차 앱 기획6",
    due_date: "2021-12-29 17:30:00",
    date: "2021-12-23 12:30:00",
    user_id: 1,
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
        process: 50,
        color: "#61ABEA",
      },
      {
        id: 2,
        content: "Section 2 design",
        process: 30,
        color: "#61ABEA",
      },
    ],
    team_member: [
      {
        team_name: "개발팀",
        memberList: [
          {
            user_id: 2,
            name: "김재신",
            position: "이사",
          },
          {
            user_id: 3,
            name: "우재민",
            position: "개발자",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    status: "완료",
    title: "전기자동차 앱 기획7",
    due_date: "2021-12-30 17:30:00",
    date: "2021-12-15 17:30:00",
    user_id: 1,
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
        process: 50,
        color: "#61ABEA",
      },
    ],
    team_member: [
      {
        team_name: "개발팀",
        memberList: [
          {
            user_id: 1,
            name: "육태섭",
            position: "대표",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    status: "완료",
    title: "전기자동차 앱 기획8",
    due_date: "2022-01-10 17:30:00",
    date: "2021-12-17 17:30:00",
    user_id: 0,
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
        process: 50,
        color: "#61ABEA",
      },
    ],
    team_member: [
      {
        team_name: "디자인팀",
        memberList: [
          {
            user_id: 4,
            name: "정가연",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    status: "완료",
    title: "전기자동차 앱 기획9",
    due_date: "2022-01-15 17:30:00",
    date: "2021-12-28 17:30:00",
    user_id: 1,
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
        process: 50,
        color: "#61ABEA",
      },
      {
        id: 1,
        content: "Section 1 design Section 1 design Section 1 design",
        process: 50,
        color: "#61ABEA",
      },
    ],
    team_member: [
      {
        team_name: "디자인팀",
        memberList: [
          {
            user_id: 4,
            name: "정가연",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    status: "연기",
    title: "전기자동차 앱 기획10",
    due_date: "2022-01-21 17:30:00",
    date: "2021-12-29 17:30:00",
    user_id: 0,
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
        process: 10,
        color: "#61ABEA",
      },
    ],
    team_member: [
      {
        team_name: "디자인팀",
        memberList: [
          {
            user_id: 4,
            name: "정가연",
            position: "디자이너",
          },
        ],
      },
    ],
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

class TodayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selectedItem: null,
      sortType: 0,
      statusType: 0,
      whoseType: 0,
      rows: rows,
    };
  }

  listAddBtnClicked = () => {
    document.location.href = "#/listwrite";
  };

  tableVisibleData = () => {
    let list = JSON.parse(JSON.stringify(rows));

    const statustype = this.state.statusType;
    const whosetype = this.state.whoseType;

    if (statustype == 0 && whosetype == 0) {
      //전체 리스트 보여줌
      //
      return this.dateSortList(list);
    }

    var newList = []; //새 리스트를 만들어서 담는다

    var key; //key-> undefined

    switch (statustype) {
      case 1:
        key = "대기중";
        break;

      case 2:
        key = "진행중";
        break;

      case 3:
        key = "지연중";
        break;

      case 4:
        key = "완료";
        break;

      default:
        //그 외일 경우
        key = "대기중";
        break;
    }

    var key2; // key => undefined
    switch (whosetype) {
      case 1:
        key2 = 0;
        break;

      case 2:
        key2 = 1;
        break;

      default:
        //그 외일 경우
        key2 = 0;
        break;
    }

    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      if (element.status == key && element.user_id == key2) {
        newList.push(element);
      } else if (whosetype == 0 && element.status == key) {
        newList.push(element);
      } else if (statustype == 0 && element.user_id == key2) {
        newList.push(element);
      }
    }
    // alert(JSON.stringify(newList));
    return this.dateSortList(newList);
  };

  dateSortList = (array) => {
    var result;

    var key;

    var test = 1;

    if (this.state.sortType == 0) {
      key = "due_date";
    } else if (this.state.sortType == 1) {
      key = "date";
      test = -1;
    } else if (this.state.sortType == 2) {
      key = "title";
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

  rowClicked = (item) => {
    // alert(index)
    // alert(JSON.stringify(item))
    this.setState({
      selectedItem: item.row, // .row 를 하는 이유가 item를 보내고 나서 다시 뱉어낼 때 선택한 개체가 그대로 나오는 게 아니라 상위에 다른 값이 붙고 row(키)안에 선택한 개체가 들어감.
    });
  };

  writeBtnClicked = () => {
    document.location.href = "#/listwrite2";
  };

  render() {
    const selectedItem = this.state.selectedItem;
    return (
      <>
        <CRow className="justify-content-center">
          <CCol md="12" lg="12" sm="12" xl="7">
            <CCard
              style={{
                backgroundColor: "#2BB2AC",
                boxShadow: "2px 2px 16px 4px #C0CEC6",
              }}
            >
              <CCardBody>
                <CRow>
                  <CCol
                    xs="6"
                    className="back-color-title-green"
                    style={{ height: "88px" }}
                  ></CCol>
                  <CCol
                    className="list-title"
                    style={{ padding: "70px 0px 0px 40px", color: "#fff" }}
                  >
                    <div>이용자의 업무를 볼 수 있는 공간입니다.</div>
                    <div style={{ fontSize: "26px" }}>
                      <strong>오늘 할 일</strong>
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
                        boxShadow: "4px 4px 10px 1px #23A396",
                      }}
                      shape="square"
                      onClick={() => this.listAddBtnClicked()}
                    >
                      작성하기
                    </CButton>
                  </CCol>
                  <CCol
                    xs="5"
                    className="text-right"
                    style={{ padding: 0, margin: 0, marginRight: "10px" }}
                  >
                    <img
                      src={require("src/userviews/img/todaylist.png").default}
                      style={{ height: "140px" }}
                    />
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>

            <CTabs>
              <CCol>
                <CRow>
                  <CCard
                    xs="3"
                    lg="3"
                    sm="3"
                    style={{
                      padding: "20px",
                      marginRight: "20px",
                      borderRadius: "50px",
                    }}
                  >
                    <CButtonGroup
                      style={{
                        backgroundColor: "#2BB2AC",
                        padding: "2px",
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
                        기한 순
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
                        작성일 순
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
                        제목 순
                      </CButton>
                    </CButtonGroup>
                  </CCard>
                  <CCard
                    xs="6"
                    lg="6"
                    sm="6"
                    style={{
                      padding: "20px",
                      marginRight: "20px",
                      borderRadius: "50px",
                    }}
                  >
                    <CButtonGroup
                      style={{
                        backgroundColor: "#2BB2AC",
                        padding: "2px",
                        borderRadius: "30px",
                      }}
                    >
                      <CButton
                        style={{ borderRadius: "30px" }}
                        className={
                          this.state.statusType == 0
                            ? "btn-outline-info"
                            : "btn-info"
                        }
                        onClick={() => this.setState({ statusType: 0 })}
                      >
                        전체
                      </CButton>
                      <CButton
                        style={{ borderRadius: "30px" }}
                        className={
                          this.state.statusType == 1
                            ? "btn-outline-info"
                            : "btn-info"
                        }
                        onClick={() => this.setState({ statusType: 1 })}
                      >
                        대기중
                      </CButton>
                      <CButton
                        style={{ borderRadius: "30px" }}
                        className={
                          this.state.statusType == 2
                            ? "btn-outline-info"
                            : "btn-info"
                        }
                        onClick={() => this.setState({ statusType: 2 })}
                      >
                        진행중
                      </CButton>
                      <CButton
                        style={{ borderRadius: "30px" }}
                        className={
                          this.state.statusType == 3
                            ? "btn-outline-info"
                            : "btn-info"
                        }
                        onClick={() => this.setState({ statusType: 3 })}
                      >
                        지연중
                      </CButton>
                      <CButton
                        style={{ borderRadius: "30px" }}
                        className={
                          this.state.statusType == 4
                            ? "btn-outline-info"
                            : "btn-info"
                        }
                        onClick={() => this.setState({ statusType: 4 })}
                      >
                        완료
                      </CButton>
                    </CButtonGroup>
                  </CCard>
                </CRow>
              </CCol>
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
                        style={{ padding: "4px 0px 16px 4px", margin: 0 }}
                      >
                        <CInput
                          style={{ borderRadius: "40px" }}
                          placeholder="오늘 할 일 검색"
                        />
                        <CButton
                          style={{
                            marginLeft: "6px",
                            borderRadius: "4px",
                            backgroundColor: "#FFB425",
                            color: "#fff",
                            borderRadius: "40px",
                          }}
                          className="my-2 my-sm-0"
                          type="submit"
                        >
                          검색
                        </CButton>
                      </CFormGroup>
                    </CCol>
                    <CCol
                      className="text-right"
                      style={{ padding: "4px 20px 16px 0px", margin: 0 }}
                      sm="5"
                      xl="5"
                      xs="6"
                      lg="5"
                    >
                      <CButtonGroup
                        style={{
                          backgroundColor: "#2BB2AC",
                          padding: "2px",
                          borderRadius: "30px",
                        }}
                        className="float-right"
                      >
                        <CButton
                          style={{ borderRadius: "30px" }}
                          className={
                            this.state.whoseType == 0
                              ? "btn-outline-info"
                              : "btn-info"
                          }
                          onClick={() => this.setState({ whoseType: 0 })}
                        >
                          전체
                        </CButton>
                        <CButton
                          style={{ borderRadius: "30px" }}
                          className={
                            this.state.whoseType == 1
                              ? "btn-outline-info"
                              : "btn-info"
                          }
                          onClick={() => this.setState({ whoseType: 1 })}
                        >
                          내 할일
                        </CButton>
                        <CButton
                          style={{ borderRadius: "30px" }}
                          className={
                            this.state.whoseType == 2
                              ? "btn-outline-info"
                              : "btn-info"
                          }
                          onClick={() => this.setState({ whoseType: 2 })}
                        >
                          부여한 일
                        </CButton>
                      </CButtonGroup>
                    </CCol>
                  </CRow>
                  <div style={{ height: 530, width: "100%" }}>
                    <DataGrid
                      disableColumnMenu={true}
                      rows={this.tableVisibleData()}
                      // tableVisibleData 에서 item 아닌 index로도 뽑아 올 수 있음
                      columns={columns}
                      disableSelectionOnClick
                      pagination
                      pageSize={8}
                      rowsPerPageOptions={[5]}
                      onRowClick={(item) => this.rowClicked(item)}
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
            </CTabs>
          </CCol>

          <CCol xs="12" sm="12" md="12" lg="12" xl="5">
            {this.state.selectedItem && (
              <>
                <CCard
                  style={{ borderRadius: "0.8rem", backgroundColor: "#2BB2AC" }}
                >
                  <CCardHeader
                    style={{
                      borderRadius: "0.8rem",
                      borderBottom: "0px",
                      backgroundColor: "#2BB2AC",
                    }}
                  >
                    <CCol>
                      <CRow
                        style={{
                          fontWeight: "700",
                          fontSize: "24px",
                          padding: "8px 0px 0px 2px",
                          lineHeight: "36px",
                          color: "#fff",
                        }}
                      >
                        {selectedItem.title}
                      </CRow>
                      <CRow
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          padding: "0px 0px 0px 2px",
                        }}
                      >
                        {selectedItem.due_date} 까지
                      </CRow>
                    </CCol>
                  </CCardHeader>
                  <CCardBody style={{ padding: "8px" }}>
                    <CCol
                      style={{
                        backgroundColor: "#fff",
                        padding: "20px 10px 20px 10px",
                        borderRadius: "0.8rem",
                      }}
                    >
                      {this.state.selectedItem.tododetailList.map(
                        (item, index) => (
                          <CRow style={{ margin: "8px 0px" }}>
                            <CRow
                              style={{
                                padding: "6px 10px 6px 10px",
                                backgroundColor: "#f1f9ff",
                                color: "#146fb4",
                                display: "inline",
                                borderRadius: "8px",
                                margin: "10px 10px 10px 0px",
                                textAlign: "center",
                                display: "inline-block",
                                fontWeight: 700,
                              }}
                            >
                              {item.process}
                            </CRow>
                            <CCol
                              className="text-center"
                              style={{
                                padding: "10px 10px 10px 10px",
                                borderRadius: "8px",
                                backgroundColor: "#f8f8f8",
                                marginRight: "8px",
                              }}
                            >
                              <CCol
                                style={{
                                  color: "#FFB425",
                                  padding: "4px 0px 4px 4px",
                                }}
                                className="text-left"
                              >
                                ●
                                <span
                                  style={{
                                    color: "#141414",
                                    fontSize: "16px",
                                    paddingLeft: "8px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {item.content}
                                </span>
                              </CCol>
                            </CCol>
                          </CRow>
                        )
                      )}
                    </CCol>
                    <CCol
                      style={{
                        backgroundColor: "#fff",
                        padding: "0px 10px 10px 10px",
                        borderRadius: "0.8rem",
                        marginTop: "8px",
                      }}
                    >
                      <CCol
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          padding: "24px 0px 2px 4px",
                        }}
                      >
                        참여자
                      </CCol>
                      {this.state.selectedItem.team_member.map(
                        (teamitem, teamindex) => (
                          <CRow style={{ paddingLeft: "4px" }}>
                            <CRow
                              style={{
                                fontSize: "14px",
                                padding: "12px 0px 4px 18px",
                                margin: "0px 6px 0px 0px",
                              }}
                            >
                              {teamitem.team_name}
                            </CRow>
                            {teamitem.memberList.map(
                              (memberitem, memberindex) => (
                                <CRow
                                  style={{
                                    backgroundColor: "#f8f8f8",
                                    padding: "8px 10px",
                                    margin: "4px 4px 4px 4px",
                                    color: "#141414",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    borderRadius: "8px",
                                  }}
                                  className="text-left membername"
                                >
                                  {memberitem.name}
                                </CRow>
                              )
                            )}
                          </CRow>
                        )
                      )}
                      <CCol
                        className="text-right"
                        style={{ marginTop: "30px", padding: 0 }}
                      >
                        <CButton
                          active
                          color="light"
                          aria-pressed="true"
                          style={{
                            margin: "5px 10px 5px 5px",
                            borderRadius: "6px",
                          }}
                          onClick={() => this.setState({ selectedItem: false })}
                        >
                          닫기
                        </CButton>
                        <CButton
                          active
                          aria-pressed="true"
                          style={{
                            margin: 0,
                            borderRadius: "6px",
                            backgroundColor: "#FFB425",
                            color: "#fff",
                          }}
                          onClick={() => this.writeBtnClicked()}
                        >
                          수정하기
                        </CButton>
                      </CCol>
                    </CCol>
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

export default TodayList;
