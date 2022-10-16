import CartConext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action === "ADD") {
    const updatedItems = state.item.concate(action.item);
    const updatedTotalAmount =
      state.item.totalAmount + action.item.price * action.item.amount;

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState ;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartConext.Provider value={cartContext}>
      {props.children}
    </CartConext.Provider>
  );
};

export default CartProvider;
