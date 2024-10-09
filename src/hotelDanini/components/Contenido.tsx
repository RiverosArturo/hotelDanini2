import { useState } from "react";
import styles from "../styles/styles.module.css";
import { useScroll } from "../hooks";

export const Contenido = () => {
  const { windowWidth } = useScroll();
  const [showModal, setShowModal] = useState(false);
  const [showImg, setShowImg] = useState("");

  const img = [
    // "https://res.cloudinary.com/dawwp31sm/image/upload/v1694405860/inicio/240534740_125159046511759_3589096235612817581_n_c9arxp.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404470/exteriores/exteriorHabitaciones2_ilcjxn.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404461/exteriores/exterior_cmtrep.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404464/exteriores/exteriores_wpmnmx.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694405110/inicio/inicio_oox5il.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404473/exteriores/exteriorJuego_cno2ya.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404467/exteriores/exteriorHabitaciones_evenni.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404476/exteriores/vista_kc5qo2.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404457/exteriores/entrada_hbw2vh.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404188/eventos/boda5_h8thuo.jpg",
  ];

  const setImage = (img: string) => {
    setShowModal(true);
    setShowImg(img);
  };
  return (
    <div className="container-fluid">
      <section id="content">
        <div className="row">
          <div className={styles.info}>
            <h1 style={{ marginTop: 35 }}>Acerca de Hotel Danini</h1>
            <p>
              Hotel Danini, ubicado en el Pueblo Mágico de Teziutlán, en el
              estado de Puebla; es un lugar lleno de historia y tradición.
              Caminar por sus calles es la mejor manera de descubrir la magia
              que lo hace merecedor del título de 'Pueblo Mágico'.
            </p>
          </div>
          <div className={styles.info2}>
            <h1>Bienvenido</h1>
            <p>
              La privilegiada ubicación del Hotel Danini le permitirá tener
              acceso a los principales atractivos a tan solo unos pasos de
              distancia.
            </p>
          </div>
          <div className={styles.info2} style={{ paddingTop: 0 }}>
            <h1>Lobby</h1>
            <img
              src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694405120/inicio/lobby_mvdquj.jpg"
              className="w-100"
              loading="lazy"
              alt="Lobby"
              title="Lobby"
            />
            <p>
              En Hotel Danini, serás consentido de una manera especial desde el
              momento de tu llegada. Cada espacio de nuestro lobby ha sido
              creado pensando en tu comodidad y confort.
            </p>
          </div>
          <div className={styles.info2} style={{ paddingTop: 0 }}>
            <h1>Exterior</h1>
            <div className="row g-0" style={{ padding: 20 }}>
              {img.map((image, index) => (
                <div className="col-md-4" key={index} style={{ padding: 8 }}>
                  <div style={{ overflow: "hidden" }}>
                    {windowWidth > 767 ? (
                      <img
                        src={image}
                        alt={`Image ${index}`}
                        height={320}
                        width="100%"
                        onClick={() => setImage(image)}
                      />
                    ) : (
                      <img
                        src={image}
                        alt={`Image ${index}`}
                        width="100%"
                        onClick={() => setImage(image)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ padding: 0 }}>
              Las vibrantes experiencias de nuestros bosques, su riqueza
              natural, la presencia viva de nuestra cultura y la interacción con
              nuestra gente, transformaran por completo tu experiencia.
            </p>
          </div>
        </div>
      </section>
      {showModal && (
        <div
          className="modal fade show"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{ backgroundColor: "#006a51", color: "white" }}
              >
                <h1>Exterior</h1>
              </div>
              <div className="modal-body">
                <img src={showImg} width="100%" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)}
                  style={{ backgroundColor: "#006a51", color: "white" }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
