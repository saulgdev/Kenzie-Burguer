import React from "react";
import EmptyCart from "./emptyCart";
import ProductCart from "./productCart";
import CartContainer from "./style";

function Cart({ cart, setCart }) {
  //const [totalCart, setTotalCart] = useState(0)
  //setTotalCart(cart.reduce(()))
  //const [count, setCount] = useState(0);

  return (
    <CartContainer>
      <div className="divVerde">
        <h3>Carrinho de Compras</h3>
      </div>
      <>
        {cart.length !== 0 ? (
          <>
            <ul>
              {cart.map((el) => (
                <ProductCart
                  setCart={setCart}
                  cart={cart}
                  key={el.id}
                  el={el}
                />
              ))}
            </ul>
            <div className="line"></div>
            <div className="cartTotal">
              <div>
                <p>Total</p>
                <p>
                  {cart
                    .reduce(
                      (previousValue, currentValue) =>
                        previousValue + currentValue.price,
                      0
                    )
                    .toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </div>
              <button onClick={() => setCart([])}>Remover Todos</button>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </>
    </CartContainer>
  );
}

export default Cart;
