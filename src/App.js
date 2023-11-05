import React, { useState } from "react";
import BackgroundImage from "./Components/BackgroundImage/BackgroundImage";
import Header from "./Components/Header/Header";
import MealsItems from "./Components/MealsList/MealsItems";
import DescribePage from "./Components/DescribePage/DescribePage";
import ModalSop from "./Components/ModalShop/ModalShop";
import CartContextProvider from "./Components/store/CartContextProvider";
// const collectAllOrder = (state, action) => {
//   return [action, ...state];
// };
const App = () => {
  // const [allOrder, dispatchAllOrder] = useReducer(collectAllOrder, []);
  // const [addAmountMealInCartShop, setAddAmountMealInCartShop] = useState("");
  const [showCart, setShowCart] = useState(false);
  // const hereDataAmountUpHandler = (e) => {
  //   setAddAmountMealInCartShop(e);
  //   dispatchAllOrder(e);
  // };
  const cheakClickCartHandler = () => {
    setShowCart(true);
  };
  const closeModalShopHandler = () => {
    setShowCart(false);
  };
  return (
    <CartContextProvider>
      <Header cheakClickCart={cheakClickCartHandler} />
      {showCart && <ModalSop closeModalShop={closeModalShopHandler} />}
      <BackgroundImage />
      <DescribePage />
      <MealsItems />
    </CartContextProvider>
  );
};

export default App;
