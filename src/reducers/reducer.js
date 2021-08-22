import products from "../db/product-data";

export const initialState = {
  basket: [],
  user: null,
};

export const totalBadge = (basket) =>
  basket?.reduce((amount, item) => item.quantity + amount, 0);

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.subtotal + amount, 0);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET": {
      let newItem = products.find((product) => product.id === action.item.id);
      let itemInCart = state.basket.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            basket: state.basket.map((item) =>
              item.id === newItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    subtotal: item.price * (item.quantity + 1),
                  }
                : item
            ),
          }
        : {
            ...state,
            basket: [
              ...state.basket,
              { ...newItem, quantity: 1, subtotal: newItem.price },
            ],
          };
    }

    case "REMOVE_ITEM":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(`Cant remove product (id: ${action.id})!`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: action.basket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
