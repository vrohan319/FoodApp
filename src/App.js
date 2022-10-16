import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  const showCartHandler = () =>{
    setIsCartShown(true);
  }

  return (
    <Fragment>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals></Meals>
      </main> 
    </Fragment>
  );
}

export default App;
