export default function cart(state = [], action) {
  console.log(state)

  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.product];
    default:
      return state;
    };
}

