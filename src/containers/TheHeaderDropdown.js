import React, { useState } from "react";
import {
  CCloseButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  COffcanvasBody,
} from "@coreui/bootstrap-react";
import { CBadge, CImg, CButton, CRow, CCol } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Toaster from "./Toaster";

const TheHeaderDropdown = () => {
  const [visible, setVisible] = useState(false);
  const itemsCount = 3;
  return (
    <>
      <CRow
        style={{
          backgroundColor: "#fff",
          padding: "6px 4px 2px 4px",
          margin: "4px",
          borderRadius: "50px",
          cursor: "pointer",
        }}
        onClick={() => setVisible(true)}
      >
        <CCol style={{ padding: 0, margin: 0, paddingLeft: "6px" }}>
          <div className="c-avatar" style={{ position: "relative" }}>
            <CImg
              src={"avatars/6.jpg"}
              className="c-avatar-img"
              alt="admin@bootstrapmaster.com"
              style={{
                boxShadow: "3px 3px 14px 2px #C1C7D3",
                border: "1px solid #fff",
              }}
            />
            <CBadge
              shape="rounded-circle"
              shape="pill"
              color="danger"
              className="border border-light p-2"
              color="danger"
              style={{
                backgroundColor: "#ED6335",
                position: "absolute",
                Right: 0,
                top: 0,
                marginLeft: "16px",
              }}
            >
              <span className="visually-hidden">{itemsCount}</span>
            </CBadge>
          </div>
        </CCol>
        <CRow style={{ padding: 0, margin: 0 }}>
          <h3 style={{ fontSize: "16px", paddingTop: "8px", fontWeight: 500 }}>
            홍길동님
          </h3>
        </CRow>
      </CRow>
      <COffcanvas
        placement="end"
        visible={visible}
        onHide={() => setVisible(false)}
        backdrop={false}
        portal={true}
      >
        <COffcanvasHeader>
          <COffcanvasTitle></COffcanvasTitle>
          <CCloseButton
            className="text-reset"
            onClick={() => setVisible(false)}
          />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CCol>
            <CRow>
              <CCol
                xs="4"
                className="c-avatar"
                style={{ padding: 0, margin: 0, cursor: "pointer" }}
              >
                <CImg
                  src={"avatars/7.png"}
                  className="c-avatar-img"
                  alt=""
                  style={{
                    width: "60px",
                    textAlign: "left",
                    border: "2px solid #fff",
                  }}
                />
              </CCol>
              <CCol xs="8" style={{ padding: 0 }}>
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "5px",
                    color: "#141414",
                  }}
                >
                  홍길동
                </h2>
                <h5
                  style={{
                    fontSize: "16px",
                    color: "#141414",
                    fontWeight: 400,
                  }}
                >
                  디자인팀
                </h5>
              </CCol>
            </CRow>
          </CCol>
          <CRow style={{ paddingTop: "30px" }}>
            <CCol className="text-left" style={{ margin: 0 }}>
              <h2
                style={{ fontSize: "15px", color: "#141414", fontWeight: 400 }}
              >
                알림
              </h2>
            </CCol>
            <CCol className="text-right" style={{ marginBottom: "4px" }}>
              <CButton color="light" size="sm">
                전체 지우기
              </CButton>
            </CCol>
          </CRow>
          <CCol>
            <Toaster />
          </CCol>
        </COffcanvasBody>
      </COffcanvas>
    </>
  );
};

export default TheHeaderDropdown;
