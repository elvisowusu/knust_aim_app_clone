import { DashBody } from "./DashBody";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Dashboard = () => {
  return (
    <div className="">
      <NavBar />
      <DashBody />
      <Footer />
    </div>
  );
};
