export default function cart(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_CART':
      return !state;
    default:
      return state;
  }
}
