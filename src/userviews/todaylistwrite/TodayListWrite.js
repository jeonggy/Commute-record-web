import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CInputCheckbox,
  CForm,
  CFormGroup,
  CSelect,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CTooltip,
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
  ],
};

const teams = [
  {
    team_name: "개발팀",
    memberList: [
      {
        name: "육태섭",
        position: "대표",
      },
      {
        name: "김재신",
        position: "이사",
      },
      {
        name: "우재민",
        position: "개발자",
      },
    ],
  },
  {
    team_name: "디자인팀",
    memberList: [
      {
        name: "정가연",
        position: "디자이너",
      },
      {
        name: "정예은",
        position: "디자이너",
      },
    ],
  },
  {
    team_name: "럭스포",
    memberList: [
      {
        name: "김아라",
        position: "대표",
      },
      {
        name: "허다원",
        position: "대리",
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
class ListWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      startDate: new Date(),
      contents: [""],
      teams: teams,
      selectedTeamMemberList: [],
      partnerList: [],
      todoData: serverTodoData,
      memberList: teams.memberList,
    };
  }

  // mapAddBtnClicked = () => {
  //     document.location.href = '#/chargermap';
  // }

  writeBtnClicked = () => {
    document.location.href = "#/listwrite2";
  };

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  memberBtnClicked = () => {
    this.setState({
      isAddModalOpen: true,
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
  registerBtnClicked = () => {
    // alert(JSON.stringify(this.state.contents));
  };

  teamSelectChanged = (val) => {
    // 팀을 선택했을때 호출되는 함수로, 인자로 인덱스를 받아온다. -> 받아온 인덱스로, 선택된 팀을 찾아서, 그 팀의 멤버리스트를 뽑아서, this.state.selectedTeamMemberList
    var team = this.state.teams[val];
    this.setState({
      selectedTeamMemberList: team.memberList,
    });
  };

  memberSelectBtnClicked = (member) => {
    alert(JSON.stringify(member));
    var partnerList = this.state.partnerList;
    partnerList.push(member);
    this.setState({
      partnerList: partnerList,
    });
  };
  writeBtnClicked = () => {
    document.location.href = "#/listwrite2";
  };

  deletAlert = (e) => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      html: "참여자일 경우, 오늘 할 일의 참여자 리스트에서 제외됩니다.<br>삭제하시려면 [삭제] 버튼을 눌러주세요.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D5D5D5",
      cancelButtonColor: "#666EF0",
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
          <CCol xs="12">
            <CCard>
              <CCardBody>
                <CRow style={{ marginBottom: "20px" }}>
                  <CCol>
                    <h5 style={{ fontWeight: "700", color: "#141414" }}>
                      오늘 할 일
                    </h5>
                  </CCol>
                </CRow>
                <CForm action="" method="post" style={{ padding: "4px" }}>
                  <CCol
                    style={{
                      backgroundColor: "#f8f8f8",
                      borderRadius: "8px",
                      padding: "20px 10px",
                    }}
                  >
                    {this.state.todoData.todoList.map((todo, todoindex) => (
                      <>
                        <CRow
                          style={{ marginLeft: "10px", marginRight: "0px" }}
                        >
                          <h5
                            style={{
                              color: "#141414",
                              fontWeight: "700",
                              paddingBottom: "2px",
                            }}
                          >
                            <span
                              style={{ marginRight: "10px" }}
                              class="badge bg-secondary text-white"
                            >
                              {todo.status}
                            </span>
                            {todo.title}
                          </h5>
                          <CCol className="text-right">{todo.due_date}</CCol>
                        </CRow>
                        {todo.tododetailList.map(
                          (todocontent, todocontentindex) => (
                            <CCol
                              style={{ color: "#141414", paddingTop: "14px" }}
                            >
                              {todocontent.content}
                              <span
                                style={{ marginLeft: "10px" }}
                                class="badge bg-secondary text-white"
                              >
                                {todocontent.process}
                              </span>
                            </CCol>
                          )
                        )}
                      </>
                    ))}
                  </CCol>
                  <CFormGroup>
                    <CRow style={{ marginTop: "70px", marginBottom: "10px" }}>
                      <CCol
                        xs="3"
                        md="3"
                        lg="2"
                        xl="1"
                        style={{ color: "#989898" }}
                      >
                        <CLabel className="text-right">참여자</CLabel>
                      </CCol>
                      <CCol>
                        <CButton color="light">본인</CButton>
                      </CCol>
                    </CRow>
                    <CRow style={{ marginBottom: "20px" }}>
                      <CCol
                        xs="4"
                        md="2"
                        lg="2"
                        xl="1"
                        style={{ color: "#989898" }}
                      ></CCol>

                      <CCol>
                        {/* <CTooltip content={this.state.memberList.position} placement="right">
                                                <CButton color="light">홍길동</CButton>
                                            </CTooltip> */}

                        {teams.map((teamsmember, teamsindex) => (
                          <>
                            <CRow style={{ marginTop: "30px" }}>
                              <p style={{ color: "#989898" }}>
                                {teamsmember.team_name}
                              </p>
                            </CRow>
                            {teamsmember.memberList.map((member, index) => (
                              <CRow
                                style={{
                                  marginBottom: "10px",
                                  marginLeft: "1px",
                                }}
                              >
                                <CTooltip
                                  content={member.position}
                                  placement="right"
                                >
                                  <CButton color="light">{member.name}</CButton>
                                </CTooltip>
                              </CRow>
                            ))}
                          </>
                        ))}
                      </CCol>
                    </CRow>
                    <CRow style={{ marginBottom: "50px", marginLeft: "116px" }}>
                      {this.state.partnerList.map((member, index) => (
                        <CCol xs="8">
                          <CButton style={{ marginTop: 3 }} color="success">
                            {member.name}
                          </CButton>
                        </CCol>
                      ))}
                    </CRow>
                  </CFormGroup>
                  <CFormGroup style={{ marginTop: "30px" }}>
                    <CRow>
                      <CCol
                        xs="3"
                        md="3"
                        lg="2"
                        xl="1"
                        style={{ color: "#989898" }}
                      >
                        <CLabel className="text-right" htmlFor="select">
                          기한
                        </CLabel>
                      </CCol>
                      <CCol xs="6">
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
                  <CFormGroup style={{ marginTop: "50px" }}>
                    <CRow>
                      <CCol
                        xs="3"
                        md="3"
                        lg="2"
                        xl="1"
                        style={{ color: "#989898" }}
                      >
                        <CLabel className="text-right" htmlFor="select">
                          시간(선택)
                        </CLabel>
                      </CCol>
                      <CCol>
                        <p
                          className="text-left"
                          style={{ color: "#141414", fontSize: "14px" }}
                        >
                          오후 17:00 까지
                        </p>
                      </CCol>
                    </CRow>
                  </CFormGroup>
                </CForm>

                <CCol className="text-right" style={{ marginTop: "60px" }}>
                  <CButton
                    active
                    color="light"
                    aria-pressed="true"
                    style={{ margin: 5 }}
                    onClick={(e) => this.deletAlert()}
                  >
                    삭제하기
                  </CButton>
                  <CButton
                    active
                    color="info"
                    aria-pressed="true"
                    style={{ margin: 5 }}
                    onClick={() => this.writeBtnClicked()}
                  >
                    수정하기
                  </CButton>
                </CCol>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CModal
          centered
          show={this.state.isAddModalOpen}
          onClose={() => this.setState({ isAddModalOpen: false })}
        >
          <CModalBody>
            <CRow style={{ marginBottom: "20px" }}>
              <CCol xs="8">
                <h5>참여자 추가</h5>
              </CCol>
            </CRow>
            <CRow style={{ margin: "10px 0px 10px 0px" }}>
              <CCol xs="4" style={{ color: "#989898" }}>
                부서
              </CCol>
              <CCol xs="8">
                <CSelect
                  onChange={(e) => this.teamSelectChanged(e.target.value)}
                  custom
                  name="ccstation"
                  id="ccstation"
                >
                  <option value="-1">선택</option>
                  {
                    //팀을 반복문 돌려서 옵션에 밸류랑 이름을 넣어줘야된다.
                    this.state.teams.map((team, index) => (
                      <option value={index}>{team.team_name}</option>
                    ))
                  }
                </CSelect>
              </CCol>
            </CRow>
            <CCol
              xs="12"
              style={{ margin: 2, marginLeft: "20px", marginBottom: "20px" }}
            >
              {
                //위에 선택창에서 선택된 팀의 인덱스를 받아서 팀의 멤버 리스트를 가져와서 표시
                this.state.selectedTeamMemberList.map((member, index) => (
                  <CRow>
                    <CButton
                      color="info"
                      size="sm"
                      style={{ margin: 4 }}
                      onClick={() => this.memberSelectBtnClicked(member)}
                    >
                      {member.name}
                    </CButton>
                    <h6
                      style={{
                        marginLeft: "10px",
                        paddingTop: "8px",
                        color: "#989898",
                      }}
                      onClick={() => this.memberSelectBtnClicked(member)}
                    >
                      {member.position}
                    </h6>
                  </CRow>
                ))
              }
            </CCol>
            <CCol style={{ paddingTop: "6px" }}>
              <CFormGroup variant="custom-checkbox" inline>
                <CInputCheckbox
                  custom
                  id="inline-checkbox3"
                  name="inline-checkbox3"
                  value="option3"
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">
                  업무 부여하기
                </CLabel>
              </CFormGroup>
            </CCol>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="light"
              onClick={() => this.setState({ isAddModalOpen: false })}
            >
              취소
            </CButton>
            <CButton color="info">추가</CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  }
}

export default ListWrite;

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
