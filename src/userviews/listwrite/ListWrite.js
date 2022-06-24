import React, { Component } from "react";
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
  CInputGroupAppend,
  CInputGroup,
  CTooltip,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import DatePicker, { registerLocale } from "react-datepicker";
registerLocale("ko", ko);

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
        name: "정예은",
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

class ListWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //초기 설정
      index: 0,
      selectedItem: null,
      startDate: new Date(),
      contents: [""],
      teams: teams,
      teammemberList: teams.memberList,
      selectedTeamMemberList: [],
      partnerList: [],
      participant: [],
      modalTeamSelectValue: -1,
    };
  }

  // ['a','s','d','f','g','h'] input 형태

  closeBtnClicked = () => {
    this.setState({
      selectedItem: null,
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

  memberBtnDeleted = (index) => {
    var newPartnerList = this.state.partnerList;

    if (index == 0 && newPartnerList.length == 0) {
      //순서 상관없이 삭제
      this.setState({
        partnerList: newPartnerList,
      });
    } else {
      newPartnerList.splice(index, 1); //2개 이상일 경우 1개씩 삭제됨
      this.setState({
        partnerList: newPartnerList,
      });
    }
  };

  memberBtnClicked = () => {
    this.setState({
      isAddModalOpen: true,
    });
  };

  contentAddBtnClicked = () => {
    var tempContents = this.state.contents;
    tempContents.push(""); // + 내용추가버튼 으로 '' 빈 개체가 추가됨
    this.setState({
      // setState --> 다시 그려줌
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
  contentInputDeleted = (index) => {
    var tempContents = this.state.contents;

    if (index == 0 && tempContents.length == 1) {
      //여러개 있을 땐 순서 상관없이 삭제가 되지만 1개만 남았을 경우 입력내용만 지워진다
      tempContents[index] = ""; //input이 1개 뿐일 경우 빈 개체로 바꿈
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

  // contentInputCleared = (index) => {
  // var tempContents = this.state.contents;
  // tempContents[index] = '';                        // '' ---> this.state.contents를 빈 개체로 바꿈  '' = 빈 개체
  // this.setState({
  // contents:tempContents
  //     })
  // }

  registerBtnClicked = () => {
    // alert(JSON.stringify(this.state.contents));
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

  todaylistAddBtnClicked = () => {
    document.location.href = "#/todaylist";
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
                <CForm action="" method="post" style={{ padding: "10px" }}>
                  <CFormGroup row>
                    <CCol
                      xs="3"
                      md="3"
                      lg="2"
                      xl="1"
                      style={{ color: "#989898" }}
                    >
                      <CLabel className="text-right">제목</CLabel>
                    </CCol>
                    <CCol xs="5">
                      <CInput
                        style={{ borderRadius: "6px", color: "#141414" }}
                        placeholder="필수 입력"
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup>
                    {this.state.contents.map((content, index) => (
                      <>
                        <CRow style={{ marginTop: 5 }}>
                          <CCol
                            xs="3"
                            md="3"
                            lg="2"
                            xl="1"
                            style={{ color: "#989898" }}
                          >
                            <CLabel className="text-right">
                              {index == 0 ? "내용" : " "}
                            </CLabel>
                          </CCol>
                          <CCol xs="9">
                            <CFormGroup>
                              <div className="controls">
                                <CInputGroup>
                                  <CInput
                                    size="16"
                                    type="text"
                                    style={{
                                      borderRadius: "6px",
                                      color: "#141414",
                                    }}
                                    placeholder="필수 입력"
                                    value={content}
                                    onChange={(event) =>
                                      this.contentInputChanged(
                                        event.target.value,
                                        index
                                      )
                                    }
                                  />
                                  {/* event는 onChange, target은 cinput, value는 content */}
                                  <CInputGroupAppend>
                                    {/* <CButton
                                                                        onClick={(e)=>this.contentInputCleared(index)}
                                                                        color="light"
                                                                        className="card-header-action btn-close" >
                                                                        <CIcon name="cil-x" />
                                                                    </CButton>  */}
                                    <CButton
                                      onClick={(e) =>
                                        this.contentInputDeleted(index)
                                      }
                                      className="card-header-action btn-close"
                                      style={{
                                        paddingTop: "20px",
                                        marginLeft: "8px",
                                      }}
                                    ></CButton>
                                  </CInputGroupAppend>
                                </CInputGroup>
                              </div>
                            </CFormGroup>
                          </CCol>
                        </CRow>
                      </>
                    ))}

                    <CRow style={{ marginBottom: "50px" }}>
                      <CCol
                        xs="4"
                        md="2"
                        lg="2"
                        xl="1"
                        style={{ color: "#989898" }}
                      ></CCol>
                      <CCol xs="5">
                        <CButton
                          active
                          color="light"
                          aria-pressed="true"
                          style={{ marginTop: "14px" }}
                          onClick={() => this.contentAddBtnClicked()}
                        >
                          + 내용 추가
                        </CButton>
                      </CCol>
                    </CRow>
                  </CFormGroup>

                  <CFormGroup>
                    <CRow style={{ marginTop: "50px" }}>
                      <CCol
                        xs="3"
                        md="3"
                        lg="2"
                        xl="1"
                        style={{ color: "#989898" }}
                      >
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
                              style={{
                                marginTop: 3,
                                padding: "4px 4px 4px 10px",
                              }}
                              color="warning"
                              onClick={() => this.memberBtnDeleted(index)}
                            >
                              {member.name}
                              <CButton
                                style={{ paddingLeft: "10px" }}
                                className="card-header-action text-white"
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
                </CForm>
                <CRow>
                  <CCol className="text-right" style={{ marginTop: "60px" }}>
                    <CButton
                      active
                      color="light"
                      aria-pressed="true"
                      style={{ margin: 5, borderRadius: "6px" }}
                      onClick={() => this.todaylistAddBtnClicked()}
                    >
                      취소하기
                    </CButton>
                    <CButton
                      active
                      aria-pressed="true"
                      style={{
                        margin: 5,
                        backgroundColor: "#FFB425",
                        color: "#fff",
                        borderRadius: "6px",
                      }}
                      onClick={() => this.registerBtnClicked()}
                    >
                      등록하기
                    </CButton>
                  </CCol>
                </CRow>
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
                      backgroundColor: "#F4F5F7",
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
                          style={{ marginRight: "10px", marginLeft: "6px" }}
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
