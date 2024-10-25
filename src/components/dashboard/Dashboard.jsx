// Dashboard.js
import { NavigationProvider, useNavigation } from "../../utils/NavigationContext";
import { DashBody } from "./DashBody";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Bar, NavBar } from "./NavBar";

export const Dashboard = () => {
  return (
    <NavigationProvider>
      <div className="h-[100vh] overflow-x-clip">
        <Navigation />
        <MainContent />
      </div>
    </NavigationProvider>
  );
};

const Navigation = () => {
  const { isOpen } = useNavigation();
  
  return (
    <>
      <div className="hidden lg:block">
        <NavBar />
      </div>
      <div className="block lg:hidden">
        {isOpen ? <NavBar /> : <Bar />}
      </div>
    </>
  );
};

const MainContent = () => {
  const { isOpen } = useNavigation();
  
  return (
    <div className={`${!isOpen ? 'md:ml-[5rem]' : 'md:ml-[16rem]'} lg:ml-[16rem]`}>
      <Header />
      <DashBody />
      <Footer />
    </div>
  );
};