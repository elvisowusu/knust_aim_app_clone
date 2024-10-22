import knustLogo from "/src/assets/knust logo.png";

export const LoginScreen = () => {
  const loginCredentials = [
    { label: "Username", type: "text", placeholder: "eg. username" },
    { label: "Password", type: "password", placeholder: "Enter password" },
    { label: "Student ID", type: "password", placeholder: "eg. 00000000" },
  ];

  return (
    <div className="flex flex-col items-center lg:w-[50%] lg:h-[100%] lg:px-7">
      <img
        className="h-[4.6rem] mt-5 lg:mt-11 lg:h-[4.5rem]"
        src={knustLogo}
        alt=""
      />
      <p className="text-aimDeepGreen my-[1.2rem] font-medium text-[1.2rem] lg:text-[1.1rem]">
        Login
      </p>
      <form className="flex flex-col items-start w-full px-[1.5rem]" action="">
        {loginCredentials.map((credential) => {
          return (
            <>
              <label className=" text-sm mt-[0.1rem] sm:mt-0" htmlFor="">
                {credential.label}
              </label>
              <input
                className={
                  credential.label == "Password"
                    ? "inputField mb-0"
                    : "inputField"
                }
                type={credential.type}
                name={credential.label}
                id={credential.label}
                placeholder={credential.placeholder}
              />
              {credential.label == "Password" && (
                <p className="text-[0.9rem] text-right w-full text-aimDeepGreen">
                  Forgot password?
                </p>
              )}
            </>
          );
        })}
        <input
          className="inputField border-none bg-aimMediumGreen text-white my-[2.5rem] mt-[2.4rem] text-center cursor-pointer hover:bg-[hsl(149,49%,47%)]"
          type="submit"
          value="Log In"
        />
      </form>
      <p className="text-sm mb-[2.5rem] sm:mb-[1.9rem]">
        Having issues accessing your portal?{" "}
        <span className="underline text-aimDeepGreen font-medium">
          Create a ticket
        </span>
      </p>
    </div>
  );
};
