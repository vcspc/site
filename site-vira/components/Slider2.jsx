import React, { useState } from 'react';
import styles from '../styles/Slider2.module.scss';

function Slider2() {
  const [clipPath, setClipPath] = useState('50%');

  const handleMouseMove = (event) => {
    // Calcular a posição do mouse como uma porcentagem do contêiner
    const containerWidth = event.currentTarget.offsetWidth;
    const mouseX = event.clientX - event.currentTarget.offsetLeft;
    const mousePercent = (mouseX / containerWidth) * 100;
    
    // Atualizar o estado do clip-path
    setClipPath(`${mousePercent}%`);
  };

  return (
    <div className={styles.faceContainer} onMouseMove={handleMouseMove}>
      <img
        src="./vinicius_costa.png"
        className={styles.faceImage}
        style={{ clipPath: `inset(0 ${clipPath} 0 0)` }}
        alt="Face"
      />
      <img
        src="./victor_costa_completo.png"
        className="face-image"
        style={{ clipPath: `inset(0 0 0 ${clipPath})` }}
        alt="Face"
      />
    </div>
  );
}

export default Slider2;