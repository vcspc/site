import React, { useState, useEffect } from "react";

function useScreenWidth() {
  // Verifica se o window existe
  const isWindow = typeof window !== "undefined";

  // Cria um estado para armazenar a largura da tela
  const [screenWidth, setScreenWidth] = useState(isWindow ? window.innerWidth : 0);

  // Cria uma função para atualizar a largura da tela
  function handleWindowSizeChange() {
    // Obtém a largura da janela
    let windowWidth = window.innerWidth;

    // Atualiza o estado com a largura da janela
    setScreenWidth(windowWidth);
  }

  // Adiciona e remove o evento de resize na janela
  useEffect(() => {
    // Verifica se o window existe
    if (isWindow) {
      // Adiciona o evento de resize
      window.addEventListener("resize", handleWindowSizeChange);

      // Retorna uma função de limpeza que remove o evento
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, [isWindow]);

  // Retorna o valor da largura da tela
  return screenWidth;
}

export default useScreenWidth;
