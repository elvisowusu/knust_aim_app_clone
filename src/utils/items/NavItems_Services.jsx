import dashboard from "../../assets/icons/dashboard.png";
import statusChecker from "../../assets/icons/healthIcons.png";
import courseReg from "../../assets/icons/avatar.png";
import regSlip from "../../assets/icons/material.png";
import checkResults from "../../assets/icons/check.png";
import accessLec from "../../assets/icons/dashboard.png";
import bill from "../../assets/icons/fluent_payment.png";
import email from "../../assets/icons/email.png";
import paymentPortal from "../../assets/icons/account-payment.png";
import counselling from "../../assets/icons/mental health.png";

export const NavItems = [
  { icon: dashboard, name: "Dashboard", link: "/dashboard" },
  {
    icon: statusChecker,
    name: "Status Checker",
    link: "/dashboard/StatusChecker",
  },
  {
    icon: courseReg,
    name: "Course Registration",
    link: "/dashboard/CourseRegistration",
  },
  {
    icon: regSlip,
    name: "Registration Slip",
    link: "/dashboard/RegistrationSlip",
  },
  {
    icon: checkResults,
    name: "Check Results",
    link: "/dashboard/CheckResults",
  },
  {
    icon: accessLec,
    name: "Assess Lecturers",
    link: "/dashboard/AssessLecturer",
  },
  {
    icon: bill,
    name: "Bill and Payments",
    link: "/dashboard/BillsAndPayments",
  },
];

export const OtherServices = [
  {
    icon: email,
    name: "Student Email",
    link: "https://www.office.com/?auth=1",
  },
  {
    icon: paymentPortal,
    name: "Payment Portal",
    link: "https://pay.knust.edu.gh/",
  },
  {
    icon: counselling,
    name: "Counselling Centre",
    link: "https://kcc.knust.edu.gh/",
  },
];
