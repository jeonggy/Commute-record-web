import React, { Component } from "react";
import { CCard, CCardBody, CCol, CRow, CButton, CSelect } from "@coreui/react";
import MembersCalendarView from "./MembersCalendarView";

import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import DatePicker, { registerLocale } from "react-datepicker";
registerLocale("ko", ko);

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
const events = [
  {
    id: 1,
    title: "uiux 디자인 구성하기",
    start: "2022-03-14T10:00:00",
    end: "2022-03-15T12:00:00",
    color: "#ED776D",
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
      },
      {
        id: 2,
        content: "Section 2 design",
      },
      {
        id: 3,
        content: "Section 3 design",
      },
    ],
    team: [
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
      {
        team_name: "디자인팀",
        memberList: [
          {
            name: "정예은",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "uiux 기획",
    start: "2022-03-15T13:00:00",
    end: "2022-03-16T18:00:00",
    color: "#ED776D",
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
      },
      {
        id: 2,
        content: "Section 2 design",
      },
    ],
    team: [
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
        ],
      },
      {
        team_name: "디자인팀",
        memberList: [
          {
            name: "정예은",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "전기차 기획",
    start: "2022-03-17T13:00:00",
    end: "2022-03-20T18:00:00",
    color: "#FFB425",
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
      },
      {
        id: 2,
        content: "Section 2 design",
      },
      {
        id: 3,
        content: "Section 3 design",
      },
    ],
    team: [
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
      {
        team_name: "디자인팀",
        memberList: [
          {
            name: "정예은",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "uiux 기획",
    start: "2022-03-24T10:00:00",
    end: "2022-03-26T18:00:00",
    color: "#01A8A8",
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
      },
      {
        id: 2,
        content: "Section 2 design",
      },
      {
        id: 3,
        content: "Section 3 design",
      },
    ],
    team: [
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
        ],
      },
      {
        team_name: "디자인팀",
        memberList: [
          {
            name: "정예은",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "기획",
    start: "2022-03-24T10:00:00",
    end: "2022-03-24T17:00:00",
    color: "#51B2E5",
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
      },
      {
        id: 2,
        content: "Section 2 design",
      },
    ],
    team: [
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
    ],
  },
  {
    id: 6,
    title: "말타앱",
    start: "2022-03-24T10:00:00",
    end: "2022-03-24T19:00:00",
    color: "#816BAB",
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
      },
      {
        id: 2,
        content: "Section 2 design",
      },
    ],
    team: [
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
        ],
      },
      {
        team_name: "디자인팀",
        memberList: [
          {
            name: "정예은",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "개발",
    start: "2022-03-24T10:00:00",
    end: "2022-03-25T18:00:00",
    color: "#816BAB",
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
      },
      {
        id: 2,
        content: "Section 2 design",
      },
      {
        id: 3,
        content: "Section 3 design",
      },
    ],
    team: [
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
    ],
  },
  {
    id: 8,
    title: "개발",
    start: "2022-03-24T10:00:00",
    end: "2022-03-24T12:00:00",
    color: "#FF8F4B",
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
      },
      {
        id: 2,
        content: "Section 2 design",
      },
      {
        id: 3,
        content: "Section 3 design",
      },
    ],
    team: [
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
        ],
      },
      {
        team_name: "디자인팀",
        memberList: [
          {
            name: "정예은",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "개발",
    start: "2022-03-24T10:00:00",
    end: "2022-03-24T18:00:00",
    color: "#B75772",
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
      },
      {
        id: 2,
        content: "Section 2 design",
      },
      {
        id: 3,
        content: "Section 3 design",
      },
    ],
    team: [
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
      {
        team_name: "디자인팀",
        memberList: [
          {
            name: "정예은",
            position: "디자이너",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "영상제작",
    start: "2022-03-24T10:00:00",
    end: "2022-03-24T18:00:00",
    color: "#51B2E5",
    tododetailList: [
      {
        id: 1,
        content: "Section 1 design",
      },
      {
        id: 2,
        content: "Section 2 design",
      },
    ],
    team: [
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
    ],
  },
];
const teamList = [
  { id: 1, team: "개발팀" },
  { id: 2, team: "기획팀" },
  { id: 3, team: "디자인팀" },
  { id: 4, team: "마케팅팀" },
  { id: 5, team: "경영팀" },
];

class JobSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selectedItem: null,
      startDate: new Date(),
      team: teamList,
      eventDate: events,
      tododetail: events.tododetailList,
      eventCalendar: 0,
    };
  }

  rowClicked = (item) => {
    this.setState({
      selectedItem: item,
    });
  };

  listAddBtnClicked = () => {
    document.location.href = "#/jobsheetwrite";
  };

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  teamChanged = (value) => {
    if (value == -1) {
      this.setState({
        eventDate: events,
      });
    } else {
      const teamName = teamList[value].team;
      var newList = [];
      for (let index = 0; index < events.length; index++) {
        const element = events[index];
        if (element.team == teamName) {
          newList.push(element);
        }
      }
      this.setState({
        eventDate: newList,
      });
    }
  };

  render() {
    return (
      <>
        <CCard
          style={{
            backgroundColor: "#666EF0",
            boxShadow: "2px 2px 16px 4px #BFC8E2",
            position: "relative",
          }}
        >
          <CCardBody>
            <CRow>
              <CCol xs="5" className="back-color-title"></CCol>
              <CCol
                className="list-title"
                style={{ padding: "20px 0px 10px 40px", color: "#fff" }}
              >
                <div>구성원들의 업무를 한 눈에 볼 수 있는 공간입니다.</div>
                <div style={{ fontSize: "26px" }}>
                  업무 <strong>캘린더</strong>
                </div>
              </CCol>
              <CCol
                xs="6"
                className="text-right"
                style={{ padding: 0, margin: 0, marginRight: "40px" }}
              >
                <img
                  src={require("src/userviews/img/calendar.png").default}
                  style={{ height: "140px" }}
                />
              </CCol>
            </CRow>
            {/* <CRow className='calendardesign' style={{position: "absolute",borderRadius:'30px', border:'1px solid #fff'}}>
              <h2 style={{fontSize:'20px'}}>March</h2></CRow> */}
          </CCardBody>
        </CCard>
        <CCard>
          <CCardBody>
            {/* <CCol xs="2" className='text-right' style={{ padding: 0, marginBottom: '22px' }}>
              <CSelect custom name="select" id="select" onChange={(e)=>this.teamChanged(e.target.value)}>
                <option value="-1" 
                onClick={() => this.setState({ eventCalendar: 0 })}>전체</option>
                {
                  this.state.team.map((item, index) => (
                    <option value={index} 
                    onClick={() => this.setState({ eventCalendar: {index} })}>{item.team}</option>
                  ))
                }
              </CSelect>
            </CCol> */}
            <MembersCalendarView
              eventDataList={this.state.eventDate}
              eventTodoList={this.state.tododetail}
            />
          </CCardBody>
        </CCard>
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
