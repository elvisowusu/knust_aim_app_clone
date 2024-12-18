import biometric from "../../assets/icons/biometric.png";
import courseRegistration from "../../assets/icons/courseRegistration.png";
import registrationSlip from "../../assets/icons/registration slip.png";
import checkResults from "../../assets/icons/vector.png";
import appraisal from "../../assets/icons/appraisal.png";
import payment from "../../assets/icons/payment.png";
import optionChange from "../../assets/icons/change.png";
import onlineClass from "../../assets/icons/online class.png";
import graduationCap from "../../assets/icons/graduation cap.png";
import transcriptRequest from "../../assets/icons/receipt.png";
import alumniDetails from "../../assets/icons/graduate.png";
import studentsGuide from "../../assets/icons/code-of-conduct.png";
import studentGuidePdf from "../../assets/StudentGuide.pdf";
export const DashboardItems = [
  {
    icon: biometric,
    heading: "Status Checker",
    description:
      "Discover your academic standing for the current academic year.",
    link: "/dashboard/StatusChecker",
  },
  {
    icon: courseRegistration,
    heading: "Course Registration",
    description:
      "Register for semester and elective courses with our course registration module.",
    link: "/dashboard/CourseRegistration",
  },
  {
    icon: registrationSlip,
    heading: "Registration Slip",
    description:
      "A summary of course registration details for students to view and download.",
    link: "/dashboard/RegistrationSlip",
  },
  {
    icon: checkResults,
    heading: "Check Results",
    description:
      "Check Results module displays exam scores, trails and grade reports for students.",
    link: "/dashboard/CheckResults",
  },
  {
    icon: appraisal,
    heading: "Assess Lecturer",
    description:
      "Provide feedback and rating on lecturers to improve teaching quality.",
    link: "/dashboard/AssessLecturer",
  },
  {
    icon: payment,
    heading: "Bill and Payments",
    description: "Manage payments and view bills conveniently.",
    link: "/dashboard/BillsAndPayments",
  },
  {
    icon: optionChange,
    heading: "Option Change",
    description: "Module for modifying academic preferences and settings.",
    action: "showError",
    link:''
  },
  {
    icon: onlineClass,
    heading: "Virtual Classroom",
    description:
      "Online platform for live interactive teaching with video, audio, chat and screen sharing.",
    action: "openUrl",
    link: "https://myclass.knust.edu.gh/login/index.php",
  },
  {
    icon: graduationCap,
    heading: "Graduation",
    description:
      "Graduation module helps students track and fulfill graduation requirements.",
    link: "/dashboard/Graduation",
  },
  {
    icon: transcriptRequest,
    heading: "Transcript Request",
    description:
      "Transcript request module allows students to request official transcripts.",
    action: "openUrl",
    link: "https://transcript.knust.edu.gh",
  },
  {
    icon: alumniDetails,
    heading: "Alumni Details",
    description:
      "Provide information on alumni such as their bio, employment history and achievements.",
    link: "/dashboard/AlumniDetails",
  },
  {
    icon: studentsGuide,
    heading: "Students' Guide",
    description:
      "Document outlining rules, standards, and expectations for student behaviour.",
    action: "download",
    link: studentGuidePdf,
  },
];
