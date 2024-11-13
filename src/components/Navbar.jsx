import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav className="flex   justify-between items-center">
      <div className="text-orange-400 font-mulish ~text-lg/2xl">AniWorld!</div>

      <div className="relative ~min-w-40/60">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-4 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="relative">
        <FontAwesomeIcon
          icon={faBagShopping}
          style={{
            width: "25px",
            height: "25px",
            color: "white",
          }}
        />

        <div
          className="absolute top-0 right-0 bg-yellow-500 text-black rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold"
          style={{
            transform: "translate(50%, -50%)", // Position the badge outside the corner
          }}
        >
          3
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
