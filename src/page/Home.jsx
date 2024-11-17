import AnimalCard from "../components/AnimalCard";
import { useAnimal } from "../context/AnimalProvider";

function Home() {
  const {
    state: { animals },
    search,
  } = useAnimal();

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      <h1 className="text-[#D6CA8B] ~text-sm/4xl ">All Animals</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 md:gap-6  px-2 m-auto grid-rows-[auto_auto_auto_auto]">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            <AnimalCard animal={animal} key={animal.id} />
          ))
        ) : (
          <p className="text-white font-bold capitalize text-center text-lg col-span-2">
            No animals found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
