import { useState, useRef, useEffect } from "react";

const CustomSelect = ({ options, setSelected, selected, nm }) => {
  const [showOption, setShowOption] = useState(false);
  const [userChoice, setUserChoice] = useState();
  const selectRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOption(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={selectRef}>
      <button
        type="button"
        className="border border-gray-700 rounded-xl w-full py-2 px-4 text-left bg-white"
        onClick={() => {
          setShowOption((prev) => !prev); 
        }}
      >
        {userChoice || "Select an option"}
      </button>

      {showOption && (
        <ul className="absolute w-full border border-gray-300 rounded-xl bg-white mt-1 shadow-lg max-h-40 overflow-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setSelected(nm, option.value);
                setUserChoice(option.label);
                setShowOption(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
