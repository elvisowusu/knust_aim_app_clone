import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

export const DropDown = ({ label, options, value, onChange, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="text-[0.85rem] text-[#212529] text-center flex flex-col justify-center items-center font-Rubik"
    >
      <p className="mb-[0.4rem]">{label}</p>
      <div className="relative mb-[0.9rem]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${width} flex items-center justify-between font-Rubik px-[1rem] py-[0.45rem] bg-white border border-gray-300 rounded `}
        >
          <p className="">{value}</p>
          <ChevronDown className="w-[1.2rem] h-[1.2rem] text-gray-600" />
        </button>
        {isOpen && (
          <div className="absolute z-10 w-[99%]  bg-white border font-Rubik border-gray-300 shadow-sm shadow-slate-600">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="px-3 hover:bg-[#6691e7] py-[0.15rem] cursor-pointer  hover:text-white"
              >
                <p className="">{option}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
DropDown.defaultProps = {
  options: [],
};
