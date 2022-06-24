import React from "react";

// 유저 웹 개발 시작
const Home = React.lazy(() => import("./userviews/home/Home"));
const TimeList = React.lazy(() => import("./userviews/timelist/TimeList"));
const TodayList = React.lazy(() => import("./userviews/todaylist/TodayList"));
const JobSheet = React.lazy(() => import("./userviews/jobsheet/JobSheet"));
const ListWrite = React.lazy(() => import("./userviews/listwrite/ListWrite"));
const ListWrite2 = React.lazy(() => import("./userviews/listwrite/ListWrite2"));
const JobSheetWrite = React.lazy(() =>
  import("./userviews/jobsheetwrite/JobSheetWrite")
);
const MyCalendar = React.lazy(() =>
  import("./userviews/mycalendar/MyCalendar")
);
const MemberHome = React.lazy(() =>
  import("./userviews/membershome/MembersHome")
);
const MembersTimeList = React.lazy(() =>
  import("./userviews/memberstimelist/MembersTimeList")
);
const MembersJobSheet = React.lazy(() =>
  import("./userviews/membersjobsheet/MembersJobSheet")
);
const MembersCalendar = React.lazy(() =>
  import("./userviews/memberscalendar/MembersCalendar")
);
const Notice = React.lazy(() => import("./userviews/notice/Notice"));
const SliderBar = React.lazy(() => import("./userviews/sliderbar/SliderBar"));
const JobSheetDetails = React.lazy(() =>
  import("./userviews/jobsheetdetails/JobSheetDetails")
);
const TodayListWrite = React.lazy(() =>
  import("./userviews/todaylistwrite/TodayListWrite")
);
const MemberJobSheetDetails = React.lazy(() =>
  import("./userviews/memberjobsheetdetails/MemberJobSheetDetails")
);
const JobSheetCalendar = React.lazy(() =>
  import("./userviews/jobsheet/JobSheetCalendar")
);
const TimeListCalendar = React.lazy(() =>
  import("./userviews/timelist/TimeListCalendar")
);
const JobSheetEdit = React.lazy(() =>
  import("./userviews/jobsheetdetails/JobSheetEdit")
);
const MemberTimeList = React.lazy(() =>
  import("./userviews/memberstimelist/MemberTimeList")
);

const routes = [
  { path: "/home", name: "Home", component: Home },
  { path: "/timelist", name: "timelist", component: TimeList },
  { path: "/todaylist", name: "todaylist", component: TodayList },
  { path: "/jobsheet", name: "jobsheet", component: JobSheet },
  { path: "/listwrite", name: "listwrite", component: ListWrite },
  { path: "/listwrite2", name: "listwrite2", component: ListWrite2 },
  { path: "/jobsheetwrite", name: "jobsheetwrite", component: JobSheetWrite },
  { path: "/mycalendar", name: "mycalendar", component: MyCalendar },
  { path: "/memberhome", name: "memberhome", component: MemberHome },
  {
    path: "/memberstimelist",
    name: "memberstimelist",
    component: MembersTimeList,
  },
  {
    path: "/membersjobsheet",
    name: "membersjobsheet",
    component: MembersJobSheet,
  },
  {
    path: "/memberscalendar",
    name: "memberscalendar",
    component: MembersCalendar,
  },
  { path: "/notice", name: "notice", component: Notice },
  { path: "/sliderbar", name: "sliderbar", component: SliderBar },
  {
    path: "/jobsheetdetails",
    name: "jobsheetdetails",
    component: JobSheetDetails,
  },
  {
    path: "/todaylistwrite",
    name: "todaylistwrite",
    component: TodayListWrite,
  },
  {
    path: "/memberjobsheetdetails",
    name: "memberjobsheetdetails",
    component: MemberJobSheetDetails,
  },
  {
    path: "/jobsheetcalendar",
    name: "jobsheetcalendar",
    component: JobSheetCalendar,
  },
  {
    path: "/timelistcalendar",
    name: "timelistcalendar",
    component: TimeListCalendar,
  },
  { path: "/jobsheetedit", name: "jobsheetedit", component: JobSheetEdit },
  {
    path: "/membertimelist",
    name: "membertimelist",
    component: MemberTimeList,
  },
];

export default routes;
