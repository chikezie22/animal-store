import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAnimal } from "../context/AnimalProvider";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = useAnimal();
  const total = cart.reduce((acc, curr) => {
    const prize = acc + curr.price * Number(curr.qty);
    return prize;
  }, 0);
  console.log(total);
  return (
    <section className="flex justify-between">
      <div className={` flex-1  flex flex-col justify-start px-3 py-[10px]`}>
        <div className="grid w-full gap-4 p-1">
          {cart.map((animal) => (
            <span
              key={animal.id}
              className="grid grid-cols-5 place-items-center bg-[#A18770] bg-opacity-60 rounded-[10px] p-4"
            >
              <img
                src={animal.image}
                alt={animal.name}
                className="rounded-full object-cover w-20 aspect-square scale-110 transition-all duration-300 hover:scale-100"
              />

              <p className="~text-base/xl font-semibold justify-self-start">
                {animal.name}
              </p>
              <p className="text-base font-normal">
                &#x20a6; {animal.price.split(".")[0]}
              </p>

              <select
                className="rounded-md font-semibold text-sm px-2 py-1"
                onChange={(e) => {
                  console.log(e.target.value);
                  dispatch({
                    type: "QUANTITY",
                    payload: animal,
                    qty: e.target.value,
                  });
                }}
              >
                <option>Qty</option>
                {Array.from({ length: 5 }).map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

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
        </div>
        <button
          onClick={() => navigate(-1)}
          className="self-start mt-3 sm:px-3 sm:py-2 px-[2px] py-[2px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 "
        >
          Go Back
        </button>
      </div>
      <div className="bg-white px-4 py-[10px] grid content-start gap-3 rounded-md">
        <h2 className="font-bold text-lg">Subtotal (2) Items</h2>
        <h3 className="font-semibold text-base">
          Total &#x20a6; {Math.floor(total)}
        </h3>
        <button className="w-full sm:px-3 sm:py-2 px-[2px] py-[2px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 ">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </section>
  );
}

export default Cart;
