import { useScroll } from "../hooks";
import styles from "../styles/styles.module.css";
import { CarruselHabs } from "./CarruselHabs";

interface Props {
  habitacion: Hab;
}

interface Hab {
  nombre: string;
  informacion: string;
  imgs: string[];
  // precio: number;
  cupo: number;
}

export const Habitacion = ({ habitacion }: Props) => {
  const { dynamicStyles, windowWidth } = useScroll();

  const styleX = {
    margin:
      windowWidth > 375
        ? 20
        : windowWidth < 376 && windowWidth > 355
        ? 10
        : windowWidth < 356
        ? 0
        : 0,
  };

  return (
    <div style={dynamicStyles}>
      <div className={`container-fluid ${styles.hab}`}>
        <hr className="dropdown-divider" />

        <div className="card mb-3 mw-540" style={styleX}>
          <div className="row g-0">
            <div className="col-md-6">
              <div className={`card-body ${styles.hab}`}>
                <h1 className="card-title">{habitacion.nombre}</h1>
                <p className="card-text">{habitacion.informacion}</p>

                {/* <button
                  type="button"
                  className="btn btn-lg p-3 m-4"
                  style={{
                    backgroundColor: "#006a51",
                    color: "white",
                    cursor: "auto",
                  }}
                > */}
                  {/* {`$${habitacion.precio} `} <i className="bi bi-tags-fill"></i> */}
                {/* </button> */}
                <div className="container d-flex justify-content-center align-items-center mb-3">
                  <button
                    type="button"
                    // disabled
                    className="btn btn-lg p-3"
                    style={{
                      backgroundColor: "#006a51",
                      color: "white",
                      cursor: "auto",
                    }}
                  >
                    {`${habitacion.cupo} adultos `}
                    <i className="bi bi-people-fill"></i>
                  </button>
                </div>
                

                {/* <p style={{ color: "rgb(30, 132, 73)" }}>
                  Más cargos e impuestos
                </p> */}
              </div>
            </div>

            <div className="col-md-6">
              <CarruselHabs imgs={habitacion.imgs} thumbs={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
