import React, { Component } from "react";
import SliderBar from "../sliderbar/SliderBar";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CInput,
  CForm,
  CFormGroup,
  CSelect,
} from "@coreui/react";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import DatePicker, { registerLocale } from "react-datepicker";
registerLocale("ko", ko);

const serverTodoData = {
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
class JobSheetEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      startDate: new Date(),
      contents: [
        {
          content: "전기자동차 앱 매니저 웹 작업",
          process: 30,
        },
        {
          content: "말타 말그림",
          process: 10,
        },
      ],
      todoData: serverTodoData,
    };
  }

  closeBtnClicked = () => {
    this.setState({
      selectedItem: null,
    });
  };

  ccloseBtnClicked = () => {
    document.location.href = "#/jobsheetdetails";
  };

  registrationBtnClicked = () => {
    document.location.href = "#/jobsheetdetails";
  };

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  contentAddBtnClicked = () => {
    var tempContents = this.state.contents;
    tempContents.push({
      content: "내용을 입력하세요",
      process: 0,
    });
    this.setState({
      contents: tempContents,
    });
  };
  contentInputChanged = (val, index) => {
    var tempContents = this.state.contents;
    tempContents[index].content = val;
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

  plusBtnClicked = (item, index) => {
    var tempContents = this.state.contents;
    var isFinished = false;

    for (let index = 0; index < tempContents.length; index++) {
      var content = tempContents[index];
      if (content.content.length == 0) {
        tempContents[index] = item;
        isFinished = true;
        break;
      } else {
      }
    }

    if (isFinished == false) {
      tempContents.push(item);
    }

    this.setState({
      contents: tempContents,
    });
  };
  contentInputDeleted = (index) => {
    var tempContents = this.state.contents; //const(상수:변하지 않는 함수)를 변경하려면 this.state(초기설정)을 넣어주고 var(변수:변하는 함수)에 넣는다 (const(원본)을 변경할 수 없어서 const를 복사(var)하는 개념)

    if (index == 0 && tempContents.length == 1) {
      //여러개 있을 땐 순서 상관없이 삭제가 되지만 1개만 남았을 경우 입력내용만 지워진다
      tempContents[index].content = "내용을 입력하세요"; //input이 1개 뿐일 경우 빈 개체로 바꿈
      this.setState({
        contents: tempContents,
      });
    } else {
      tempContents.splice(index, 1); //2개 이상일 경우 1개씩 삭제됨
      this.setState({
        contents: tempContents,
      });
    }
  };

  sliderChanged = (value, index) => {
    var contents = this.state.contents;
    contents[index].process = value;
    this.setState({
      contents: contents,
    });
  };

  deletAlert = (e) => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      html: "삭제된 업무일지는 복구할 수 없습니다.<br>그래도 삭제하시려면 [삭제] 버튼을 눌러주세요.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#666EF0",
      cancelButtonColor: "#D5D5D5",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.value) {
        document.getElementById("deleteId").remove();
        Swal.fire("삭제완료", "오늘 할 일 삭제가 완료되었습니다.", "success");
      }
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
                      내 업무일지 수정
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
                    </CRow>
                  </CFormGroup>

                  {this.state.contents.map((content, index1) => (
                    <>
                      <CCol
                        xs="12"
                        className="text-right"
                        style={{ marginTop: "10px" }}
                      >
                        <CButton
                          size="sm"
                          active
                          color="light"
                          aria-pressed="true"
                          onClick={(e) => this.contentInputDeleted(index1)}
                        >
                          삭제
                        </CButton>
                      </CCol>

                      <CCol
                        xs="12"
                        sm="12"
                        md="12"
                        lg="12"
                        xl="12"
                        style={{ marginTop: "16px" }}
                      >
                        <CInput
                          style={{ borderRadius: "6px", color: "#141414" }}
                          placeholder="오늘 할 일에서 불러오거나 내용을 입력하세요"
                          value={content.content}
                          onChange={(event) =>
                            this.contentInputChanged(event.target.value, index1)
                          }
                        />
                      </CCol>
                      <CCol
                        xs="12"
                        sm="12"
                        md="12"
                        lg="12"
                        xl="12"
                        style={{ marginBottom: "40px", marginLeft: "6px" }}
                      >
                        <SliderBar
                          value={content.process}
                          step={10}
                          onChange={(e) =>
                            this.sliderChanged(e.target.value, index1)
                          }
                        />
                      </CCol>
                    </>
                  ))}
                  <CCol xs="5">
                    <CButton
                      onClick={() => this.contentAddBtnClicked()}
                      active
                      color="light"
                      aria-pressed="true"
                      style={{ marginTop: "14px" }}
                    >
                      + 내용 추가
                    </CButton>
                  </CCol>
                </CForm>
                <CRow>
                  <CCol className="text-left" style={{ marginTop: "50px" }}>
                    <CButton
                      active
                      color="light"
                      aria-pressed="true"
                      style={{ margin: 5, borderRadius: "6px" }}
                      onClick={(e) => this.deletAlert()}
                    >
                      삭제하기
                    </CButton>
                  </CCol>
                  <CCol className="text-right" style={{ marginTop: "50px" }}>
                    <CButton
                      active
                      color="light"
                      aria-pressed="true"
                      style={{ margin: 5, borderRadius: "6px" }}
                      onClick={() => this.ccloseBtnClicked()}
                    >
                      취소하기
                    </CButton>
                    <CButton
                      active
                      aria-pressed="true"
                      style={{
                        margin: 5,
                        borderRadius: "6px",
                        backgroundColor: "rgb(102, 110, 240)",
                        color: "#fff",
                      }}
                      onClick={() => this.registrationBtnClicked()}
                    >
                      수정하기
                    </CButton>
                  </CCol>
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
                        fontWeight: 700,
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
                    </CSelect>
                  </CCol>
                </CRow>

                {this.state.todoData.todoList.map((todaData, index) => (
                  <>
                    <CRow style={{ margin: "30px 0px 6px 10px" }}>
                      <CRow xs="1">
                        <span
                          class="badge bg-warning text-white"
                          style={{
                            padding: "6px 6px 6px 6px",
                            marginBottom: "8px",
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
                      <CCol className="text-right">
                        <CButton
                          onClick={() => this.memberBtnClicked()}
                          active
                          color="light"
                          aria-pressed="true"
                          style={{ fontSize: "12px" }}
                        >
                          전체 가져오기
                        </CButton>
                      </CCol>
                    </CRow>
                    {todaData.tododetailList.map((detailitem, detailindex) => (
                      <>
                        <CRow>
                          <CCol
                            style={{
                              borderRadius: "8px",
                              padding: "12px 0px",
                              margin: "4px 8px",
                              backgroundColor: "#f8f8f8",
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

                          <CButton
                            style={{
                              backgroundColor: "rgb(102, 110, 240)",
                              color: "#fff",
                              margin: "4px 8px",
                            }}
                            onClick={() =>
                              this.plusBtnClicked(detailitem, detailindex)
                            }
                            active
                            aria-pressed="true"
                          >
                            +
                          </CButton>
                          {/* 여기서 버튼을 onClick하면 함수를 호출하면서 detailitem을 인자로 보냄 . 그 함수에서 받은 인자를 this.state.contents에 입력을 해줘야함 */}
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

export default JobSheetEdit;

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
