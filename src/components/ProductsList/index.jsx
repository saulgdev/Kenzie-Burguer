import React from "react";
import Product from "./product";
import UlContainer from "./style";

function ProductsList({ notify, cart, data, setCart, dataFiltrada }) {
  return (
    <UlContainer>
      {dataFiltrada.length !== 0
        ? dataFiltrada.map((element) => (
            <Product
              key={element.id}
              cart={cart}
              setCart={setCart}
              element={element}
              data={data}
              notify={notify}
            />
          ))
        : data.map((element) => (
            <Product
              key={element.id}
              cart={cart}
              setCart={setCart}
              element={element}
              data={data}
              notify={notify}
            />
          ))}
    </UlContainer>
  );
}

export default ProductsList;
