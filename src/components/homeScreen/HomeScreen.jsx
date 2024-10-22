import { LoginScreen } from "./LoginScreen";
import aimImg from "/src/assets/aim.png";

const HomeScreen = () => {
  return (
    <div className="px-3 flex flex-col justify-center items-center bg-gradient-with-cover">
      <div className="absolute w-full left-0 top-0 bg-cover-pattern bg-cover bg-center h-screen"></div>
      <section className="z-10 mt-12 w-full sm:w-[92%] lg:w-[87%] xl:w-[75%] lg:flex lg:flex-row lg:justify-between lg:align-middle text-center rounded-[0.2rem] mb-[5.5rem] lg:mt-[6rem] bg-white  shadow-slate-300 shadow-sm">
        <div className="h-[22rem] sm:h-[26rem] md:h-[31rem] lg:h-[38.2rem] lg:w-[50%]  flex flex-col items-center lg:justify-center rounded-t-[0.2rem] bg-aimLightGreen">
          <img
            className=" h-[9.8rem] sm:h-[14rem] md:h-[20rem] lg:h-[12rem] xl:h-[15.5rem] mt-[1.5rem]"
            src={aimImg}
            alt="aim img"
          />
          <h1 className="text-[1.6rem] font-bold my-4 text-aimDeepRed">
            Academic Info Manager
          </h1>
          <p className="mt-2 sm:w-[80%] md:text-[1.01rem] lg:mb-[2rem]">
            You can also access the Student Portal on your mobile phone.{" "}
            <a className="underline hover:cursor-pointer text-aimDeepGreen font-medium">
              Download App
            </a>
          </p>
        </div>
        <LoginScreen />
      </section>
      <footer className="text-center text-sm mb-2 sm:mb-7 text-aimDeepGreen font-medium">
        Copyright &copy; 2024 Kwame Nkrumah University of Science and Technology
        by UITs
      </footer>
    </div>
  );
};

export default HomeScreen;
