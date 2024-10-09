import { useScroll } from "../hooks";
import styles from "../styles/styles.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Bar = () => {
  const { dynamicStyles } = useScroll();

  return (
    <div style={dynamicStyles}>
      <div className={`container-fluid ${styles.hab}`}>
        <hr className="dropdown-divider" />

        <div className={`card mb-3 mt-3 ${styles.habitacionCard}`}>
          <div className="row g-0" style={{ padding: 20 }}>
            <h1 className="card-title">Bar "El Gallo"</h1>
            <p style={{ margin: 0 }}>
              ¡Deléitate con una experiencia de bebidas extraordinaria en
              nuestro bar!
            </p>

            <div className="col-md-12">
              <div className="row g-0">
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694451444/bar/principal_rcezin.jpg"
                    className={`img-fluid ${styles.habitacionImage}`}
                    style={{ padding: 20 }}
                    alt="Restaurante 1"
                  />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694405805/bar/bar3_r0djxc.jpg"
                    className={`img-fluid ${styles.habitacionImage}`}
                    style={{ padding: 20 }}
                    alt="Restaurante 2"
                  />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                  }}
                >
                  <div className="row g-0">
                    <div className="col-md-12">
                      <p>
                        Disfruta de una de las mejores vistas de Tezuitlan,
                        acompañado de tu bebida preferida .
                      </p>
                    </div>
                    <div className="col-md-12">
                      <p style={{ color: "rgb(30, 132, 73)" }}>
                        Abierto de Jueves a Domingo en un horario de 6:00am a
                        10:00pm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694453159/bar/cantarito_ertfpf.jpg"
                        className={`img-fluid ${styles.habitacionImage}`}
                        style={{
                          padding: 20,
                          paddingTop: 0,
                        }}
                        alt="Restaurante 1"
                      />
                    </div>

                    <div className="col-md-4">
                      <img
                        src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694405816/bar/elGallo_sg2m4k.jpg"
                        className={`img-fluid ${styles.habitacionImage}`}
                        style={{
                          padding: 20,
                          paddingTop: 0,
                        }}
                        alt="Restaurante 1"
                      />
                    </div>

                    <div className="col-md-4">
                      <img
                        src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694453169/bar/cantarito2_uxdvxp.jpg"
                        className={`img-fluid ${styles.habitacionImage}`}
                        style={{
                          padding: 20,
                          paddingTop: 0,
                        }}
                        alt="Restaurante 1"
                      />
                    </div>
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
