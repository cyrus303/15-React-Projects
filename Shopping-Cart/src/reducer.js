const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === 'DECREASE') {
    // console.log('decrease dispatch');
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });
    let removeItem = tempCart.filter((cartItem) => {
      return cartItem.amount !== 0;
    });

    return {
      ...state,
      cart: removeItem,
    };
  }

  if (action.type === 'GET_TOTALS') {
    console.log('get total dispatch');
    const { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.amount += amount;
        console.log(price, amount);
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return { ...state, total, amount };
  }

  return state;
};

export default reducer;

// const initialState = {
//   loading: false,
//   cart: cartItems,
//   total: 0,
//   amount: 1,
// };
