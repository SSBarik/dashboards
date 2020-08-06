import React from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import TimelineIcon from '@material-ui/icons/Timeline';
import TimerIcon from '@material-ui/icons/Timer';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SmsIcon from '@material-ui/icons/Sms';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';

const routes = [
  {
    label: "Dashboards",
    icon: <BarChartIcon fontSize="small" />,
    path: "/",
  },
  {
    label: "Spaces",
    icon: <BlurCircularIcon fontSize="small" />,
    path: "/spaces",
  },
  {
    label: "Analytics",
    icon: <TimelineIcon fontSize="small" />,
    path: "/analytics",
  },
  {
    label: "Live",
    icon: <TimerIcon fontSize="small" />,
    path: "/live",
  },
  {
    label: "Safe Display",
    icon: <PeopleAltIcon fontSize="small" />,
    path: "/safedisplay",
  },
  {
    label: "Support",
    icon: <SmsIcon fontSize="small" />,
    path: "/support",
  },
  {
    label: "Admin",
    icon: <SettingsIcon fontSize="small" />,
    path: "/admin",
  },
  {
    label: "Account",
    icon: <PersonIcon fontSize="small" />,
    path: "/account",
  } 
];

export default routes;