import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 140px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;

  .headerContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 1200px;
    height: 100%;
    padding: 15px;
    gap: 10px;

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      width: 1400px;
    }
  }

  .headerContainer form {
    width: 100%;
    height: 60px;
    border: 2px solid #e0e0e0;
    background: #ffffff;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1024px) {
      width: 365px;
    }
  }

  .headerContainer input {
    background-color: transparent;
    border: transparent;
    height: 100%;
    width: 70%;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }

  img {
    width: 125.94px;
    height: 36.83px;
  }

  @media (min-width: 1024px) {
    height: 100px;
  }
`;

export default HeaderContainer;
