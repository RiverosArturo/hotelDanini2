import { useState } from "react";
import { useScroll } from "../hooks";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import styles from "../styles/styles.module.css";

export const PublicidadSF = () => {
    const { dynamicStyles, windowWidth } = useScroll();
    const [verMas, setVerMas] = useState<boolean>(false);

    const handleToggle = () => {
        setVerMas(!verMas);
    };

    const images = [
        'https://res.cloudinary.com/dz8zyjbpc/image/upload/v1719534268/exterior8_ku5olr.jpg',
        'https://res.cloudinary.com/dz8zyjbpc/image/upload/v1719534271/cancha_padel2_tqalwp.jpg',
        'https://res.cloudinary.com/dz8zyjbpc/image/upload/v1719534271/restaurante4_wgxqdv.jpg',
        'https://res.cloudinary.com/dz8zyjbpc/image/upload/v1719606788/alberca3_zcyisj.jpg',
        // 'https://res.cloudinary.com/dz8zyjbpc/image/upload/v1719535392/gym_xy9x7u.png',
        // 'https://res.cloudinary.com/dz8zyjbpc/image/upload/v1719534641/lockers_usfahg.jpg',
    ];
    const lista = [
        'Acceso a las instalaciones de Santa Fé Casa Club',
        'Uso de áreas recreativas y de descanso',
        'Descuento en la tarifa de acceso por adulto y niño'
    ]

    return (
        <div className={styles.imageContainerPublicidad} style={dynamicStyles}>
            <div
                style={{
                    height: '500px',  // Altura fija
                    width: '100%',    // Ocupa todo el ancho del contenedor padre
                    position: 'relative', // Posiciona los elementos dentro de este contenedor de forma relativa
                    overflow: 'hidden'
                }}
            >
                {/* Swiper con imágenes */}
                <Swiper
                    modules={[Autoplay]} // Aquí se pasa el módulo de Autoplay
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    loop={true}
                    style={{ width: '100%', height: '100%' }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Texto superpuesto */}
                <div className={`text-content ${styles.publiSf}`} style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    zIndex: 10 // Asegura que el texto esté por encima del carrusel
                }}>
                    <h2 className="title"
                        style={{
                            backgroundColor: 'rgba(228, 229, 219, 0.8)', // Fondo semi-transparente
                            color: '#305e88',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '8px',
                            opacity: '80%'
                        }}
                    >
                        Ventajas exclusivas para nuestros huéspedes
                    </h2>

                    <ul
                        style={{
                            backgroundColor: '#305e88',
                            color: '#e4e5db',
                            fontWeight: 'bold',
                            listStyleType: 'none',
                            width: '380px',
                            textAlign: 'center',
                            padding: '0px',
                            margin: '0 auto',
                            borderRadius: '8px',
                            opacity: '80%',
                        }}
                    >
                        {
                            lista.map((list, i) => (
                                <li style={{
                                    fontSize: '17px',
                                    padding: '8px',
                                    textTransform: 'none',
                                }}>
                                    {list}
                                </li>
                            ))
                        }
                    </ul>

                    <div style={{ textAlign: 'center', paddingTop: '10px', opacity: '80%' }}>
                        <button className="btn btn-ver-mas" style={{ backgroundColor: 'red', color: '#fff', fontWeight: 'bold', fontFamily: 'sans-serif' }} onClick={handleToggle}>
                            {verMas ? 'VER MENOS' : 'TOCA AQUÍ PARA MÁS INFORMACIÓN'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Sección desplegable */}
            {verMas && (
                <div className={`container-fluid ${styles.paqueteContainer} ${styles.nosotros}`} style={{
                    position: 'absolute',
                    fontFamily: 'BebasNue',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    height: '450px',
                    width: '100%',
                    overflowY: 'auto'
                }}>
                    <div className={`p-2`}>
                        <h2 className={styles.packageTitle}>BENEFICIOS PARA HUÉSPEDES</h2>
                        <ul className={styles.incluyeList}>
                            <li>Acceso a las instalaciones de Santa Fé Casa Club.</li>
                            <li>Uso de áreas recreativas y de descanso.</li>
                            <li>Descuento en la tarifa de acceso por adulto y niño.</li>
                        </ul>

                        <h3 style={{ color: '#d79623', fontSize: '16px', fontWeight: 'bold' }}>TARIFAS</h3>
                        <ul className={styles.incluyeList}>
                            <li>Adulto $350.00 por día</li>
                            <li>Niños (menores de 12 años) $200.00 por día</li>
                        </ul>

                        <h3 style={{ color: '#d79623', fontSize: '16px', fontWeight: 'bold' }}>SERVICIOS INCLUIDOS</h3>
                        <ul className={styles.incluyeList}>
                            <li>Acceso a la alberca, jacuzzi y chapoteadero.</li>
                            <li>Uso de las áreas de spa y salón de yoga.</li>
                            <li>Vestidores, baño de vapor y regaderas.</li>
                            <li>Entrada a las áreas deportivas.</li>
                            <li>Uso de áreas verdes y jardines.</li>
                            <li>Acceso al salón de juegos.</li>
                            <li>Uso de instalaciones de juegos para niños.</li>
                        </ul>

                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <h3 style={{ color: '#d79623', fontSize: '18px', fontWeight: 'bold' }}>Conoce más sobre Santa Fé Casa Club</h3>
                            <p style={{ fontSize: '14px', color: '#666' }}>Sumérgete en la experiencia de Santa Fé Casa Club siguiéndolos en Instagram y explorando su página web para obtener información adicional.</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
                                <a href="https://www.instagram.com/santafe_teziutlan" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram" style={{ width: '40px', height: '40px' }}></i>
                                </a>
                                <a href="https://santafecasaclub.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-globe" style={{ width: '40px', height: '40px' }}></i>
                                </a>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button className="btn btn-success" style={{ alignContent: 'center' }} onClick={handleToggle}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
