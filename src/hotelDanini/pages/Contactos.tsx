import { useScroll } from "../hooks";
import styles from "../styles/styles.module.css";

export const Contactos = () => {
  const { dynamicStyles } = useScroll();
  return (
    <div className={`container-fluid ${styles.hab}`} style={dynamicStyles}>
      <hr className="dropdown-divider" />

      <div className="card mb-3 mw-540">
        <div className="row g-0">
          <div className="col-md-6">
            <div className={`card-body ${styles.hab}`}>
              <h1 className="card-title">INFORMACIÓN DE CONTACTO</h1>
              <p className="card-text mt-5">
                ¡En Hotel Danini queremos que estés bien informado, esperamos
                poder resolver todas tus dudas, ponte en contacto con nosotros!
              </p>

              <p className="h6 text-secondary mt-5">
                <i className="bi bi-envelope-fill"></i> info@hoteldanini.com
              </p>
              <p className="h6 text-secondary">
                <i className="bi bi-geo-fill"></i> Cto. Juan Pablo II No. 10,
                Centro, 73800 Teziutlán, Pue.
              </p>
              <p>
                <a
                  href="tel:+522311023773"
                  className="text-secondary text-decoration-none"
                  style={{ paddingLeft: 0 }}
                >
                  <i className="bi bi-telephone-fill"></i> Tel: 231-102-3773
                </a>
              </p>

              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHotelDaniniTeziutlan&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                className="w-100"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>

              <iframe
                src="https://www.instagram.com/hoteldanini/embed"
                className="w-100"
                style={{ border: "none", overflow: "hidden", height: "114px" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className={`card-body ${styles.hab}`}>
              <h1 className="card-title">VISITANOS</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.3524720062005!2d-97.36358728531444!3d19.82503368666256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85daebd1304e244b%3A0x8adc043a4679d9dd!2sHotel%20Danini!5e0!3m2!1ses!2smx!4v1627563765522!5m2!1ses!2smx"
                allowFullScreen
                loading="lazy"
                className="w-100"
                style={{ height: "530px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
