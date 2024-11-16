import AnimalCard from "../components/AnimalCard";
import { useAnimal } from "../context/AnimalProvider";

function Home() {
  const {
    state: { animals },
  } = useAnimal();
  //   console.log(state);
  console.log(animals);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 md:gap-6  px-2 m-auto grid-rows-[auto_auto_auto_auto] ">
      <h1 className="text-[#D6CA8B] ~text-base/4xl col-span-full">
        All Animals
      </h1>
      {animals.map((animal) => (
        <AnimalCard animal={animal} key={animal.id} />
      ))}
    </div>
  );
}

export default Home;
