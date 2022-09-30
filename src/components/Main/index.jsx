import React from "react";
import Cart from "../Cart";
import ProductsList from "../ProductsList";
import MainContainer from "./style";
function Main({ notify, data, cart, setCart, dataFiltrada }) {
  return (
    <MainContainer>
      <ProductsList
        dataFiltrada={dataFiltrada}
        cart={cart}
        setCart={setCart}
        data={data}
        notify={notify}
      />
      <Cart cart={cart} setCart={setCart} />
    </MainContainer>
  );
}

export default Main;
