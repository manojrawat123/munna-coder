import React, { useState, useEffect, useRef } from 'react';
import banner from '../../../imgIc/logoImg/banner3.jpg';
import { FaSearch } from "react-icons/fa";
import { FaJava, FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const WelcomePage = ({ data, setSearch, search }) => {
  const [currentSearch, setCurrentSearch] = useState({ index: -1, item: null });
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Track visibility of the dropdown

  const containerRef = useRef(null);
  const itemRefs = useRef({}); // Stores refs for each item

  const serviceBtn = [
    { icon: <FaJava color='blue' size={28} />, text: "Java With DSA" },
    { icon: <TbBrandCpp color='green' size={28} />, text: "C++ With DSA" },
    { icon: <FaPython color='blue' size={28} />, text: "Python" },
  ];


  const highlightMatch = (text, searchTerm) => {
    if (!searchTerm) return text;
  
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
  
    return parts.map((part, i) =>
      regex.test(part) ? <b key={i} className="text-green-700">{part}</b> : part
    );
  };

  

  const navigate = useNavigate();

  useEffect(() => {
    // Close the dropdown if clicked outside of the containerRef
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsDropdownVisible(false); // Hide the dropdown
      }
    };

    // Add event listener to detect clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Auto-scroll the selected item into view
    if (currentSearch.item?._id && itemRefs.current[currentSearch.item._id]) {
      itemRefs.current[currentSearch.item._id].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentSearch]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setIsDropdownVisible(true); // Show dropdown when search input changes
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      if (currentSearch.index === 0) return;
      setCurrentSearch((prev) => ({
        index: prev.index - 1,
        item: data[prev.index - 1],
      }));
    } else if (e.key === "ArrowDown") {
      if (currentSearch.index === data?.length - 1) return;
      setCurrentSearch((prev) => ({
        index: prev.index + 1,
        item: data[prev.index + 1],
      }));
    } else if (e.key === "Enter" && currentSearch.item != null) {
      if (currentSearch?.item?.ct) {
        navigate(`topic-search/${currentSearch?.item?.ct?.name}/${currentSearch?.item?.ct?._id}/${currentSearch?.item?._id}`);
      } else {
        navigate(`search/${currentSearch?.item?.name}/${currentSearch?.item?._id}`);
      }
    }
  };

  console.log(data);

  return (
    <div className="h-[80vh] bg-cover md:mx-8 flex items-center p-8" style={{ backgroundImage: `url(${banner})` }}>
      <div>
        <h1 className="md:text-5xl sm:text-4xl text-[2rem] text-center md:text-start font-bold text-white">
          Scale your professional workforce <br /> with freelancers
        </h1>

        {/* Search Input */}
        <div className='relative flex mt-8 md:w-[580px] group'>
          <input
            value={search}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            type="text"
            className="outline-none w-full h-[3.5rem] rounded pl-3"
            placeholder="Search Topic Here ...."
          />
          <button className="bg-green-700 text-white absolute p-4 right-2 top-[.28rem] rounded">
            <FaSearch />
          </button>

          {/* Search Suggestions Dropdown */}
          {search !== "" && isDropdownVisible && (
            <div
              ref={containerRef}
              className="group-focus-within:block absolute top-16 rounded w-full bg-white z-[100] px-4 shadow-2xl max-h-[auto] overflow-auto"
            >
              {data?.map((e, i) => (
                <div
                  key={e._id}
                  ref={(el) => {
                    itemRefs.current[e._id] = el;
                  }}
                  onClick={() => {
                    navigate(`/topic-search/${e?.ct?.name}/${e?.ct?._id}/${e?._id}`);
                    setIsDropdownVisible(false); // Hide the dropdown on item selection
                  }}
                  className={`my-4 p-2 px-6 cursor-pointer ${e._id === currentSearch.item?._id ? "bg-gray-200" : ""}`}
                >
                  {highlightMatch(e.ct ? e.title : e.name, search)}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Popular Buttons */}
        <div className='mt-4 flex gap-3 mx-1 items-center text-white font-bold flex-wrap justify-center md:justify-start'>
          <div className='text-[.76rem]'>
            <button className='flex text-[1rem]'>Popular :</button>
          </div>
          {serviceBtn.map((e, i) => (
            <button key={i} className='flex gap-2 border-2 rounded py-2 px-4 hover:bg-white hover:text-black'>
              <span>{e.icon}</span> {e.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
