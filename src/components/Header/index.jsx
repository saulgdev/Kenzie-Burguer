import React from "react";
import { BtnMedium } from "../../styles/buttons";
import Logo from "./logo.svg";
import HeaderContainer from "./style";

function Header({ data, setDataFiltrada }) {
  return (
    <HeaderContainer>
      <div className="headerContainer">
        <img src={Logo} alt="" />
        <form
          onSubmit={(evento) => {
            evento.preventDefault();
            console.log(evento);
            setDataFiltrada(
              data.filter(
                (element) => element.name === evento.target.search.value
              )
            );
          }}
        >
          <input id="search" type="text" placeholder="Digitar pesquisa" />
          <BtnMedium>Pesquisar</BtnMedium>
        </form>
      </div>
    </HeaderContainer>
  );
}
export default Header;
