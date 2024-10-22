import { Contenido } from "../components";
import { useScroll } from "../hooks";
import styles from "../styles/styles.module.css"; // Asegúrate de importar tus estilos

export const Inicio = () => {
  const { dynamicStyles } = useScroll();

  return (
    <>
      <div style={dynamicStyles}>
        {/* Contenedor del video con relación de aspecto 16:9 */}
        <div className="embed-responsive embed-responsive-16by9">
          <video
            autoPlay
            controls
            className="embed-responsive-item"
            style={{ width: "100%", height: "100%" }}
          >
            <source
              src="https://res.cloudinary.com/dawwp31sm/video/upload/v1694406874/video/hotelDanini.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* Contenido */}
        <div className={`${styles.contenido}`}>
          <Contenido />
        </div>
      </div>
    </>
  );
};
