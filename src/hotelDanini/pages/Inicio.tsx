import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ImgAll, InicioCarrusel } from "../components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Contenido } from "../components";
import { useScroll } from "../hooks";

import styles from "../styles/styles.module.css"; // Asegúrate de importar tus estilos


export const Inicio = () => {
  const { dynamicStyles } = useScroll();
  
  return (
      <div style={{
                ...dynamicStyles,
                position: "relative",
                width: "100%",
      }}>
        <InicioCarrusel />
        <div className={`${styles.contenido}`}>
          <Contenido />
        </div>
      </div>
  );
};
