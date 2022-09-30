import React, { useState, useEffect } from "react";
import GlobalStyles from "./styles/globalStyle";
import Header from "./components/Header";
import Main from "./components/Main";
import api from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () =>
    toast.error("Produto já existe no carrinho.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [data, setData] = useState([]);
  const [dataFiltrada, setDataFiltrada] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get("products").then((res) => setData([...res.data]));
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header data={data} setDataFiltrada={setDataFiltrada} />
      <Main
        dataFiltrada={dataFiltrada}
        cart={cart}
        setCart={setCart}
        data={data}
        notify={notify}
      />
      <ToastContainer />
    </>
  );
}

export default App;
