import { useAnimal } from "../context/AnimalProvider";
function Cart() {
  const {
    state: { cart },
  } = useAnimal();
  return (
    <section className="flex justify-between">
      <div className={` flex-1  flex justify-start px-3 py-[10px]`}>
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

              <p className="~text-base/xl font-semibold">{animal.name}</p>
              <p className="text-base font-normal">
                &#x20a6; {animal.price.split(".")[0]}
              </p>

              <select name="" id=""></select>
            </span>
          ))}
        </div>
      </div>
      <div className="bg-white px-3 py-[10px] grid content-start gap-3">
        <h2>Subtotal (2) Items</h2>
        <h3>Total &#x20a6; 300</h3>
        <button className="w-full sm:px-3 sm:py-2 px-[2px] py-[2px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 ">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </section>
  );
}

export default Cart;
