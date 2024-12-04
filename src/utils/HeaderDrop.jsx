import { MdAccountCircle } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { RiLifebuoyLine } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { IoMdWallet } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const HeaderDrop = () => {
  const HeaderItems = [
    {
      icon: <MdAccountCircle />,
      label: "Profile",
      link: "/dashboard/StudentProfile",
    },
    {
      icon: <LuSettings />,
      label: "Manage devices",
      link: "/dashboard/ManageDevices",
    },
    {
      icon: <RiLifebuoyLine />,
      label: "Help",
      link: "https://helpdesk.knust.edu.gh/",
    },
    {
      icon: <IoMdWallet />,
      label: "Change password",
      link: "https://apps.knust.edu.gh/students/Account/ForgotPassword",
    },
    {
      icon: <IoLogOutOutline />,
      label: "Logout",
      link: "/",
    },
  ];

  return (
    <div className=" bg-white shadow-xl rounded-md z-50 font-Rubik text-sm py-[1rem]">
      {HeaderItems.map((item, index) => {
        const isInternal = item.link && !item.link.startsWith("http");
        return isInternal ? (
          <NavLink
            to={item.link || "#"}
            key={index}
            className="hover:bg-slate-100 flex items-center gap-2 h-[2rem] pl-[1rem] cursor-pointer"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ) : (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-[2rem] pl-[1rem] "
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        );
      })}
    </div>
  );
};
