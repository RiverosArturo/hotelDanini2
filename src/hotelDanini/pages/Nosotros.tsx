import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useScroll } from "../hooks";
import { ImgAll } from "../components";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "../styles/styles.module.css";


export const Nosotros = () => {
    const { dynamicStyles } = useScroll();

    const [selectedImage, setSelectedImage] = useState<string>('');

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
    };

    const handleCloseModal = () => {
        setSelectedImage('');
    };
    return (
        <div
            className={`${styles.nosotros}`}
            style={{
                ...dynamicStyles,
                position: "relative",
                width: "100%",
            }}
        >
            <div className={styles.imageContainer}>
                <img
                    src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694404467/exteriores/exteriorHabitaciones_evenni.jpg" // Cambia esta URL por la imagen correspondiente
                    alt="Nosotros"
                    className={`img-fluid ${styles.heroImage}`}
                />
                <div className={styles.imageOverlay}>
                    <h1 className={styles.titulo} style={{color: "#fff"}}>Nosotros</h1>
                </div>
            </div>

            <div
                className={`container-fluid`}
            >
                {/* Sección Nosotros */}
                <section className="my-5 text-center">
                    <p className="lead text-muted px-md-5 mx-auto" style={{ maxWidth: "900px", lineHeight: "1.7" }}>
                        Saber la razón por la que trabajamos cada día es esencial para poder alcanzar juntos nuestros objetivos.
                    </p>
                </section>

                {/* Misión y Visión */}
                <section>
                    <div className="row">
                        <div className="mt-5 col-md-6 text-center">
                            <div className="p-4 rounded-lg bg-light position-relative" style={{ minHeight: "300px" }}>
                                <h3 className="mb-3" style={{ color: "#006a51" }}>MISIÓN</h3>
                                <p className="text-muted">
                                    Brindar una experiencia hotelera única, donde la comodidad, el servicio y la magia de la naturaleza armonizan,
                                    creando recuerdos inolvidables para nuestros clientes.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 col-md-6 text-center">
                            <div className="p-4 rounded-lg bg-light position-relative" style={{ minHeight: "300px" }}>
                                <h3 className="mb-3" style={{ color: "#006a51" }}>VISIÓN</h3>
                                <p className="text-muted">
                                    Ser reconocidos como el hotel líder en la región, manteniendo estándares de calidad y servicio, siendo una opción de
                                    excelencia, todo mientras apoyamos el desarrollo sostenible.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="mb-5" style={{ marginTop: '96px' }}>
                    <h2 className="text-center" style={{ color: "#006a51", marginBottom: "3rem" }}>NUESTROS VALORES</h2>
                    <div className="row text-center justify-content-center">
                        {["PASIÓN", "RESPETO", "INTEGRIDAD", "INNOVACIÓN", "TRABAJO EN EQUIPO"].map((valor, index) => (
                            <div
                                key={index}
                                className={`col-md-4 mb-4 ${index >= 3 ? "d-flex justify-content-center col-md-6" : ""
                                    }`}
                            >
                                <div className="p-4 rounded-lg bg-light h-100 d-flex flex-column justify-content-center">
                                    <h5 className="mb-3" style={{ color: "#d79623" }}>
                                        {valor}
                                    </h5>
                                    <p className="text-muted">
                                        {valor === "PASIÓN"
                                            ? "Nos impulsa la mejor disposición para hacer las cosas con entrega, compromiso y entusiasmo."
                                            : valor === "RESPETO"
                                                ? "Somos tolerantes y comprensivos, respetando la dignidad de otras personas y su entorno."
                                                : valor === "INTEGRIDAD"
                                                    ? "Nos conducimos de forma correcta y congruente en nuestras acciones, buscando el bien común."
                                                    : valor === "INNOVACIÓN"
                                                        ? "Creamos e implementamos nuevas ideas para el crecimiento de nuestra empresa."
                                                        : "Nos organizamos para sumar aptitudes y actitudes con verdadera colaboración."}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                <section className="my-5 text-center">
                    <h2 style={{ color: "#006a51", marginBottom: "2rem" }}>NUESTRA HISTORIA</h2>
                    <p className="text-muted lead" style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}>
                        Nuestro hotel nace como reconocimiento a una familia pionera de la región de Piamonte, Italia. Su legado vive a través de
                        cada estancia que ofrecemos a nuestros huéspedes.
                    </p>
                </section>


                <section className="my-5">
                    <h2 className="text-center" style={{ color: "#006a51", marginBottom: "3rem" }}>
                        CERTIFICACIONES
                    </h2>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 },
                        }}
                    >
                        {[
                            {
                                title: "MODERNIZA",
                                src: "https://res.cloudinary.com/dawwp31sm/image/upload/v1729372267/certificaciones/moderniza_xovexq.jpg",
                            },
                            {
                                title: "SAFE TRAVEL",
                                src: "https://res.cloudinary.com/dawwp31sm/image/upload/v1729372267/certificaciones/safeTravels_xbtci9.jpg",
                            },
                            {
                                title: "CÓDIGO DE CONDUCTA",
                                src: "https://res.cloudinary.com/dawwp31sm/image/upload/v1729372268/certificaciones/codigoC_swhn3g.jpg",
                            },
                            {
                                title: "SELLO ELSSA",
                                src: "https://res.cloudinary.com/dawwp31sm/image/upload/v1729372267/certificaciones/elssa_gdk8bv.jpg",
                            },
                        ].map((cert, index) => (
                            <SwiperSlide key={index}>
                                <div className="text-center">
                                    <img
                                        src={cert.src}
                                        className="img-fluid rounded"
                                        style={{
                                            maxWidth: "80%",
                                            maxHeight: "200px",
                                            objectFit: "contain",
                                            cursor: "pointer", // Cambia el cursor al pasar sobre la imagen
                                        }}
                                        loading="lazy"
                                        alt={cert.title}
                                        title={cert.title}
                                        onClick={() => handleImageClick(cert.src)} // Maneja el clic en la imagen
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>

                {/* Modal para mostrar la imagen en tamaño completo */}
                <ImgAll selectedImage={selectedImage} handleCloseModal={handleCloseModal} />
            </div>
        </div>

    )
}
