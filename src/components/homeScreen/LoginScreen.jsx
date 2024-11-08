import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import knustLogo from "/src/assets/knust logo.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { LoginCredentials } from "../../utils/LoginCredentials";
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required("Please enter a username"),
    password: yup.string().required("Please enter a password"),
    studentId: yup.string().required('Please enter a student ID'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate('/dashboard');
  };

  const [visibleFields, setVisibleFields] = useState({});

  const togglePasswordVisibility = (fieldId) => {
    setVisibleFields((prev) => ({
      ...prev,
      [fieldId]: !prev[fieldId],
    }));
  };

  return (
    <div className="font-Rubik flex flex-col items-center lg:w-[50%] lg:h-[100%] lg:px-7">
      <img
        className="h-[4.6rem] mt-5 lg:mt-11 lg:h-[4.5rem]"
        src={knustLogo}
        alt=""
      />
      <p className="text-aimDeepGreen my-[1.2rem] text-[1.2rem] lg:text-[1.1rem]">
        Login
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start w-full px-[1.5rem]"
        action=""
      >
        {LoginCredentials.map(({ id, label, type, placeholder }) => {
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
                  {...register(id)}
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
              {errors[id] && (
                <p className="text-xs text-left text-red-500 mb-1">{errors[id].message}</p>
              )}
            </>
          );
        })}
        <input
          className="inputField border-none bg-aimMediumGreen text-white my-[2.5rem] mt-[2.4rem] text-center cursor-pointer hover:bg-[#10a75b] active:bg-[#0f9e56]"
          type="submit"
          value="Log In"
        />
      </form>
      <p className="text-sm w-[85%] mb-[1.9rem]">
        Having issues accessing your portal?{" "}
        <span className="underline text-aimDeepGreen font-medium">
          Create a ticket
        </span>
      </p>
    </div>
  );
};
