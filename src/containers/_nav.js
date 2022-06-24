import React from "react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const _nav = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["MY PAGE"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Home",
    to: "/home",
    icon: "cil-home",
  },
  {
    _tag: "CSidebarNavItem",
    name: "내 출퇴근 기록",
    to: "/timelist",
    icon: (
      <CIcon content={freeSet["cilAlarm"]} customClasses="c-sidebar-nav-icon" />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "오늘 할 일",
    to: "/todaylist",
    icon: (
      <CIcon
        content={freeSet["cilCalendarCheck"]}
        customClasses="c-sidebar-nav-icon"
      />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "내 업무일지",
    to: "/jobsheet",
    icon: (
      <CIcon
        content={freeSet["cilColorBorder"]}
        customClasses="c-sidebar-nav-icon"
      />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "내 캘린더",
    to: "/mycalendar",
    icon: "cil-calendar",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Members"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "구성원",
    to: "/memberhome",
    icon: "cil-people",
  },
  {
    _tag: "CSidebarNavItem",
    name: "전체 출퇴근 기록",
    to: "/memberstimelist",
    icon: (
      <CIcon
        content={freeSet["cilBriefcase"]}
        customClasses="c-sidebar-nav-icon"
      />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "전체 업무일지",
    to: "/membersjobsheet",
    icon: "cil-list",
  },
  {
    _tag: "CSidebarNavItem",
    name: "업무 캘린더",
    to: "/memberscalendar",
    icon: "cil-calendar",
  },
  {
    _tag: "CSidebarNavItem",
    name: "공지사항",
    to: "/notice",
    icon: (
      <CIcon
        content={freeSet["cilClipboard"]}
        customClasses="c-sidebar-nav-icon"
      />
    ),
  },
];

export default _nav;
