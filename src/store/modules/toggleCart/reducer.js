export default function toggleCart(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_CART':
      return !state;
    default:
      return state;
  }
}
