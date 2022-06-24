import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const eventscalendar = [
  {
    id: 1,
    title: "출근 09:30",
    start: "2022-03-15",
    end: "2022-03-15",
    color: "#d6edff",
    textColor: "#1B7FC9",
  },
  {
    title: "퇴근 09:30",
    start: "2022-03-15",
    end: "2022-03-15",
    color: "#ffeed3",
    textColor: "#EF9300",
  },
  {
    title: "업무일지 2",
    start: "2022-03-15",
    end: "2022-03-15",
    color: "#ED776D",
  },
  {
    title: "댓글",
    start: "2022-03-15",
    end: "2022-03-15",
    color: "#e0e0e0",
    textColor: "#535353",
  },
  {
    id: 2,
    title: "출근 09:30",
    start: "2022-03-16",
    end: "2022-03-16",
    color: "#d6edff",
    textColor: "#1B7FC9",
  },
  {
    title: "퇴근 09:30",
    start: "2022-03-16",
    end: "2022-03-15",
    color: "#ffeed3",
    textColor: "#EF9300",
  },
  {
    title: "업무일지 2",
    start: "2022-03-16",
    end: "2022-03-15",
    color: "#ED776D",
  },
  {
    title: "댓글",
    start: "2022-03-16",
    end: "2022-03-16",
    color: "#e0e0e0",
    textColor: "#535353",
  },
];

class CalendarView extends Component {
  render() {
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

          // customButtons={{
          //   new: {
          //     text: '신규생성',
          //     click: () => alert('어'),
          //   },
          // }}  // headerToolbar의 버튼 하나를 커스텀 가능

          events={eventscalendar}
          // eventColor="info"  //이벤트 색상
          // nowIndicator  //현재 시간 표시
          dateClick={(e) => alert("date click")} // 달력의 빈 날짜칸 눌렀을때의 이벤트(프로그래밍)
          eventClick={(e) => alert("event click")} // 생성된 이벤트를 눌렀을때의 이벤트 (프로그래밍)
          // dateClick={this.handleDateClick}
          dayMaxEventRows={6}
        />
      </div>
    );
  }
  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}

export default CalendarView;
