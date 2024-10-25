import { DashBody } from "./DashBody";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Bar, NavBar } from "./NavBar";

export const Dashboard = () => {
  return (
    <div className=" h-[100vh] overflow-x-clip">
      <NavBar />
      <Bar/>
      <div className="md:ml-[5rem] lg:ml-[16rem]">
        <Header />
        <DashBody />
        <Footer />
      </div>
    </div>
  );
};
