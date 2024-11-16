function handleImageerror(e) {
  e.target.src = `src/assets/notFound2.png`;
  e.target.alt = `No Image Found`;
}

function AnimalCard({ animal }) {
  return (
    <div className="grid  grid-rows-subgrid row-span-4  w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
      <img
        className="rounded-t-lg object-cover w-full"
        src={animal.image}
        alt="animal-image"
        // onError={(e) => (e.target.outerHTML = "<p>Image not found</p>")}
        onError={handleImageerror}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white place-items-center">
          {animal.name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          &#x20a6; {(+animal.price).toFixed(2)}
        </p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default AnimalCard;
