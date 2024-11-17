export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((animal) => animal.id !== action.payload.id),
      };

    case "QUANTITY":
      return {
        ...state,
        cart: state.cart.map((animal) =>
          animal.id === action.payload.id
            ? { ...animal, qty: action.qty }
            : animal
        ),
      };

    default:
      return state;
  }
}
