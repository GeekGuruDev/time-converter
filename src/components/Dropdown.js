import { useState } from "react";

const Dropdown = ({ list, selected, setItem }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <button
        type="button"
        className={`${!showDropdown && "rounded-b"}
        ${showDropdown ? "bg-green-700" : "bg-green-800"}
        rounded-t px-4 py-2 hover:bg-green-700 flex items-center justify-between w-44 border-2 border-transparent duration-200`}
        onClick={() => {
          setShowDropdown((pre) => !pre);
        }}
      >
        {selected}
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <ul
        className={`${
          showDropdown ? "h-28" : "h-0 bg-transparent"
        } bg-green-700 rounded-b overflow-hidden duration-200 flex flex-col justify-between`}
      >
        {list.map((item, index) => {
          if (item === selected) {
            return <div key={index}></div>;
          }
          return (
            <li
              key={index}
              onClick={() => {
                setItem(item);
                setShowDropdown(false);
              }}
              className=" px-4 py-1 cursor-pointer hover:bg-green-900"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
