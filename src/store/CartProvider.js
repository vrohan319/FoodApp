import CartConext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // console.log("reducer") ;
  if (action.type === "ADD") {
    // console.log("called") ;
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //  console.log(updatedTotalAmount) ;  

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }; 
  }
  // console.log(defaultCartState) ;
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // console.log("handler") ;
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
