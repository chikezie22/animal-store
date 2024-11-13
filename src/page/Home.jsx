import AnimalCard from "../components/AnimalCard";
import { useAnimal } from "../context/AnimalProvider";

function Home() {
  const {
    state: { animals },
  } = useAnimal();
  //   console.log(state);
  console.log(animals);
  return (
    <div className="grid">
      <h1 className="text-[#D6CA8B]">All Animals</h1>
      {animals.map((animal) => (
        <AnimalCard animal={animal} key={animal.id} />
      ))}
    </div>
  );
}

export default Home;
