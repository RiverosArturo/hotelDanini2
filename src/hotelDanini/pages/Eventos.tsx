import { useScroll } from "../hooks";
import styles from "../styles/styles.module.css";

export const Eventos = () => {
  const { dynamicStyles } = useScroll();
  const img = [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404182/eventos/boda3_gq0fxf.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404180/eventos/boda2_jnrajr.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404173/eventos/bautizo4_rxqclw.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404206/eventos/pedidaDeMano_vjvrvx.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404209/eventos/xv_bklwhx.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404196/eventos/comida_sahgvl.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404193/eventos/cena2_zcc6jh.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404201/eventos/evento_sxwb6h.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404165/eventos/bautizo_rneeab.jpg",
  ];
  return (
    <div style={dynamicStyles}>
      <div className={`container-fluid ${styles.hab}`}>
        <hr className="dropdown-divider" />

        <div className={`card mb-3 mt-3 ${styles.habitacionCard}`}>
          <div className="row g-0" style={{ padding: 20 }}>
            <h1 className="card-title">Eventos</h1>
            <p>
              Disponemos de un maravilloso espacio al aire libre que ofrece una
              versatilidad excepcional para diversos montajes y una capacidad
              generosa para recibir a tus invitados. Quedarán maravillados por
              las impresionantes vistas panorámicas, ya sea que tu evento se
              celebre de día o de noche.
            </p>
            <div className="col-md-12">
              <h1
                style={{
                  fontSize: 18,
                  marginTop: 15,
                }}
              >
                Tipo de Eventos
              </h1>
              <p>
                Te ofrecemos una variedad de espacios perfectos para celebrar
                bodas y eventos sociales.
              </p>
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="list-group" style={{ paddingTop: 10 }}>
                    <p className="list-group-item">• Bodas</p>
                    <p className="list-group-item">• XV Años</p>
                    <p className="list-group-item">• Bautizos</p>
                    <p className="list-group-item">• Celebraciones</p>
                  </div>
                  <h1
                    style={{
                      fontSize: 18,
                      paddingTop: 10,
                    }}
                  >
                    Costos
                  </h1>
                  <p>
                    Contactanos y consulta acerca de nuestros paquetes,
                    disponemos de una amplia gama de opciones para ti.
                  </p>
                </div>
                <div className="col-md-8">
                  <div
                    className="row g-0"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {img.map((image, index) => (
                      <div
                        className="col-md-4"
                        key={index}
                        style={{ padding: 10 }}
                      >
                        <div style={{ overflow: "hidden" }}>
                          <img
                            src={image}
                            alt={`Image ${index}`}
                            width="100%"
                            // onClick={() => setImage(image)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
