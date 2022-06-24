import React from "react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    to: "/home",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavItem",
    to: "/timelist",
    icon: (
      <CIcon content={freeSet["cilAlarm"]} customClasses="c-sidebar-nav-icon" />
    ),
  },
  {
    _tag: "CSidebarNavItem",
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
    to: "/jobsheet",
    icon: (
      <CIcon
        content={freeSet["cilColorBorder"]}
        customClasses="c-sidebar-nav-icon"
      />
    ),
  },
];

export default _nav;
