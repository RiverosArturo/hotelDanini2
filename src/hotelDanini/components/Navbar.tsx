import { NavLink } from "react-router-dom";
import styles from "../styles/styles.module.css";
import logo from "../../assets/logo2.png";
import { useScroll } from "../hooks";
import { useState } from "react";

export const Navbar = () => {
  const { visible, windowWidth } = useScroll();
  const [expanded, setExpanded] = useState(false);
  const [expandedHabs, setExpandedHabs] = useState(false);
  const [expandedRes, setExpandedRes] = useState(false);

  const habs = () => {
    setExpandedHabs(false);
    setExpanded(false);
  };

  const res = () => {
    setExpanded(false);
    setExpandedRes(false);
  };

  return (
    <div
      style={{ backgroundColor: "#f9f9f9" }}
      className={`${
        visible ? styles["navbar-show"] : styles["navbar-hide"]
      }  fixed-top`}
    >
      <nav className="navbar navbar-expand-lg bg-body-tertiary data-bts-theme">
        <div className={`${styles.navbarC} ${styles.menu} container-fluid`}>
          <img
            src={logo}
            alt="logo"
            className="mh-100"
            style={{ width: "280px", height: "120px", padding: "20px" }}
          />
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded={expanded ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${styles.menu} collapse navbar-collapse ${
              expanded ? "show" : ""
            }`}
            id="navbarText"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={() => setExpanded(false)}>
                <NavLink to="/inicio" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              {/* <li className="nav-item">
                            <NavLink to="/habitaciones" className="nav-link" >Habitaciones</NavLink>
                        </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={expandedHabs ? "true" : "false"}
                  onClick={() => setExpandedHabs(!expandedHabs)}
                >
                  Habitaciones
                </a>
                <ul
                  className={`${styles.navbarC} ${styles["nav-link"]} dropdown-menu`}
                >
                  <li>
                    <NavLink
                      to="/habitacion/queenSize"
                      className="nav-link"
                      onClick={habs}
                    >
                      Queen Size
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/habitacion/kingSize"
                      className="nav-link"
                      onClick={habs}
                    >
                      King Size
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/habitacion/dobleMatrimonial"
                      className="nav-link"
                      onClick={habs}
                    >
                      Doble Matrimonial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/habitacion/suiteDeluxe"
                      className="nav-link"
                      onClick={habs}
                    >
                      Suite Deluxe
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/habitacion/masterSuite"
                      className="nav-link"
                      onClick={habs}
                    >
                      Master Suite
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item" onClick={() => setExpanded(false)}>
                <NavLink to="/eventos" className="nav-link">
                  Eventos
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={expandedRes ? "true" : "false"}
                  onClick={() => setExpandedRes(!expandedRes)}
                >
                  Restaurante-Bar
                </a>
                <ul
                  className={`${styles.navbarC} ${styles["nav-link"]} dropdown-menu`}
                >
                  <li>
                    <NavLink
                      to="/restauranteDanini"
                      className="nav-link"
                      onClick={res}
                    >
                      Restaurante Danini
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/barGallo" className="nav-link" onClick={res}>
                      Bar el gallo
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item" onClick={() => setExpanded(false)}>
                <NavLink to="/contactos" className="nav-link">
                  Contactos
                </NavLink>
              </li>
            </ul>

            <span className="navbar-text">
              <a href="tel:+522311023773" onClick={() => setExpanded(false)}>
                <i className="bi bi-telephone-fill"></i>
              </a>
              <a
                href="https://www.facebook.com/HotelDaniniTeziutlan"
                onClick={() => setExpanded(false)}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com/hoteldanini?igshid=YmMyMTA2M2Y="
                onClick={() => setExpanded(false)}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://goo.gl/maps/mixF55zxoMPCGuhE8"
                onClick={() => setExpanded(false)}
              >
                <i className="bi bi-geo-alt"></i>
              </a>
            </span>
          </div>
        </div>
      </nav>
      {windowWidth > 768 ? (
        <div style={{ backgroundColor: "#f9f9f9" }}>
          <h5
            style={{
              marginLeft: "20px",
              marginTop: "10px",
              fontFamily: "BebasNeu",
              color: "#003629",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            ¡RESERVA YA!
          </h5>
        </div>
      ) : (
        <></>
      )}
      <div onClick={() => setExpanded(false)} id="widget-395614"></div>
    </div>
  );
};
