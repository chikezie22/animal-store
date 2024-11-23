import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAnimal } from "../context/AnimalProvider";
import Dropdown from "./Dropdown";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropDown, setDropDown] = useState(true);

  const {
    state: { cart },
    search,
    setSearched,
  } = useAnimal();
  const dropDownRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      // event.preventDefault();
      event.stopPropagation();
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setDropDown(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [dropDown]);
  return (
    <nav className="flex   justify-between items-center w-">
      <Link to={"/"} className="text-orange-400 font-mulish ~text-lg/2xl">
        AniWorld!
      </Link>

      <div className="relative ~max-w-10/screen-md">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          className="w-full ~py-1/2 ~px-2/4 pr-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="relative " ref={dropDownRef}>
        <FontAwesomeIcon
          onClick={() => setDropDown((prev) => !prev)}
          className="cursor-pointer"
          icon={faBagShopping}
          style={{
            width: "25px",
            height: "25px",
            color: "white",
          }}
        />

        <div className="absolute top-[-5px] right-[-10px] bg-yellow-500 text-black rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
          {cart.length || 0}
        </div>

        <Dropdown
          setDropDown={setDropDown}
          className={`absolute right-0 bg-black sm:bg-opacity-80 text-white top-10 rounded-[20px] ${
            dropDown ? "hidden" : ""
          }`}
        />
      </div>
    </nav>
  );
}

export default Navbar;
