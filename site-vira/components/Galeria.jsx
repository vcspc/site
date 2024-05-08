import styles from '../styles/Galeria.module.scss';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


export default function Galeria(props) {


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={false}
                modules={[Pagination, Navigation]}
                className={styles.swiper}
            >
                {props.imagens.map((imagem, index) => (
                    <SwiperSlide key={index}>
                        <img 
                            src={imagem} 
                            alt={`Imagem ${index+1}`} 
                            className={styles.swiper_imagem}
                           /*  style={{width: props.largura || '20rem'}}  */
                        />
                    </SwiperSlide>
                ))}
            
                
            </Swiper>
            <div className={styles.galeria}>
                    {props.imagens.map((imagem, index) => (
                        <img 
                            
                            key={index} 
                            src={imagem} 
                            alt={`Imagem ${index+1}`} 
                            style={{width: props.largura || '20rem'}} 
                            className={styles.galeria_imagem}/>
                    ))}
            </div>
        </>
   
    );


}
