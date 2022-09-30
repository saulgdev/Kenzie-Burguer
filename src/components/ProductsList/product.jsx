import React from "react";
import { BtnMedium } from "../../styles/buttons";

import "react-toastify/dist/ReactToastify.css";

function Product({ notify, cart, element, setCart }) {
  return (
    <li>
      <img src={element.img} alt="" />
      <div>
        <h3>{element.name}</h3>
        <p>{element.category}</p>
        <p>
          {element.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <BtnMedium
          onClick={() => {
            if (cart.some((el) => el.name === element.name)) {
              console.log("n repete");
              return notify();
            } else {
              setCart([...cart, element]);
            }
          }}
        >
          Adicionar
        </BtnMedium>
      </div>
    </li>
  );
}

export default Product;
