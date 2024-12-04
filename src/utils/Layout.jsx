import { FaArrowLeftLong } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Layout = ({
  mainHeadText,
  mainContent,
  mainBtn,
  style,
  baseStyle,
  headerStyle,
}) => {
  const navigate = useNavigate();

  const clickFunc = () => {
    navigate("/dashboard");
  };
  return (
    <div className={`${style} layoutBody`}>
      <section className={`${headerStyle} layoutHeaderSection`}>
        <h1 className="layoutHeader">{mainHeadText}</h1>
      </section>
      <hr className="layoutHr" />
      <>{mainContent}</>
      <div className={`${baseStyle} layoutBase`}>
        <button
          onClick={clickFunc}
          className="border text-red-400 hover:text-white hover:bg-red-400 hover:border-none ease-out transition-all 3s w-fit text-sm py-[0.55rem] px-3 rounded-[0.3rem] border-red-400 flex justify-center items-center"
        >
          <FaArrowLeftLong size={11} />
          Back to Main Menu
        </button>
        <>{mainBtn}</>
      </div>
    </div>
  );
};

export const Btn = ({ name, clickFunc }) => {
  return (
    <button
      onClick={clickFunc}
      className="border bg-[#13c56b] text-white hover:text-white hover:bg-[#10a75b] hover:border-[#0f9e56] active:bg-[#0f9e56] ease-out transition-all 3s w-fit text-sm py-[0.55rem] px-3 rounded-[0.3rem] border-[#13c56b] flex justify-center items-center"
    >
      {name}
    </button>
  );
};

Layout.propTypes = {
  mainHeadText: PropTypes.string.isRequired,
  mainContent: PropTypes.node.isRequired,
  mainBtn: PropTypes.node,
  style: PropTypes.string,
  baseStyle: PropTypes.string,
  headerStyle: PropTypes.string,
};

Layout.defaultProps = {
  mainBtn: null,
  style: "",
};

Btn.propTypes = {
  name: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
};
