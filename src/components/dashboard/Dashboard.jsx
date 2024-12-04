import {
  NavigationProvider,
  UseNavigation,
} from "../../utils/NavigationContext";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Bar } from "./Bar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <NavigationProvider>
      <div className="h-[100vh] overflow-x-clip">
        <Navigation />
        <MainContent />
      </div>
    </NavigationProvider>
  );
};
export default Dashboard;
const Navigation = () => {
  const { isOpen } = UseNavigation();

  return (
    <>
      <div className="hidden lg:block">
        <NavBar />
      </div>
      <div className="block lg:hidden">{isOpen ? <NavBar /> : <Bar />}</div>
    </>
  );
};

const MainContent = () => {
  const { isOpen } = UseNavigation();

  return (
    <div
      className={`${!isOpen ? "md:ml-[5rem]" : "md:ml-[16rem]"} lg:ml-[16rem]`}
    >
      <Header />
      <div className="p-6 pt-[6rem] bg-[#f2f6f9] flex flex-col items-center ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
