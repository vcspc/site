import React, { useState } from 'react';
import styles from '../styles/Slider2.module.scss';

function Slider2() {
  const [clipPath, setClipPath] = useState('50%');
  const [clipPath2, setClipPath2] = useState('50%');
  const [Position, setPosition] = useState('50%');

  const handleMouseMove = (event) => {
    // Calcular a posição do mouse como uma porcentagem do contêiner
    const containerWidth = event.currentTarget.offsetWidth;
    const mouseX = event.clientX - event.currentTarget.offsetLeft;
    const mousePercent = (mouseX / containerWidth) * 100;
    const invertedPercent = 100 - mousePercent;

    const paddingPercent = 40; // 15% de padding de cada lado
    const scale = 20; // Escala ajustada para 70% do container

   /*  let mousePercent = ((mouseX / containerWidth) * scale) + paddingPercent;
    mousePercent = Math.max(paddingPercent, Math.min(mousePercent, 100 - paddingPercent));
    const invertedPercent = 100 - mousePercent;
     */
    // Calculando a porcentagem limitada ao intervalo de 40% a 60%
    let mousePercent2 = ((mouseX / containerWidth) * scale) + paddingPercent;
    mousePercent2 = Math.max(paddingPercent, Math.min(mousePercent, 100 - paddingPercent));
    const invertedPercent2 = 100 - mousePercent2; 
    

    // Atualizar o estado dos clip-paths
    setClipPath(`${mousePercent}%`);
    setClipPath2(`${invertedPercent}%`);
    setPosition(`${invertedPercent2}%`);
  };

  return (
    <div className={styles.faceContainer} onMouseMove={handleMouseMove}>
      <img
        src="./vinicius_costa.png"
        className={styles.faceImage}
        style={{ clipPath: `inset(0 0 0 ${clipPath2})`, left: `${Position}` }}
        alt="Face"
      />
      <img
        src="./victor_costa_completo.png"
        className={styles.faceImage2}
        style={{ clipPath: `inset(0 ${clipPath} 0 0)`, left: `${Position}` }}
        alt="Face"
      />
    </div>
  );
}

export default Slider2;
