import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Login = () => {
  
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8" xs='12' ms='12' xl='5'>
            <CCardGroup>
              <CCard className="p-4" style={{margin:'90px 0px 0px 0px'}}>
                <CCardBody>
                <CCol className='text-center' style={{padding:'0px 0px 30px 0px'}}>
                  <img src={require('src/userviews/img/hihive.png').default} style={{height:'80px'}} />
                  </CCol>
                  <CForm>
                    <CInputGroup className="mb-3">
                        <CInputGroupText style={{marginRight:'2px', backgroundColor:'#fff', border:'hidden'}}>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      <CInput type="text" placeholder="아이디" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                        <CInputGroupText style={{marginRight:'2px', backgroundColor:'#fff', border:'hidden'}}>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      <CInput type="password" placeholder="비밀번호" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol className='text-center'>
                      <Link to="/home">
                        <CButton block className="px-4" style={{fontWeight:'bold', fontSize:'18px', padding:'10px 0px'}}>로그인</CButton>
                        </Link>
                      </CCol>
                    </CRow>
                    <CRow style={{padding:'40px 6px 0px 6px', margin:0}}>
                      <CCol className="text-center">
                        <Link to="/register">
                      <CButton color="link" active tabIndex={-1}>회원가입</CButton>
                    </Link>
                      </CCol>
                      <CCol className="text-center">
                        <CButton className="px-0">아이디 찾기</CButton>
                      </CCol>
                      <CCol className="text-center">
                        <CButton className="px-0">비밀번호 찾기</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
                <CCol md="12" className='text-center' style={{padding:'70px 0px 0px 0px'}}>
                  <img src={require('src/userviews/img/banner.png').default} style={{height:'130px'}} />
                </CCol>
            </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
