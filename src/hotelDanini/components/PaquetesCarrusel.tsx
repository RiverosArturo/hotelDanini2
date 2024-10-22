import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Paquete } from "../interfaces/paquetes";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "../styles/styles.module.css";

interface Props {
    paquetes: Paquete[];
}

export const PaquetesCarrusel = ({ paquetes }: Props) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1} // Muestra solo un slide por vez
            navigation // Habilita la navegación manual (flechas)
            pagination={{ clickable: true }} // Paginación clickeable
        >
            {paquetes.map((paquete, index) => (
                <SwiperSlide key={index}>
                    <div className={`p-4 ${styles.packageDetails}`}>
                        <h2 className={styles.packageTitle}>{paquete.titulo}</h2>
                        <p style={{ textAlign: 'left' }}>{paquete.descripcion}</p>

                        <h3 style={{ color: '#d79623', fontSize: '16px', fontWeight: 'bold' }}>Incluye</h3>
                        <ul className={styles.incluyeList}>
                            {paquete.lista.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        <h3 style={{ color: '#d79623', fontSize: '16px', fontWeight: 'bold' }}>Tarifa</h3>
                        <p><span style={{ fontWeight: 'bold' }}>{paquete.precio}</span></p>
                        <p style={{ fontSize: '13px' }}>{paquete.advertencia}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
