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
export const DashBody = () => {
  const items = [
    {
      icon: biometric,
      heading: "Status Checker",
      description:
        "Discover your academic standing for the current academic year.",
    },
    {
      icon: courseRegistration,
      heading: "Course Registration",
      description:
        "Register for semester and elective courses with our course registration module.",
    },
    {
      icon: registrationSlip,
      heading: "Registration Slip",
      description:
        "A summary of course registration details for students to view and download.",
    },
    {
      icon: checkResults,
      heading: "Check Results",
      description:
        "Check Results module displays exam scores, trails and grade reports for students.",
    },
    {
      icon: appraisal,
      heading: "Appraisal",
      description:
        "Provide feedback and rating on lecturers to improve teaching quality.",
    },
    {
      icon: payment,
      heading: "Payment",
      description: "Manage payments and view bills conveniently.",
    },
    {
      icon: optionChange,
      heading: "Option Change",
      description: "Module for modifying academic preferences and settings.",
    },
    {
      icon: onlineClass,
      heading: "Online Class",
      description:
        "Online platform for live interactive teaching with video, audio, chat and screen sharing.",
    },
    {
      icon: graduationCap,
      heading: "Graduation",
      description:
        "Graduation module helps students track and fulfill graduation requirements.",
    },
    {
      icon: transcriptRequest,
      heading: "Transcript Request",
      description:
        "Transcript request module allows students to request official transcripts.",
    },
    {
      icon: alumniDetails,
      heading: "Alumni Details",
      description:
        "Provide information on alumni such as their bio, employment history and achievements.",
    },
    {
      icon: studentsGuide,
      heading: "Students' Guide",
      description:
        "Document outlining rules, standards, and expectations for student behaviour.",
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-6 bg-[#e9ecef]">
      {items.map(({ icon, heading, description }) => {
        return (
          <>
            <div className="bg-white h-[15.5rem] hover:bg-green-50 hover:border hover:border-green-600 p-4 rounded-[0.2rem] ">
              <img className="h-[3rem] w-[3rem]" src={icon} alt="" />
              <h1 className="mt-[1.4rem] mb-[0.8rem] text-[#007427] font-semibold text-lg">
                {heading}
              </h1>
              <p className="text-[0.9rem] line-clamp-[140%]">{description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

{
  /* <div className="bg-red-600 h-[15.5rem] p-4 rounded-[0.2rem] ">
<img className="h-[3rem] w-[3rem]" src={biometric} alt="" />
<h1 className="mt-[1.4rem] mb-[0.8rem] text-[#007427] font-semibold text-lg">Status Checker</h1>
<p className="text-[0.9rem] line-clamp-[140%]">Discover </p>
</div> */
}
