import React, { useEffect, useState } from "react";

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

  // Retorna o elemento com o estilo dinâmico
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          background: "orange",
          height: "30em",
          width: `${width}px`,
          position: "relative",
          zIndex: 3,
        }}
      ></div>
      <img style={{ position: "relative", zIndex: 0, height: "30em"  }} src="./vinicius_costa.png" alt="Foto de Vinicius Costa" />
      <div style={
        {
          background: "red",
          height: "30em",
          flexGrow: 1,
          position: "relative",
          zIndex: 3,
        }
      }>
        
      </div>
    </div>
  );
}

export default Slider;