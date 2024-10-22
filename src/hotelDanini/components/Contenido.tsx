import styles from "../styles/styles.module.css";
import { useScroll } from "../hooks";

export const Contenido = () => {
  const { windowWidth } = useScroll();

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

  
  return (
    <div className="container-fluid">
      <section id="content">
        <div className="row">
          <div className={styles.info2}>
            <h1>Bienvenido al Hotel Danini</h1>
            <p>Un lugar donde la naturaleza te consiente.</p>
            <p>Con una ubicación privilegiada, el Hotel Danini es un exclusivo hotel de 21 habitaciones y suites, donde la comodidad, el servicio y la atención garantizan una estancia memorable.</p>
            <p>
            Situado en el Pueblo Mágico de Teziutlán, un lugar lleno de historia y tradición, caminar por sus calles es la mejor manera de descubrir la magia de sus tradiciones históricas, culturales y gastronómicas.
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
                      />
                    ) : (
                      <img
                        src={image}
                        alt={`Image ${index}`}
                        width="100%"
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
    </div>
  );
};
