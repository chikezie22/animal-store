import { faker } from "@faker-js/faker";
import { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducers/Reducer";

const AnimalContext = createContext();
faker.seed(42);
function AnimalProvider({ children }) {
  const animal = Array.from({ length: 30 }).map(() => {
    const animalType = faker.animal.type();
    const image = faker.image.urlLoremFlickr({
      category: animalType, // This works only if the category is supported
      width: 640,
      height: 480,
    });
    return {
      id: faker.string.uuid(),
      name: animalType.charAt(0).toUpperCase() + animalType.slice(1),
      price: faker.commerce.price({ min: 400, max: 999 }),
      image: image,
    };
  });

  const [state, dispatch] = useReducer(cartReducer, {
    animals: animal,
    cart: [],
  });

  return (
    <AnimalContext.Provider value={{ state, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
}

function useAnimal() {
  const context = useContext(AnimalContext);
  if (context === undefined)
    throw new Error("Animal context is used outside animal provider");
  return context;
}

export { AnimalProvider, useAnimal };
