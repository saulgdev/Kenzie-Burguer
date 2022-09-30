import styled from "styled-components";

const UlContainer = styled.ul`
  width: 100%;
  height: 350px;
  overflow-x: auto;
  display: flex;
  gap: 20px;

  li {
    display: flex;
    flex-direction: column;

    min-width: 300px;
    height: 346px;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    background: #ffffff;
  }

  li img {
    width: 100%;
    height: 150px;
    margin: 0 auto;
    background-color: #f5f5f5;
    object-fit: contain;

    border-radius: 5px 5px 0 5px;
  }

  li div {
    height: 196px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: #ffffff;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: unset;
  }
`;

export default UlContainer;
