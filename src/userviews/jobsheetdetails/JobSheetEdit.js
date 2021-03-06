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
          content: "??????????????? ??? ????????? ??? ??????",
          process: 30,
        },
        {
          content: "?????? ?????????",
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
      content: "????????? ???????????????",
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
    var tempContents = this.state.contents; //const(??????:????????? ?????? ??????)??? ??????????????? this.state(????????????)??? ???????????? var(??????:????????? ??????)??? ????????? (const(??????)??? ????????? ??? ????????? const??? ??????(var)?????? ??????)

    if (index == 0 && tempContents.length == 1) {
      //????????? ?????? ??? ?????? ???????????? ????????? ????????? 1?????? ????????? ?????? ??????????????? ????????????
      tempContents[index].content = "????????? ???????????????"; //input??? 1??? ?????? ?????? ??? ????????? ??????
      this.setState({
        contents: tempContents,
      });
    } else {
      tempContents.splice(index, 1); //2??? ????????? ?????? 1?????? ?????????
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
      title: "?????? ?????????????????????????",
      html: "????????? ??????????????? ????????? ??? ????????????.<br>????????? ?????????????????? [??????] ????????? ???????????????.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#666EF0",
      cancelButtonColor: "#D5D5D5",
      confirmButtonText: "??????",
      cancelButtonText: "??????",
    }).then((result) => {
      if (result.value) {
        document.getElementById("deleteId").remove();
        Swal.fire("????????????", "?????? ??? ??? ????????? ?????????????????????.", "success");
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
                      ??? ???????????? ??????
                    </h5>
                  </CCol>
                </CRow>
                <CForm action="" method="post" style={{ padding: "20px" }}>
                  <CFormGroup>
                    <CRow>
                      <CCol>
                        <DatePicker
                          customStyles={{ dateInput: { borderWidth: 0 } }}
                          locale="ko" // ?????? ?????????
                          selected={new Date(this.state.startDate)} // ?????? state
                          onChange={(date) => this.setStartDate(date)} // ?????? ?????? ?????? ??????
                          customInput={<ExampleCustomInput />}
                          //minDate={new Date()} // ?????? ?????? disable
                          dateFormat="yyyy??? M??? d??? (eee)"
                          popperModifiers={{
                            // ????????? web ???????????? ????????? ???????????? ????????? ?????? ??????
                            preventOverflow: { enabled: true },
                          }}
                          // popperPlacement="auto" // ?????? ????????? ????????? ?????????
                          dayClassName={(date) =>
                            getDayName(createDate(date)) === "???"
                              ? "saturday"
                              : getDayName(createDate(date)) === "???"
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
                          ??????
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
                          placeholder="?????? ??? ????????? ??????????????? ????????? ???????????????"
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
                      + ?????? ??????
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
                      ????????????
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
                      ????????????
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
                      ????????????
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
                      ?????? ??? ???
                    </h5>
                  </CCol>
                  <CCol xs="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">??????</option>
                      <option value="1">??????</option>
                      <option value="2">?????????</option>
                      <option value="3">?????????</option>
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
                          ?????? ????????????
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
                          {/* ????????? ????????? onClick?????? ????????? ??????????????? detailitem??? ????????? ?????? . ??? ???????????? ?????? ????????? this.state.contents??? ????????? ???????????? */}
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
); // ???/???
const getDayName = (date) => {
  return date.toLocaleDateString("ko-KR", { weekday: "long" }).substr(0, 1);
}; // ?????? ????????? ??? ??? ???????????? ???????????????
const createDate = (date) => {
  return new Date(
    new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
  );
};
