import dashboard from "../../assets/icons/dashboard.png";
import staChecker from "../../assets/icons/healthIcons.png";
import courseReg from "../../assets/icons/avatar.png";
import regSlip from "../../assets/icons/material.png";
import checkResults from "../../assets/icons/check.png";
import accessLec from "../../assets/icons/dashboard.png";
import bill from "../../assets/icons/fluent_payment.png";
import email from "../../assets/icons/email.png";
import paymentPortal from "../../assets/icons/account-payment.png";
import counselling from "../../assets/icons/mental health.png";

export const NavBar = () => {
  const items = [
    { icon: dashboard, name: "Dashboard" },
    { icon: staChecker, name: "Status Checker" },
    { icon: courseReg, name: "Course Registration" },
    { icon: regSlip, name: "Registration Slip" },
    { icon: checkResults, name: "Check Results" },
    { icon: accessLec, name: "Access Lecturers" },
    { icon: bill, name: "Bill and Payments" },
  ];

  const otherServices = [
    { icon: email, name: "Student Email" },
    { icon: paymentPortal, name: "Payment Portal" },
    { icon: counselling, name: "Counselling Centre" },
  ];
  return (
    <>
      <div
        className="fixed z-20 opacity-30 bg-slate-600
       left-0 right-0 h-full"
      ></div>
      <nav className="fixed z-30 pt-[1.23rem] bg-white w-[16rem] h-full pr-[0.1rem] flex flex-col justify-between gap-[17rem] overflow-y-scroll">
        <div className="mb-[5rem]">
          <h1 className="text-[0.7rem] mb-[0.9rem] pl-[1.5rem] font-semibold text-[#9ea9ad] ">
            NAVIGATION
          </h1>
          {items.map(({ icon, name }) => {
            return (
              <>
                <button className="pl-[2rem] flex gap-2 items-center h-[3rem] w-full hover:text-[#007427] border border-y-0 border-x-0 cursor-pointer focus:bg-green-100 focus:border-r-[0.25rem] border-green-700 hover:bg-green-100">
                  <img src={icon} alt="" />{" "}
                  <p className="text-[1rem]">{name}</p>
                </button>
              </>
            );
          })}
        </div>
        <div className="">
          <h1 className="text-[0.7rem] mb-[0.9rem] pl-[1.5rem] font-semibold text-[#9ea9ad] ">
            OTHER SERVICES
          </h1>
          {otherServices.map(({ icon, name }) => {
            return (
              <>
                <button className="pl-[2rem] flex gap-2 items-center h-[3rem] w-full hover:text-[#007427] border border-y-0 border-x-0 cursor-pointer focus:bg-green-100 focus:border-r-[0.25rem] border-green-700 hover:bg-green-100">
                  <img src={icon} alt="" />{" "}
                  <p className="text-[1rem]">{name}</p>
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};
