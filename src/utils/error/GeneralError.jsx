import error from "../../assets/error.gif";
import PropTypes from "prop-types";
export const GeneralError = ({ status, setStatus, errorMsg }) => {
  return (
    <div
      className="fixed flex justify-center items-center right-0 w-full z-50
         left-0 h-full top-0"
    >
      <div
        className="absolute right-0 w-full z-50 opacity-30 bg-[#000000]
         left-0 h-full top-0"
        onClick={() => {
          setStatus(!status);
        }}
      ></div>
      <div className="bg-white  z-50 flex flex-col items-center h-[17.8rem] rounded-[0.4rem] w-[95%]  px-[2rem] sm:w-[32rem] text-center">
        <img src={error} alt="error" className="w-[6rem] my-[1.6rem]" />
        <h3 className="font-Montserrat font-semibold leading-5 text-[#495057]">
          {errorMsg
            ? errorMsg
            : "Something unexpectedly went wrong. Please contact UITS Support Center for assistance."}
        </h3>
        <button
          className="bg-[#ed5e5e] hover:bg-[#c95050] ease-in duration-100 text-white py-[0.5rem] px-[0.8rem] mt-4 rounded-[0.3rem] text-sm"
          onClick={() => {
            setStatus(!status);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
GeneralError.propTypes = {
  status: PropTypes.bool.isRequired,
  setStatus: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
};
