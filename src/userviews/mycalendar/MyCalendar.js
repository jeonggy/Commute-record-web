import React, { Component } from "react";
import { CCard, CCardBody, CCol, CRow, CButton } from "@coreui/react";
import CalendarView from "./CalendarView";

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

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selectedItem: null,
      startDate: new Date(),
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

  edmemberBtnClicked = () => {
    this.setState({
      iisAddModalOpen: true,
    });
  };
  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <>
        <CCol xs="12">
          <CCard
            style={{
              backgroundColor: "#666EF0",
              boxShadow: "2px 2px 16px 4px #BFC8E2",
            }}
          >
            <CCardBody>
              <CRow>
                <CCol xs="5" className="back-color-title"></CCol>
                <CCol
                  className="list-title"
                  style={{ padding: "20px 0px 10px 40px", color: "#fff" }}
                >
                  <div>이용자의 스케쥴을 볼 수 있는 공간입니다.</div>
                  <div style={{ fontSize: "26px" }}>
                    내 <strong>캘린더</strong>
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
            </CCardBody>
          </CCard>
          <CCard>
            <CCardBody>
              <CalendarView />
            </CCardBody>
          </CCard>
        </CCol>
      </>
    );
  }
}

export default MyCalendar;

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
