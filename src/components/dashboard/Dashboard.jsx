import { useState } from "react";
import { DashBody } from "./DashBody";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Bar, NavBar } from "./NavBar";

export const Dashboard = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="h-[100vh] overflow-x-clip">
      {/* Show NavBar on lg screens or when clicked, show Bar only on md screens */}
      <div className="hidden lg:block">
        <NavBar setClick={setClick} click={click} />
      </div>
      <div className="block lg:hidden">
        {click ? <NavBar setClick={setClick} click={click} /> : <Bar />}
      </div>
      <div
        className={` ${!click ? `md:ml-[5rem]` : `md:ml-[16rem]`} lg:ml-[16rem]`}
      >
        <Header setClick={setClick} click={click} />
        <DashBody />
        <Footer />
      </div>
    </div>
  );
};
