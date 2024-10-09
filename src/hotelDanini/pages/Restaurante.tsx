import { useState } from "react";
import { useScroll } from "../hooks";
import styles from "../styles/styles.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Restaurante = () => {
  const { dynamicStyles, windowWidth } = useScroll();
  const [showModal, setShowModal] = useState(false);
  const [showImg, setShowImg] = useState("");

  const img = [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444969/platillosRestaurante/waffle_dky4lv.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444959/platillosRestaurante/vino_w9yu45.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444949/platillosRestaurante/spaghetti_yrkpll.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444909/platillosRestaurante/omelette_stacpj.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444834/platillosRestaurante/chilposo_k0vj7q.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444824/platillosRestaurante/chilaquiles2_tjnrl0.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444785/platillosRestaurante/buffet_gxz5zd.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444795/platillosRestaurante/buffet2_ckmdso.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444814/platillosRestaurante/chilaquiles_qo53o9.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444939/platillosRestaurante/pozole3_avxfld.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444929/platillosRestaurante/pozole2_bm3rrp.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444918/platillosRestaurante/pozole_p0h6bw.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444899/platillosRestaurante/huevo_hmn1is.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444845/platillosRestaurante/cocktail_s5agbt.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444804/platillosRestaurante/cecina_tffd5p.jpg",
  ];

  const img2 = [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444969/platillosRestaurante/waffle_dky4lv.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444959/platillosRestaurante/vino_w9yu45.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444949/platillosRestaurante/spaghetti_yrkpll.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444909/platillosRestaurante/omelette_stacpj.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444834/platillosRestaurante/chilposo_k0vj7q.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444824/platillosRestaurante/chilaquiles2_tjnrl0.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444785/platillosRestaurante/buffet_gxz5zd.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444795/platillosRestaurante/buffet2_ckmdso.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444814/platillosRestaurante/chilaquiles_qo53o9.jpg",
  ];

  const setImage = (img: string) => {
    setShowModal(true);
    setShowImg(img);
  };

  return (
    <div style={dynamicStyles}>
      <div className={`container-fluid ${styles.hab}`}>
        <hr className="dropdown-divider" />

        <div className={`card mb-3 mt-3 ${styles.habitacionCard}`}>
          <div className="row g-0" style={{ padding: 20 }}>
            <h1 className="card-title">Restaurante Danini</h1>
            <p style={{ margin: 0 }}>
              ¡Disfruta de una experiencia culinaria excepcional!
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
                    src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694405036/restaurante/restaurante_kp1vxm.jpg"
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
                    src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694441029/restaurante/exteriorRestaurante_cgshbx.jpg"
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
                    padding: 0,
                  }}
                >
                  <p>
                    La magnifica experiencia se complementa con un delicioso
                    menú que le ofrece nuestro restaurante Danini, con una
                    mezcla de platillos de la región preparadas con ingredientes
                    tradicionales provenientes de la zona, así como las
                    especialidades internacionales que continúan con el
                    contraste de lo tradicional y lo contemporáneo.
                  </p>
                </div>

                <div className="col-md-12">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694405030/restaurante/cocina2_elq7pa.jpg"
                        className={`img-fluid ${styles.habitacionImage}`}
                        style={{
                          padding: 20,
                          paddingTop: 0,
                        }}
                        alt="Restaurante 1"
                      />
                    </div>

                    {windowWidth > 485 ? (
                      <div
                        className="col-md-8"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Carousel
                          ariaLabel="Platillos"
                          autoFocus
                          axis="horizontal"
                          autoPlay
                          centerMode
                          centerSlidePercentage={30}
                          emulateTouch
                          infiniteLoop
                          interval={3000}
                          swipeable
                          showThumbs={false}
                          showStatus={false}
                        >
                          {img.map((im, i) => (
                            <div key={i}>
                              <img
                                src={im}
                                alt={`Slide ${i}`}
                                height={windowWidth > 900 ? 200 : 150}
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                    ) : (
                      <div className="col-md-12">
                        <div className="row g-0">
                          <h1>Algunos platillos</h1>
                          {img2.map((image, index) => (
                            <div className="col-4" key={index}>
                              <div style={{ overflow: "hidden", height: 70 }}>
                                <img
                                  src={image}
                                  alt={`Image ${index}`}
                                  height={70}
                                  width="100%"
                                  onClick={() => setImage(image)}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal o alerta al hacer click en alguna imagen de platillos para celular */}
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
                <h1>Platillo</h1>
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
