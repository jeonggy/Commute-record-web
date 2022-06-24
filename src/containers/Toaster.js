import React, { useState } from 'react'
import {
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
  
} from '@coreui/react'

const Toaster = () => {
  const positions = [
    'static',
    'top-left',
    'top-center',
    'top-right',
    'top-full',
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'bottom-full'
  ]

  const [toasts, setToasts] = useState([
    { position: 'static'},
    { position: 'static'},
    { position: 'top-right', autohide: 3000 }
  ])

  const [position, setPosition] = useState('top-right')
  const [autohide, setAutohide] = useState(true)
  const [autohideValue, setAutohideValue] = useState(5000)
  const [closeButton, setCloseButton] = useState(true)
  const [fade, setFade] = useState(true)

  const addToast = () => {
    setToasts([
      ...toasts, 
      { position, autohide: autohide && autohideValue, closeButton, fade }
    ])
  }


  const toasters = (()=>{
    return toasts.reduce((toasters, toast) => {
      toasters[toast.position] = toasters[toast.position] || []
      toasters[toast.position].push(toast)
      return toasters
    }, {})
  })()


  return (
    <CToaster>
      <CToast show={true} autohide={false} style={{ marginBottom:'8px' }} >
        <CToastHeader close style={{fontSize:'12px'}}><span style={{color:'#2BB2AC', paddingRight:'6px'}}>●</span>공지사항 알림 (20초 전)</CToastHeader>
        <CToastBody>오늘 올라온 공지사항을 확인해 주세요.</CToastBody>
      </CToast>
      <CToast show={true} autohide={false} style={{ marginBottom:'8px' }} >
        <CToastHeader close style={{fontSize:'12px'}}><span style={{color:'#ED776D', paddingRight:'6px'}}>●</span>댓글 알림 (1분 전)</CToastHeader>
        <CToastBody>1월 28일 업무 일지에 댓글이 달렸습니다.</CToastBody>
      </CToast>
      <CToast show={true} autohide={false} style={{ marginBottom:'8px' }} >
        <CToastHeader close style={{fontSize:'12px'}}><span style={{color:'#2BB2AC', paddingRight:'6px'}}>●</span>오늘 마감 업무 알림 (10분 전)</CToastHeader>
        <CToastBody>홍길동님, 오늘 마감 업무가 있습니다.</CToastBody>
      </CToast>
      <CToast show={true} autohide={false} style={{ marginBottom:'8px' }} >
        <CToastHeader close style={{fontSize:'12px'}}><span style={{color:'#2BB2AC', paddingRight:'6px'}}>●</span>지연중 업무 알림 (30분 전)</CToastHeader>
        <CToastBody>홍길동님, 지연된 업무가 2건 있습니다.</CToastBody>
      </CToast>
      <CToast show={true} autohide={false} style={{ marginBottom:'8px' }} >
        <CToastHeader close style={{fontSize:'12px'}}><span style={{color:'#ED776D', paddingRight:'6px'}}>●</span>댓글 알림 (1시간 전)</CToastHeader>
        <CToastBody>1월 30일 업무 일지에 댓글이 달렸습니다.</CToastBody>
      </CToast>
    </CToaster>
  );
}

export default Toaster
