import { LoginScreen } from "./LoginScreen";
import aimImg from "/src/assets/aim.png";

const HomeScreen = () => {
  return (
    <div className="font-Rubik px-3 flex flex-col justify-center items-center bg-gradient-with-cover">
      <div className="absolute w-full left-0 top-0 bg-cover-pattern bg-cover bg-center h-screen"></div>
      <section className="z-10 mt-12 w-full sm:w-[92%] md:w-[80%] lg:w-[87%] xl:w-[75%] lg:flex lg:flex-row lg:justify-between lg:align-middle text-center rounded-[0.2rem] mb-[5.5rem] lg:mt-[6rem] bg-white  shadow-slate-300 shadow-sm">
        <div className="max-h-full min-h-[22rem]  lg:w-[50%]  flex flex-col items-center lg:justify-center rounded-t-[0.2rem] bg-aimLightGreen">
          <img
            className=" h-[9.8rem] sm:h-[14.5rem] md:h-[15rem] lg:h-[12rem] xl:h-[15.5rem] mt-[1.5rem]"
            src={aimImg}
            alt="aim img"
          />
          <h1 className="text-[1.4rem] sm:text-[1.5rem] font-bold font-Montserrat my-4 text-aimDeepRed">
            Academic Info Manager
          </h1>
          <p className="mt-2 w-[85%] md:w-[90%] lg:w-[85%] md:text-[1.01rem] sm:mb-[3rem]">
            You can also access the Student Portal on your mobile phone.{" "}
            <a className="underline hover:cursor-pointer font-medium text-aimDeepGreen">
              Download App
            </a>
          </p>
        </div>
        <LoginScreen />
      </section>
      <footer className="text-center w-[85%] font-rubik text-sm sm:mb-7 text-aimDeepGreen">
        Copyright &copy; 2024 Kwame Nkrumah University of Science and Technology
        by UITs
      </footer>
    </div>
  );
};

export default HomeScreen;
