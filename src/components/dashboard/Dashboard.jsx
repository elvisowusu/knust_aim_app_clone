import { DashBody } from "./DashBody";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavBar } from "./NavBar";

export const Dashboard = () => {
  return (
    <div className="">
      <NavBar/>
      <Header />
      <DashBody />
      <Footer />
    </div>
  );
};
