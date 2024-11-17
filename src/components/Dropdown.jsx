import { useAnimal } from "../context/AnimalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Dropdown({ className, setDropDown }) {
  console.log(typeof setDropDown);
  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = useAnimal();
  console.log(cart);
  return (
    <div
      className={`${className} sm:min-w-[21rem] w-[300px] flex justify-start px-3 py-[10px]`}
    >
      {cart.length > 0 ? (
        <div className="flex flex-col w-full gap-4 p-1">
          {cart.map((animal) => (
            <span
              key={animal.id}
              className="flex  justify-between w-full items-center bg-[#A18770] bg-opacity-60 rounded-[10px] p-4"
            >
              <img
                src={animal.image}
                alt={animal.name}
                className="rounded-full object-cover w-20 aspect-square scale-110 transition-all duration-300 hover:scale-100"
              />

              <div>
                <p className="~text-base/xl font-semibold">{animal.name}</p>
                <p className="text-base font-normal">
                  &#x20a6; {animal.price.split(".")[0]}
                </p>
              </div>
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer text-red-600 hover:text-red-700"
                style={{
                  width: "25px",
                  height: "25px",
                  // color: "white",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: animal,
                  });
                }}
              />
            </span>
          ))}
          <button
            onClick={() => {
              setDropDown(true);
              navigate("/cart");
            }}
            className="w-full sm:px-3 sm:py-2 px-[2px] py-[2px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 "
          >
            PROCEED TO CART
          </button>
        </div>
      ) : (
        <p className="text-base">Cart is Empty!</p>
      )}
    </div>
  );
}

export default Dropdown;
