import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CCol, CRow, CModal, CModalBody, CModalHeader } from "@coreui/react";

class MembersCalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 0,
    };
    // alert(JSON.stringify(this.props.eventDataList));    //어떻게 출력되는지 확인할 때 쓰임
  }

  dateBtnClicked = (event) => {
    // alert(JSON.stringify(event));  //어떻게 출력되는지 확인할 때 쓰임 (이벤트클릭할 때 데이터가 그대로 나오지않고 다르게 나와서(FullCalendar 때문) map 돌릴 때 extendedProps 넣어줘야함. / jsonformatter으로 정리된 데이터를 볼 수 있음)
    this.setState({
      eventitem: event,
      dateclickAddModalOpen: true,
    });
  };

  calendarData = () => {
    const events = this.props.eventDataList;
    let list = JSON.parse(JSON.stringify(events));

    const sorttype = this.state.sortType;

    if (sorttype == 0) {
      //전체 리스트 보여줌
      //
      return this.dateSortList(list);
    }

    var newList = []; //새 리스트를 만들어서 담는다

    var key; //key-> undefined

    switch (sorttype) {
      case 1:
        key = "개발팀";
        break;

      case 2:
        key = "기획팀";
        break;

      case 3:
        key = "디자인팀";
        break;

      case 4:
        key = "마케팅팀";
        break;

      case 5:
        key = "경영팀";
        break;

      default:
        //그 외일 경우
        key = "개발팀";
        break;
    }

    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      if (element.team_name == key) {
        newList.push(element);
      } else if (sorttype == 0) {
        newList.push(element);
      }
    }
    // alert(JSON.stringify(newList));
    return this.dateSortList(newList);
  };

  render() {
    const eventitem = this.state.eventitem;
    return (
      <div style={{ cursor: "pointer" }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          // default headerToolbar properties

          // headerToolbar={{
          //   end: 'dayGridMonth today prev,next',
          // }}

          // headerToolbar={{
          //   center: 'dayGridMonth,timeGridWeek,timeGridDay new',
          // }}
          headerToolbar={{
            end: "custom0,custom1,custom2,custom3,custom4,custom5 today prev,next",
          }}
          customButtons={{
            custom0: {
              text: "전체",
              click: () => this.setState({ sortType: 0 }),
            },
            custom1: {
              text: "개발팀",
              team_name: "개발팀",
              click: () => this.setState({ sortType: 1 }),
            },
            custom2: {
              text: "기획팀",
              click: () => this.setState({ sortType: 2 }),
            },
            custom3: {
              text: "디자인팀",
              team_name: "디자인팀",
              click: () => this.setState({ sortType: 3 }),
            },
            custom4: {
              text: "마케팅팀",
              team_name: "마케팅팀",
              click: () => this.setState({ sortType: 4 }),
            },
            custom5: {
              text: "럭스포",
              team_name: "럭스포",
              click: () => this.setState({ sortType: 5 }),
            },
          }}
          events={this.props.eventDataList}
          // eventColor="info"  //이벤트 색상
          // nowIndicator  //현재 시간 표시
          // dateClick={(e) => alert('date click')} // 달력의 빈 날짜칸 눌렀을때의 이벤트(프로그래밍)
          eventClick={(e) => this.dateBtnClicked(e.event)} // 생성된 이벤트를 눌렀을때의 이벤트 (프로그래밍)
          // dateClick={this.handleDateClick}
          dayMaxEventRows={10}
        />
        {this.state.dateclickAddModalOpen && (
          <>
            <CModal
              style={{ borderRadius: "0.8rem" }}
              centered
              show={this.state.dateclickAddModalOpen}
              onClose={() => this.setState({ dateclickAddModalOpen: false })}
            >
              <CModalHeader closeButton>
                <CCol>
                  <CRow
                    style={{
                      color: "#141414",
                      fontWeight: "700",
                      fontSize: "24px",
                      padding: "8px 0px 4px 2px",
                      lineHeight: "36px",
                    }}
                  >
                    {eventitem.title}
                  </CRow>
                  <CRow
                    style={{
                      color: "#686868",
                      fontSize: "14px",
                      padding: "0px 0px 0px 2px",
                    }}
                  >
                    {new Date(eventitem.end).toString()}까지
                  </CRow>
                </CCol>
              </CModalHeader>
              <CModalBody>
                <CCol
                  className="text-center"
                  style={{
                    padding: "10px 0px 10px 10px",
                    borderRadius: "8px",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  {eventitem.extendedProps.tododetailList.map((item, index) => (
                    <CCol
                      style={{ color: "#666EF0", padding: "4px 0px 4px 4px" }}
                      className="text-left"
                    >
                      ●
                      <span
                        style={{
                          color: "#141414",
                          fontSize: "16px",
                          paddingLeft: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        {item.content}
                      </span>
                    </CCol>
                  ))}
                </CCol>
                <CCol
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    padding: "24px 0px 2px 0px",
                  }}
                >
                  참여자
                </CCol>
                {eventitem.extendedProps.team.map((teamitem, teamindex) => (
                  <CRow>
                    <CCol
                      xs="2"
                      style={{
                        fontSize: "14px",
                        padding: "12px 0px 4px 18px",
                        margin: 0,
                      }}
                    >
                      {teamitem.team_name}
                    </CCol>
                    {teamitem.memberList.map((member, memberindex) => (
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
                        className="text-left"
                      >
                        {member.name}
                      </CRow>
                    ))}
                  </CRow>
                ))}
              </CModalBody>
            </CModal>
          </>
        )}
      </div>
    );
  }
  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}

export default MembersCalendarView;
