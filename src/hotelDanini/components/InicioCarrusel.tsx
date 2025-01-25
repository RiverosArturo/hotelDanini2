import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from "../styles/styles.module.css";

export const InicioCarrusel = () => {
  const slides = [
    {
      url: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694405110/inicio/inicio_oox5il.jpg",
      title: "HOTEL DANINI",
      title2: "TEZIUTLÁN",
      details: "Conoce Nuestra Visión",
      navLink: "/nosotros"
    },
    {
      url: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402613/habitaciones/masterDeluxe/mSala_sr2h6a.jpg",
      title: "RELAJANTES",
      title2: "HABITACIONES",
      details: "Conoce Nuestras Habitaciones",
      navLink: "/habitacion/masterSuite"
    },
    {
        url: "https://res.cloudinary.com/dawwp31sm/image/upload/v1737708476/restaurante/restauranteInicio_nyimgd.jpg",
        title: "DELEITA",
        title2: "TU PALADAR",
        details: "Conoce Nuestro Restaurante",
        navLink: "/restauranteDanini"
    },
    {
        url: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404177/eventos/boda_llklb5.jpg",
        title: "ESPACIOS PARA",
        title2: "EVENTOS",
        details: "Organiza Tu Evento Con Nosotros",
        navLink: "/eventos"
    },
    {
        url: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694405805/bar/bar3_r0djxc.jpg",
        title: "UN LUGAR PARA CELEBRAR",
        details: "Conoce Nuestro Bar",
        navLink: "/barGallo"
    }
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false, // Continúa reproduciendo después de interactuar
      }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={800}
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className={`${styles['overlay-container']}`}>
            <img src={slide.url} alt={slide.title} className="img-fluid" />
            <div className={`${styles.overlay}`}></div>
            <div className={`${styles['overlay-text']}`}>
              <h2>{slide.title}</h2>
              {
                slide.title2 && (
                    <h2>{slide.title2}</h2>
                )
              }
              <a href={ slide.navLink }>{slide.details}<i className="bi bi-arrow-right-circle" style={{ marginLeft: "6px"}}></i></a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
