import React, { useState } from 'react'
import {
  CCloseButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  COffcanvasBody,
  CDropdownToggle
} from "@coreui/bootstrap-react";
import { CButton, CImg, CRow, CCol, CBadge } from "@coreui/react";
import Toaster from './Toaster'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdownNotif = () => {
  const [visible, setVisible] = useState(false);

  return (
  <>
      <CButton onClick={() => setVisible(true)} color="info" style={{borderRadius:'100%', width:'36px', height:'36px'}} className="c-header-nav-link">
      <CIcon name="cil-bell" alt="bell" className='text-center' style={{margin:0, padding:0, justifyContent:'center', alignItems:'center', textAlign:'center', color:'#fff'}} />
      
      </CButton>
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
          <CRow>
            <CCol xs="4" className="c-avatar" style={{ padding: 0, margin: 0 }}>
              <CImg
                src={"avatars/6.jpg"}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
                style={{ width: "60px", textAlign: "left" }}
              />
            </CCol>
            <CCol xs="8" style={{ padding: 0 }}>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                  color:"#141414"
                }}
              >
                홍길동
              </h2>
              <h5 style={{ fontSize: "16px", color:"#141414" }}>디자인팀</h5>
            </CCol>
          </CRow>
          <CCol style={{ padding:0 }}>
            <h2 style={{ fontSize: "16px", marginBottom: "5px",paddingTop: "30px"}}>알림</h2>
          </CCol>
          <CCol>
            <Toaster />
          </CCol>
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}

export default TheHeaderDropdownNotif