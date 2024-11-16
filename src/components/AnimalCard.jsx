import { useAnimal } from "../context/AnimalProvider";
import cartReducer from "../reducers/Reducer";

function handleImageerror(e) {
  e.target.src = `src/assets/notFound2.png`;
  e.target.alt = `No Image Found`;
}

function AnimalCard({ animal }) {
  const {
    state: { cart },
    dispatch,
  } = useAnimal();
  const inCart = cart.find((item) => item.id === animal.id);

  const handleCart = () => {
    if (inCart) {
      dispatch({ type: "REMOVE_FROM_CART", payload: animal });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: animal });
    }
  };

  return (
    <div className="px-4 py-4 grid grid-rows-subgrid row-span-4 gap-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto max-w-full">
      <img
        className="rounded-t-lg object-cover "
        src={animal.image}
        alt="animal-image"
        // onError={(e) => (e.target.outerHTML = "<p>Image not found</p>")}
        onError={handleImageerror}
      />

      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white place-items-center">
        {animal.name}
      </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        &#x20a6; {(+animal.price).toFixed(2)}
      </p>
      <button
        onClick={handleCart}
        className={` inline-flex items-center justify-self-start plac px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 ${
          inCart
            ? "bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700"
            : ""
        }`}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default AnimalCard;
