import React, { useEffect, useState } from "react";
import useScreenWidth from "./UseScreenWidth";
import styles from "../styles/Slider.module.scss";

function Slider() {
  // Define o estado inicial da largura como 0
  const [width, setWidth] = useState(0);

  // Define uma função para atualizar a largura do elemento
  function updateWidth(e) {

    // Obtém a largura da janela
    let windowWidth = window.innerWidth;

    // Obtém a posição do mouse em relação à janela
    let mouseX = e.clientX;

    let width = windowWidth - mouseX;
   

    console.log(width)

    // Define a largura do elemento como a posição do mouse
    setWidth(width);
    
  }

  // Adiciona o efeito de adicionar e remover o evento de movimento do mouse
  useEffect(() => {
    // Adiciona o evento de movimento do mouse na janela
    window.addEventListener("mousemove", updateWidth);

    setWidth(window.innerWidth / 2);

    // Retorna uma função de limpeza que remove o evento
    return () => {
      window.removeEventListener("mousemove", updateWidth);
    };
  }, []);

  let meio = useScreenWidth() / 2;
  console.log(meio)

  // Retorna o elemento com o estilo dinâmico
  return (
    <div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
      <div
        style={{
          background: "transparent",
          height: "30em",
          width: `${width}px`,
          position: "relative",
          zIndex: 2,
        }}
      ></div>
      <img className={styles.imgCoder} style={{ position: "absolute", zIndex: 1, height: "30em", left: "33%"/* `${meio}px` */ }} src="./vinicius_costa.png" alt="Foto de Vinicius Costa" />
      <div className={styles.sliderCoder} style={
        {
          background: "transparent",
          height: "30em",
          flexGrow: 1,
          position: "relative",
          zIndex: 2,
        }
      }>
        
      </div>
    </div>
  );
}

export default Slider;