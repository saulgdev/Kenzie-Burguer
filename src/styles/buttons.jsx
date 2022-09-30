import styled from "styled-components";

const BtnDefault = styled.button`
  width: 130px;
  height: 60px;

  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;

  background: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 8px;

  &:hover {
    background: var(--primary-color-50);
    border: 2px solid var(--primary-color-50);
  }
`;

const BtnMedium = styled.button`
  width: 130px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;

  font-weight: 500;
  font-size: 14px;
  color: #f5f5f5;
  border-radius: 8px;

  background: var(--primary-color);

  border: 2px solid var(--primary-color);

  &:hover {
    background: var(--primary-color-50);
    border: 2px solid var(--primary-color-50);
  }
`;

export { BtnDefault, BtnMedium };
