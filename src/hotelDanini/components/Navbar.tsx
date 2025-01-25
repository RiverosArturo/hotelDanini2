import { NavLink } from "react-router-dom";
import styles from "../styles/styles.module.css";
import { useScroll } from "../hooks";
import { useState } from "react";

export const Navbar = () => {
  const { visible, windowWidth } = useScroll();
  const [expanded, setExpanded] = useState(false);
  const navigation = () => {
    setExpanded(false); 
    window.scrollTo(0, 0);
  }

  return (
    <div
      style={{ backgroundColor: "#f9f9f9" }}

      className={`${ windowWidth > 768 && (visible ? styles["navbar-show"] : styles["navbar-hide"]) } fixed-top`}
      // className={'fixed-top'}
    >
      <div className={`${styles.divLogo}`}>
        <img
          src="https://res.cloudinary.com/dawwp31sm/image/upload/v1737787518/inicio/logoHotel_ck88dm.png"
          alt="logo"
          className="mh-100"
          style={windowWidth > 392 ? { width: "320px", height: "160px" } : { width: "270px", height: "160px" }}
        />
        {windowWidth < 992 && (
          <button
            className="navbar-toggler"
            style={{
              backgroundColor: "#f0e1ce", // Color claro
              marginLeft: "10px",
              padding: "3px", // Espacio interno
              border: "1px solid #f0e1ce", // Borde gris
              borderRadius: "5px", // Bordes redondeados
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded={expanded ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={() => setExpanded(!expanded)}
          >
            {/* <span className="navbar-toggler-icon">aaa</span> */}
            <i className="bi bi-list" style={{ fontSize: "3rem", color: "#003629" }}></i>
          </button>
        )}
        {
          windowWidth > 992 &&(
            <span className={`navbar-text px-4 ${styles.menu} `}>
              <a className="mx-2" href="tel:+522311023773" onClick={() => setExpanded(false)}>
                <i className="bi bi-telephone-fill"></i>
              </a>
              <a className="mx-2"
                href="https://www.facebook.com/HotelDaniniTeziutlan"
                onClick={() => setExpanded(false)}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a className="mx-2"
                href="https://instagram.com/hoteldanini?igshid=YmMyMTA2M2Y="
                onClick={() => setExpanded(false)}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a className="mx-2"
                href="https://goo.gl/maps/mixF55zxoMPCGuhE8"
                onClick={() => setExpanded(false)}
              >
                <i className="bi bi-geo-alt"></i>
              </a>
            </span>
          )
        }
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className={`${styles.navbarC} ${styles.menu} container-fluid`} style={{ paddingBottom: '3px'}}>


          <div
            className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
            id="navbarText"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={navigation}>
                <NavLink to="/" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item" onClick={navigation}>
                <NavLink to="/nosotros" className="nav-link">
                  Nosotros
                </NavLink>
              </li>

              

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Habitaciones
                </a>
                <ul className={`${styles.navbarC} ${styles["nav-link"]} dropdown-menu`}>
                  <li>
                    <NavLink
                      to="/habitacion/queenSize"
                      className="dropdown-item"
                      onClick={navigation}
                    >
                      Queen Size
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/habitacion/kingSize"
                      className="dropdown-item"
                      onClick={navigation}
                    >
                      King Size
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/habitacion/dobleMatrimonial"
                      className="dropdown-item"
                      onClick={navigation}
                    >
                      Doble Matrimonial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/habitacion/suiteDeluxe"
                      className="dropdown-item"
                      onClick={navigation}
                    >
                      Suite Deluxe
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/habitacion/masterSuite"
                      className="dropdown-item"
                      onClick={navigation}
                    >
                      Master Suite
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item" onClick={navigation}>
                <NavLink to="/paquetes" className="nav-link">
                  Paquetes
                </NavLink>
              </li>

              <li className="nav-item" onClick={navigation}>
                <NavLink to="/eventos" className="nav-link">
                  Eventos
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Restaurante-Bar
                </a>
                <ul className={`${styles.navbarC} ${styles["nav-link"]} dropdown-menu`}>
                  <li>
                    <NavLink
                      to="/restauranteDanini"
                      className="dropdown-item"
                      onClick={navigation}
                    >
                      Restaurante Danini
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/barGallo" className="dropdown-item" onClick={navigation}>
                      Bar el Gallo
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item" onClick={navigation}>
                <NavLink to="/petFriendly" className="nav-link">
                  Pet Friendly
                </NavLink>
              </li>

              <li className="nav-item" onClick={ navigation }>
                <NavLink to="/contactos" className="nav-link">
                  Contactos
                </NavLink>
              </li>
            </ul>

            {
          windowWidth < 992 &&(
            <span className="navbar-text px-4">
              <a className="mx-2" href="tel:+522311023773" onClick={() => setExpanded(false)}>
                <i className="bi bi-telephone-fill"></i>
              </a>
              <a className="mx-2"
                href="https://www.facebook.com/HotelDaniniTeziutlan"
                onClick={() => setExpanded(false)}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a className="mx-2"
                href="https://instagram.com/hoteldanini?igshid=YmMyMTA2M2Y="
                onClick={() => setExpanded(false)}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a className="mx-2"
                href="https://goo.gl/maps/mixF55zxoMPCGuhE8"
                onClick={() => setExpanded(false)}
              >
                <i className="bi bi-geo-alt"></i>
              </a>
            </span>
          )
        }

            
          </div>
        </div>
      </nav>

      {windowWidth > 768 && (
        <div style={{ backgroundColor: "#f9f9f9" }}>
          <h5
            style={{
              marginLeft: "20px",
              marginTop: "10px",
              marginBottom: "0px",
              fontFamily: "BebasNeu",
              color: "#003629",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            ¡RESERVA YA!
          </h5>
        </div>
      )}
      <div onClick={() => setExpanded(false)} id="widget-395614"></div>
    </div>
  );
};
