import styled from "styled-components";

const CartContainer = styled.div`
  width: 100%;
  height: 535px;
  background-color: var(--gray-0);
  display: flex;
  flex-direction: column;
  align-items: center;

  .divVerde {
    background-color: var(--primary-color);
    padding: 20px;
    color: white;
    width: 100%;
    height: 65px;
    border-radius: 5px 5px 0px 0px;
  }

  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow-y: auto;
    gap: 20px;
    padding: 20px;
    height: 320px;
  }

  ul li {
    display: flex;
    gap: 15px;
    align-items: center;
    position: relative;
    width: 100%;

    .contador {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 15px;
    }
  }

  ul li div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  ul li img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    background: #e0e0e0;
    border-radius: 5px;
  }

  ul li button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
    background-color: transparent;
    color: #bdbdbd;
    border: none;
    font-weight: 600;
  }

  .line {
    width: 340px;
    height: 2px;
    background: #e0e0e0;
  }

  .cartTotal {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
    width: 100%;
    padding: 20px;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-weight: 600;
      font-size: 20px;
    }

    button {
      width: 320px;
      height: 60px;
      background: #f5f5f5;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 16px;
      color: #828282;
      margin: 0 auto;
    }
  }

  .emptyCart {
    background-color: #f5f5f5;
    width: 100%;
    height: 158px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    min-width: 365px;
    max-width: 365px;
  }
`;

export default CartContainer;
