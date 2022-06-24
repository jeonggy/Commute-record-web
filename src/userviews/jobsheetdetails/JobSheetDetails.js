import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CForm,
  CFormGroup,
  CSelect,
  CTextarea,
  CModal,
  CModalBody,
  CModalHeader,
} from "@coreui/react";

import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import DatePicker, { registerLocale } from "react-datepicker";
registerLocale("ko", ko);

const serverTodoData = {
  date: "2021-10-10 09:00:00",
  boardDetailList: [
    {
      id: 1,
      content: "전기자동차 앱 매니저 웹 작업",
      process: 100,
    },
    {
      id: 1,
      content: "말타 말그림",
      process: 100,
    },
  ],
  commentList: [
    {
      id: "고생하셨습니다",
      user_id: "1",
      user_name: "홍길동",
      content: "수고하셨습니다",
      date: "2021-10-10 10:00:00",
    },
  ],
  todoList: [
    {
      title: "App design",
      status: 2,
      due_date: "2021-10-30 18:30:00",

      tododetailList: [
        {
          id: 1,
          content: "Section 1 design",
          process: 50,
        },
        {
          id: 2,
          content: "Section 2 design",
          process: 30,
        },
        {
          id: 3,
          content: "Section 3 design",
          process: 20,
        },
      ],
    },
    {
      title: "WEB design",
      status: 2,
      due_date: "2021-11-30 18:30:00",

      tododetailList: [
        {
          id: 1,
          content: "Section 1 design",
          process: 20,
        },
        {
          id: 2,
          content: "Section 2 design",
          process: 30,
        },
      ],
    },
    {
      title: "2D design",
      status: 2,
      due_date: "2021-12-30 18:30:00",

      tododetailList: [
        {
          id: 1,
          content: "Section 1 design",
          process: 50,
        },
        {
          id: 2,
          content: "Section 2 design",
          process: 30,
        },
        {
          id: 3,
          content: "Section 3 design",
          process: 20,
        },
      ],
    },
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

class JobSheetWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      startDate: new Date(),
      contents: [""],
      // todoData:
      boardDetailList: serverTodoData.boardDetailList,
      commentList: serverTodoData.commentList,
      todoList: serverTodoData.todoList,
      date: serverTodoData.date,
    };
  }

  jobsheeeditBtnClicked = () => {
    document.location.href = "#/jobsheetedit";
  };
  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  contentAddBtnClicked = () => {
    var tempContents = this.state.contents;
    tempContents.push("");
    this.setState({
      contents: tempContents,
    });
  };
  contentInputChanged = (val, index) => {
    var tempContents = this.state.contents;
    tempContents[index] = val;
    this.setState({
      contents: tempContents,
    });
  };
  todoListClicked = (item, index) => {
    var serverTodoData = this.state.todoDataList;
    this.setState({
      todoDataList: serverTodoData.todoList,
      title: serverTodoData.todoList.title,
    });
  };

  render() {
    return (
      <>
        <CRow>
          <CCol md="12" lg="12" sm="12" xl="8">
            <CCard>
              <CCardBody>
                <CRow style={{ marginBottom: "20px" }}>
                  <CCol>
                    <h5 style={{ fontWeight: "700", color: "#141414" }}>
                      내 업무일지 기록
                    </h5>
                  </CCol>
                </CRow>
                <CForm action="" method="post" style={{ padding: "20px" }}>
                  <CFormGroup>
                    <CRow>
                      <CCol>
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
                      <CCol
                        className="text-right"
                        style={{ color: "#989898", paddingTop: "14px" }}
                      >
                        {this.state.date}
                      </CCol>
                    </CRow>
                  </CFormGroup>
                  {this.state.boardDetailList.map((todoitem, index) => (
                    <>
                      <CCol
                        xs="12"
                        style={{
                          margin: "10px 0px 10px 0px",
                          backgroundColor: "#f8f8f8",
                          padding: "12px 0px 12px 0px",
                          borderRadius: "8px",
                        }}
                      >
                        <CCol style={{ color: "#141414" }}>
                          {todoitem.content}
                          <span
                            class="badge bg-info text-white"
                            style={{ marginLeft: "8px" }}
                          >
                            {todoitem.process}
                          </span>
                        </CCol>
                      </CCol>
                    </>
                  ))}
                </CForm>

                <CCol className="text-right">
                  <CButton
                    onClick={() => this.jobsheeeditBtnClicked()}
                    active
                    aria-pressed="true"
                    style={{
                      margin: 5,
                      backgroundColor: "#FFB425",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  >
                    수정하기
                  </CButton>
                </CCol>
              </CCardBody>
            </CCard>
            <CCard>
              <CCardBody>
                {this.state.commentList.map((commentitem, commentindex) => (
                  <>
                    <CRow style={{ marginRight: "2px", marginBottom: "40px" }}>
                      <CCol xs="2">
                        <CCol
                          className="text-center"
                          style={{
                            backgroundColor: "#2BB2AC",
                            borderRadius: "20px",
                            color: "#fff",
                            padding: "8px 0px",
                            margin: 0,
                            fontWeight: 600,
                          }}
                        >
                          {commentitem.user_name}
                        </CCol>
                      </CCol>
                      <CCol
                        xs="10"
                        style={{
                          backgroundColor: "#f8f8f8",
                          borderRadius: "8px",
                          color: "#141414",
                          padding: "12px 10px 10px 30px",
                        }}
                      >
                        <CRow>{commentitem.content}</CRow>
                        <CRow
                          className="text-right"
                          style={{
                            color: "#989898",
                            marginTop: "8px",
                            lineHeight: "26px",
                          }}
                        >
                          {commentitem.date}
                          <CButton
                            active
                            size="sm"
                            aria-pressed="true"
                            style={{
                              margin: "0px 6px 0px 18px",
                              backgroundColor: "#fff",
                              color: "#141414",
                            }}
                          >
                            삭제
                          </CButton>
                          <CButton
                            active
                            size="sm"
                            color="light"
                            aria-pressed="true"
                            style={{
                              margin: "0px 0px 0px 6px",
                              backgroundColor: "#fff",
                              color: "#141414",
                            }}
                          >
                            수정
                          </CButton>
                        </CRow>
                      </CCol>
                    </CRow>
                  </>
                ))}
                <CRow>
                  <CCol style={{ color: "#141414", marginBottom: "10px" }}>
                    댓글쓰기
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CTextarea
                      style={{ color: "#141414", borderRadius: "6px" }}
                      name="textarea-input"
                      id="textarea-input"
                      rows="3"
                      placeholder="내용을 입력해 주세요."
                    />
                  </CCol>
                  <CRow className="text-right">
                    <CButton
                      active
                      aria-pressed="true"
                      style={{
                        marginRight: "16px",
                        padding: "28px 28px",
                        borderRadius: "6px",
                        backgroundColor: "#FFB425",
                        border: "0px",
                        color: "#fff",
                      }}
                    >
                      댓글 등록
                    </CButton>
                  </CRow>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="12" md="12" lg="12" xl="4">
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol>
                    <h5
                      style={{
                        marginBottom: "20px",
                        fontWeight: "700",
                        color: "#141414",
                      }}
                    >
                      오늘 할 일
                    </h5>
                  </CCol>
                  <CCol xs="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">전체</option>
                      <option value="1">완료</option>
                      <option value="2">지연중</option>
                      <option value="3">진행중</option>
                      <option value="3">대기중</option>
                    </CSelect>
                  </CCol>
                </CRow>

                {this.state.todoList.map((todaData, index) => (
                  <>
                    <CRow style={{ margin: "30px 10px 16px 10px" }}>
                      <CRow xs="1">
                        <span
                          class="badge bg-warning text-white"
                          style={{
                            marginTop: "2px",
                            padding: "6px 6px 6px 6px",
                          }}
                        >
                          {todaData.status}
                        </span>
                      </CRow>
                      <CCol
                        className="text-left"
                        style={{ fontWeight: "700", fontSize: "16px" }}
                      >
                        {todaData.title}
                      </CCol>
                    </CRow>
                    {todaData.tododetailList.map((detailitem, detailindex) => (
                      <>
                        <CRow style={{ margin: "2px 6px 2px 6px" }}>
                          <CCol
                            xs="12"
                            className="hover1"
                            style={{
                              marginBottom: "10px",
                              padding: "12px 0px 12px 0px",
                              borderRadius: "8px",
                            }}
                          >
                            <CCol style={{ color: "#141414" }}>
                              {detailitem.content}
                              <span
                                style={{ marginLeft: "10px" }}
                                class="badge bg-secondary text-white"
                              >
                                {detailitem.process}
                              </span>
                            </CCol>
                          </CCol>
                        </CRow>
                      </>
                    ))}
                  </>
                ))}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default JobSheetWrite;

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
