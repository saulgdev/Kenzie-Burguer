import React from "react";

function ProductCart({ cart, setCart, el, count }) {
  return (
    <li>
      <img src={el.img} alt="" />
      <div>
        <h3>{el.name}</h3>
        <p>{el.category}</p>
      </div>
      <div className="contador">{count}</div>
      <button
        onClick={() => setCart(cart.filter((elemento) => elemento !== el))}
      >
        Remover
      </button>
    </li>
  );
}

export default ProductCart;
