import { MdAccountCircle } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { RiLifebuoyLine } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { IoMdWallet } from "react-icons/io";

export const HeaderDrop = () => {
  const HeaderItems = [
    {
      icon: <MdAccountCircle />,
      label: "Profile",
    },
    { icon: <LuSettings />, label: "Manage devices" },
    { icon: <RiLifebuoyLine />, label: "Help" },
    { icon: <IoMdWallet />, label: "Change password" },
    {
      icon: <IoLogOutOutline />,
      label: "Logout",
    },
  ];

  return (
    <div className="bg-red-400 z-40 absolute right-0 top-[2rem]">
      {HeaderItems.map((item,index) => {
        return <div key={index} className="">
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </div>;
      })}
    </div>
  );
};
