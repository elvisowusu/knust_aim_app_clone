import { useState } from "react";
import knustLogo from "/src/assets/knust logo.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const LoginScreen = () => {
  // Use an object to track visibility state for each password field
  const [visibleFields, setVisibleFields] = useState({});

  const loginCredentials = [
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "eg. username",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
    },
    {
      id: "studentId",
      label: "Student ID",
      type: "password",
      placeholder: "eg. 00000000",
    },
  ];

  const togglePasswordVisibility = (fieldId) => {
    setVisibleFields((prev) => ({
      ...prev,
      [fieldId]: !prev[fieldId],
    }));
  };
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
        {loginCredentials.map(({ id, label, type, placeholder }) => {
          return (
            <>
              <label className=" text-sm mt-[0.1rem] sm:mt-0" htmlFor="">
                {label}
              </label>
              <div className="relative w-full">
                <input
                  className={
                    label == "Password" ? "inputField mb-0" : "inputField"
                  }
                  type={
                    type === "password"
                      ? visibleFields[id]
                        ? "text"
                        : "password"
                      : type
                  }
                  name={id}
                  id={id}
                  placeholder={placeholder}
                />
                {type === "password" && (
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility(id)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 ${label == "Password" ? "mt-[0.3rem]" : ""}`}
                  >
                    {visibleFields[id] ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                )}
              </div>
              {label === "Password" && (
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
