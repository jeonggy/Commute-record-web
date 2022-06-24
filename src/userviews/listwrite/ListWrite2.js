import React, { Component } from "react";
import SliderBar from "../sliderbar/SliderBar";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CInput,
  CInputCheckbox,
  CForm,
  CFormGroup,
  CSelect,
  CLabel,
  CModal,
  CModalBody,
  CTooltip,
} from "@coreui/react";
import Swal from "sweetalert2";
import CIcon from "@coreui/icons-react";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import DatePicker, { registerLocale } from "react-datepicker";
registerLocale("ko", ko);

const serverTodoData = {
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
};

const teams = [
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
        name: "정가연",
        position: "디자이너",
      },
    ],
  },
  {
    team_name: "럭스포",
    memberList: [
      {
        user_id: 6,
        name: "김아라",
        position: "대표",
      },
      {
        user_id: 7,
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
class ListWrite2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selectedItem: null,
      startDate: new Date(),
      contents: [
        {
          content: "",
          process: 0,
        },
      ],
      todoData: serverTodoData,

      // todoList: serverTodoData.tododetailList,
      // title: serverTodoData.title,

      teams: teams,
      teammemberList: teams.memberList,
      selectedTeamMemberList: [],
      partnerList: [],
      participant: [],
      modalTeamSelectValue: -1,
    };
  }

  componentDidMount = () => {
    this.getData();

    // //todoData: serverTodoData,
    // this.state.todoData.tododetailList;
    // this.state.todoData.title;

    // // todoList: serverTodoData.tododetailList,
    // // title: serverTodoData.title,
    // this.state.todoList;
    // this.state.title;
  };

  getData = () => {
    //서버로부터 데이터를 받은 함수를 넣는다
  };

  closeBtnClicked = () => {
    document.location.href = "#/jobsheetdetails";
  };

  memberBtnClicked = () => {
    this.setState({
      isAddModalOpen: true,
    });
  };

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };
  teamSelectChanged = (val) => {
    // 팀을 선택했을때 호출되는 함수로, 인자로 인덱스를 받아온다. -> 받아온 인덱스로, 선택된 팀을 찾아서, 그 팀의 멤버리스트를 뽑아서, this.state.selectedTeamMemberList
    var team = this.state.teams[val];

    this.setState({
      selectedTeamMemberList: JSON.parse(JSON.stringify(team.memberList)),
      modalTeamSelectValue: val, //팀 선택한 값으로 지정, 이게 없으면 계속 전체로 고정됨
    });
  };

  memberSelectBtnClicked = (memberList) => {
    // alert(JSON.stringify(member));
    var partnerList = this.state.partnerList;

    for (let index = 0; index < memberList.length; index++) {
      const element = memberList[index];
      if (element.checked == true) {
        this.checkParticipant(element);
        // partnerList.push(element);
      }
    }

    this.setState({
      partnerList: partnerList,
      isAddModalOpen: false,
      modalTeamSelectValue: -1,
      selectedTeamMemberList: [],
    });
  };

  //참여자 중복방지
  checkParticipant = (newMember) => {
    //기존 참여자 리스트에 추가할 새 멤버를 인자로 가져옴
    var newPartnerList = this.state.partnerList; //기존 참여자 리스트를 가져온다.

    var exist = false;

    for (let index = 0; index < newPartnerList.length; index++) {
      //중복 체크해서 중복인 경우는 exist = true 로 바꿔준다.
      const element = newPartnerList[index]; //element는 기존 참여자 개체
      if (element.user_id === newMember.user_id) {
        // 새로운 멤버의 user_id로와 기존 멤버의 user_id로 중복을 체크한다.
        exist = true;
        break;
      }
    }
    //중복이 아니면 파트너 리스트에 새로운 멤버를 추가한다.
    if (exist == false) {
      newPartnerList.push(newMember);
    }
    //파트너 리스트를 그려줘야한다. 그려주기 위해서 this.state.partnerList를 새로 추가된 리스트로 바꿔준다.
    this.setState({
      partnerList: newPartnerList,
    });
  };

  todoListClicked = (item, index) => {
    var serverTodoData = this.state.todoList;
    this.setState({
      todoList: serverTodoData.tododetailList,
      title: serverTodoData.title,
    });
  };

  contentAddBtnClicked = () => {
    var tempContents = this.state.todoData.tododetailList;
    tempContents.push({
      content: "내용을 입력하세요",
      process: 0,
    });
    this.setState({
      contents: tempContents,
    });
  };
  contentInputChanged = (val, index) => {
    var tempContents = this.state.todoData.tododetailList;
    tempContents[index].content = val;
    this.setState({
      contents: tempContents,
    });
  };
  contentInputDeleted = (index) => {
    var tempContents = this.state.todoData.tododetailList; //const(상수:변하지 않는 함수)를 변경하려면 this.state(초기설정)을 넣어주고 var(변수:변하는 함수)에 넣는다 (const(원본)을 변경할 수 없어서 const를 복사(var)하는 개념)

    if (index == 0 && tempContents.length == 1) {
      //여러개 있을 땐 순서 상관없이 삭제가 되지만 1개만 남았을 경우 입력내용만 지워진다
      tempContents[index].content = "내용을 입력하세요"; //input이 1개 뿐일 경우 빈 개체로 바꿈
      this.setState({
        tododetailList: tempContents,
      });
    } else {
      tempContents.splice(index, 1); //2개 이상일 경우 1개씩 삭제됨
      this.setState({
        tododetailList: tempContents,
      });
    }
  };
  sliderChanged = (value, index) => {
    var contents = this.state.todoData.tododetailList;
    contents[index].process = value;
    this.setState({
      tododetailList: contents,
    });
  };
  memberCheckBoxChanged = (checked, index) => {
    var tempList = this.state.selectedTeamMemberList;

    var selectedMember = tempList[index];
    selectedMember.checked = checked;
    //key임     true임      -> (checked, index)의 checked는 true임
    this.setState({
      selectedTeamMemberList: tempList, //key와 true(값)이 생겼기 때문에
    });
  };

  memberBtnDeleted = (index) => {
    var newPartnerList = this.state.partnerList;

    newPartnerList.splice(index, 1); //2개 이상일 경우 1개씩 삭제됨
    this.setState({
      partnerList: newPartnerList,
    });
  };

  deletAlert = (e) => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      html: "참여자일 경우, 오늘 할 일의 참여자 리스트에서 제외됩니다.<br>삭제하시려면 [삭제] 버튼을 눌러주세요.",
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

  //     selectParticipant = () => {
  //     var array = [1,2,3,4,5,6,7,8,9,90,29];
  //     var newList = [];

  //     var exist = false;

  //     for (let index = 0; index < array.length; index++) {
  //         const element = array[index];
  //         if(element==19){
  //             exist = true;
  //             break;
  //         }
  //     }

  //     if(exist==false){
  //         newList.push(19);
  //     }

  // }

  render() {
    return (
      <>
        <CRow>
          <CCol xs="12">
            <CCard>
              <CCardBody style={{ paddingLeft: "20px" }}>
                <CRow style={{ marginBottom: "20px" }}>
                  <CCol>
                    <h5 style={{ fontWeight: "700", color: "#141414" }}>
                      오늘 할 일
                    </h5>
                  </CCol>
                </CRow>
                <CCol
                  style={{
                    backgroundColor: "#f8f8f8",
                    padding: "16px 16px",
                    borderRadius: "16px",
                  }}
                >
                  <CRow>
                    <CRow style={{ marginLeft: "4px" }}>
                      <span
                        class="badge bg-warning text-white"
                        style={{ marginTop: "4px", padding: "6px 6px 6px 6px" }}
                      >
                        {this.state.todoData.status}
                      </span>
                    </CRow>
                    <CCol
                      className="text-left"
                      style={{
                        color: "#141414",
                        fontWeight: "700",
                        fontSize: "18px",
                      }}
                    >
                      {this.state.todoData.title}
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol style={{ color: "#989898", paddingTop: "6px" }}>
                      {this.state.todoData.due_date}
                    </CCol>
                  </CRow>

                  {this.state.todoData.tododetailList.map((content, index) => (
                    <CCol
                      style={{
                        boxShadow: "2px 2px 16px 4px #EDEDED",
                        borderRadius: "16px",
                        margin: "14px 0px",
                        backgroundColor: "#fff",
                      }}
                    >
                      <CForm
                        action=""
                        method="post"
                        style={{ padding: "10px" }}
                      >
                        <CFormGroup>
                          <CCol
                            xs="12"
                            className="text-right"
                            style={{ marginTop: "8px" }}
                          >
                            <CButton
                              size="sm"
                              active
                              color="light"
                              aria-pressed="true"
                              onClick={(e) => this.contentInputDeleted(index)}
                            >
                              삭제
                            </CButton>
                          </CCol>
                          <CRow>
                            <CCol
                              xs="12"
                              sm="12"
                              lg="12"
                              xl="6"
                              style={{ margin: "36px 0px 20px 0px" }}
                            >
                              <CInput
                                style={{
                                  borderRadius: "6px",
                                  color: "#141414",
                                }}
                                placeholder="필수 입력"
                                value={content.content}
                                onChange={(event) =>
                                  this.contentInputChanged(
                                    event.target.value,
                                    index
                                  )
                                }
                              />
                            </CCol>
                            <CCol
                              xs="12"
                              sm="12"
                              lg="12"
                              xl="4"
                              style={{ marginLeft: "16px" }}
                            >
                              <SliderBar
                                value={content.process}
                                step={10}
                                onChange={(e) =>
                                  this.sliderChanged(e.target.value, index)
                                }
                              />
                            </CCol>
                          </CRow>
                        </CFormGroup>
                      </CForm>
                    </CCol>
                  ))}
                </CCol>

                {/* {
                                            this.state.contents.map((content, index) => (
                                                <>
                                                    <CCol xs="12" className='text-right'>
                                                        <CButton size='sm' active color="light" aria-pressed="true">삭제</CButton>
                                                    </CCol>
                                                    <CRow style={{ marginBottom: '50px' }}>
                                                        <CCol xs="6" sm='3' lg='12' xl='6' style={{ margin: '36px 0px 20px 0px' }}>
                                                            <CInput placeholder="필수 입력" onChange={(event) => this.contentInputChanged(event.target.value, index)} />
                                                        </CCol>
                                                        <CCol xs="6" sm='3' lg='12' xl='4' style={{ marginLeft: '20px' }}>
                                                            <SliderBar />
                                                        </CCol>
                                                    </CRow>
                                                </>
                                            ))
                                        } */}

                <CForm action="" method="post" style={{ padding: "10px" }}>
                  <CFormGroup>
                    <CRow>
                      <CCol>
                        <CButton
                          active
                          color="light"
                          aria-pressed="true"
                          style={{ marginTop: "30px", marginBottom: "10px" }}
                          onClick={() => this.contentAddBtnClicked()}
                        >
                          + 내용 추가
                        </CButton>
                      </CCol>
                    </CRow>
                  </CFormGroup>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CCard>
          <CCardBody>
            <CFormGroup>
              <CRow style={{ marginTop: "10px" }}>
                <CCol xs="3" md="3" lg="2" xl="1" style={{ color: "#989898" }}>
                  <CLabel className="text-right">참여자</CLabel>
                </CCol>
                <CCol style={{ paddingTop: "6px" }}>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox1"
                      name="inline-checkbox1"
                      value="option1"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox1"
                    >
                      본인
                    </CLabel>
                  </CFormGroup>
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
                <CCol xs="5">
                  <CButton
                    onClick={() => this.memberBtnClicked()}
                    active
                    aria-pressed="true"
                    style={{
                      marginTop: "14px",
                      backgroundColor: "rgb(102, 110, 240)",
                      color: "#fff",
                      borderRadius: "40px",
                    }}
                  >
                    + 참여자 추가
                  </CButton>
                </CCol>
              </CRow>
              <CRow style={{ marginBottom: "50px", marginLeft: "116px" }}>
                {this.state.partnerList.map((member, index) => (
                  <CCol xs="8">
                    <CTooltip content={member.position} placement="left">
                      <CButton
                        className="text-white"
                        style={{ marginTop: 3, padding: "4px 4px 4px 10px" }}
                        color="warning"
                      >
                        {member.name}
                        <CButton
                          style={{ paddingLeft: "10px" }}
                          className="card-header-action text-white"
                          onClick={() => this.memberBtnDeleted(index)}
                        >
                          <CIcon name="cil-x" />
                        </CButton>
                      </CButton>
                    </CTooltip>
                  </CCol>
                ))}
              </CRow>
            </CFormGroup>
            <CFormGroup style={{ marginTop: "30px" }}>
              <CRow>
                <CCol xs="3" md="3" lg="2" xl="1" style={{ color: "#989898" }}>
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
                <CCol xs="3" md="3" lg="2" xl="1" style={{ color: "#989898" }}>
                  <CLabel className="text-right" htmlFor="select">
                    시간(선택)
                  </CLabel>
                </CCol>
                <CCol>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox1"
                      name="inline-checkbox1"
                      value="option1"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox1"
                    >
                      오전
                    </CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox2"
                      name="inline-checkbox2"
                      value="option2"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox2"
                    >
                      오후
                    </CLabel>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="3" md="3" lg="2" xl="1"></CCol>
                <CCol xs="2">
                  <CSelect custom name="select" id="select">
                    <option value="0">시 선택</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                    <option value="3">6</option>
                    <option value="3">7</option>
                    <option value="3">8</option>
                    <option value="3">9</option>
                    <option value="3">10</option>
                    <option value="3">11</option>
                    <option value="3">12</option>
                  </CSelect>
                </CCol>
                <CCol xs="2">
                  <CSelect custom name="select" id="select">
                    <option value="0">분 선택</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                  </CSelect>
                </CCol>
              </CRow>
            </CFormGroup>
            <CRow>
              <CCol className="text-left" style={{ marginTop: "60px" }}>
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
              <CCol className="text-right" style={{ marginTop: "60px" }}>
                <CButton
                  active
                  color="light"
                  aria-pressed="true"
                  style={{ margin: 5, borderRadius: "6px" }}
                  onClick={() => this.closeBtnClicked()}
                >
                  취소하기
                </CButton>
                <CButton
                  active
                  aria-pressed="true"
                  style={{
                    margin: 5,
                    borderRadius: "6px",
                    backgroundColor: "#FFB425",
                    color: "#fff",
                  }}
                >
                  등록하기
                </CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

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
              <CCol xs="8" style={{ marginBottom: "16px" }}>
                <CSelect
                  onChange={(e) => this.teamSelectChanged(e.target.value)}
                  custom
                  name="ccstation"
                  id="ccstation"
                  value={this.state.modalTeamSelectValue}
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
            <CCol xs="12" style={{ margin: 0, marginBottom: "20px" }}>
              {
                //위에 선택창에서 선택된 팀의 인덱스를 받아서 팀의 멤버 리스트를 가져와서 표시
                this.state.selectedTeamMemberList.map((member, index) => (
                  <CRow
                    className="inline-block"
                    style={{
                      padding: "12px",
                      backgroundColor: "#f8f8f8",
                      borderRadius: "6px",
                      margin: "8px 0px 8px 0px",
                    }}
                  >
                    <CFormGroup
                      variant="custom-checkbox"
                      inline
                      className="inline-block"
                    >
                      <CInputCheckbox
                        custom
                        id={"inline-checkbox4" + index}
                        onChange={(e) =>
                          this.memberCheckBoxChanged(e.target.checked, index)
                        }
                        checked={member.checked}
                        // name="inline-checkbox4"
                      />
                      <CLabel
                        variant="custom-checkbox"
                        htmlFor={"inline-checkbox4" + index}
                      >
                        <CButton
                          color="info"
                          size="sm"
                          style={{
                            marginRight: "10px",
                            marginLeft: "6px",
                            fontSize: "14px",
                            fontWeight: "bold",
                          }}
                        >
                          {member.name}
                        </CButton>
                        {member.position}
                      </CLabel>
                      {/* onClick={() => this.memberSelectBtnClicked(member)} */}
                    </CFormGroup>
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
          <CCol className="text-right" style={{ margin: 0, padding: 0 }}>
            <CButton
              color="light"
              style={{ margin: "0px 0px 20px 0px" }}
              onClick={() =>
                this.setState({
                  isAddModalOpen: false,
                  modalTeamSelectValue: -1,
                  selectedTeamMemberList: [],
                })
              }
            >
              취소
            </CButton>
            <CButton
              color="info"
              style={{ margin: "0px 22px 20px 10px" }}
              onClick={() =>
                this.memberSelectBtnClicked(this.state.selectedTeamMemberList)
              }
            >
              추가
            </CButton>
          </CCol>
        </CModal>
      </>
    );
  }
}

export default ListWrite2;

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
