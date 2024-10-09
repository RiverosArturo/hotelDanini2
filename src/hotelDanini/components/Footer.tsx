import { NavLink } from "react-router-dom";
import styles from "../styles/styles.module.css";
import { useState } from "react";

export const Footer = () => {
  const [showPrivacidad, setShowPrivacidad] = useState(false);
  const [showReservacion, setShowReservacion] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <div className={`${styles.footer} row p-5 bg-dark text-white`}>
          <div
            className={`${styles.footer} col-xs-10 col-md-8 col-lg-4 text-justify`}
          >
            <h3 className="mb-3">MENÚ</h3>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-secondary text-justify h6 p-4 pb-0 pt-0">
              <li className="nav-item">
                <NavLink to="/inicio" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Habitaciones
                </a>
                <ul
                  className={`${styles["nav-link"]} bg-dark dropdown-menu text-secondary h6`}
                >
                  <li>
                    <NavLink to="/habitacion/queenSize" className="nav-link">
                      Queen Size
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/habitacion/kingSize" className="nav-link">
                      King Size
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/habitacion/dobleMatrimonial"
                      className="nav-link"
                    >
                      Doble Matrimonial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/habitacion/suiteDeluxe" className="nav-link">
                      Suite Deluxe
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/habitacion/masterDeluxe" className="nav-link">
                      Master Deluxe
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
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
                  aria-expanded="false"
                >
                  Restaurante-Bar
                </a>
                <ul
                  className={`${styles["nav-link"]} bg-dark dropdown-menu text-secondary h6`}
                >
                  <li>
                    <NavLink to="/restauranteDanini" className="nav-link">
                      Restaurante Danini
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/menuDanini" className="nav-link">
                      Menú Digital
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/barGallo" className="nav-link">
                      Bar el gallo
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/contactos" className="nav-link">
                  Contactos
                </NavLink>
              </li>
            </ul>
          </div>

          <div
            className={`${styles.footer} col-xs-10 col-md-8 col-lg-4 text-justify `}
          >
            <h3 className="h3 mb-3">CONTÁCTANOS</h3>
            <div className="mb-2 p-4 pb-0 pt-0">
              <p className="h6 text-secondary">
                <i className="bi bi-envelope-fill text-white h6"></i>{" "}
                info@hoteldanini.com
              </p>
            </div>
            <div className="mb-2 p-4 pb-0 pt-0">
              <a
                href="tel:+522311023773"
                className="h6 text-secondary text-decoration-none"
              >
                <i className="bi bi-telephone-fill text-white"></i> Tel:
                231-102-3773
              </a>
            </div>
            <div className="mb-2 p-4 pb-0 pt-0">
              <p className="h6 text-secondary">
                <i className="bi bi-geo-fill text-white h6"></i> Cto. Juan Pablo
                II No. 10, Centro, 73800 Teziutlán, Pue.
              </p>
            </div>
            <div className="mb-2 p-4 pb-0 pt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.3524720062005!2d-97.36358728531444!3d19.82503368666256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85daebd1304e244b%3A0x8adc043a4679d9dd!2sHotel%20Danini!5e0!3m2!1ses!2smx!4v1627563765522!5m2!1ses!2smx"
                loading="lazy"
                className="w-100"
              ></iframe>
            </div>
          </div>

          <div
            className={`${styles.footer} col-xs-10 col-md-8 col-lg-4 text-justify`}
          >
            <h3 className="mb-3">REDES SOCIALES</h3>
            <div className="mb-2 p-4 pb-0 pt-0">
              <a
                href="https://www.facebook.com/HotelDaniniTeziutlan"
                className="text-secondary text-decoration-none"
              >
                <i className="bi bi-facebook"></i>/HotelDaniniTeziutlan
              </a>
            </div>
            <div className="mb-2 p-4 pb-0 pt-0">
              <a
                href="https://instagram.com/hoteldanini?igshid=YmMyMTA2M2Y="
                className="text-secondary text-decoration-none"
              >
                <i className="bi bi-instagram"></i> hoteldanini
              </a>
            </div>
            <div
              className="mb-2 p-4 pb-0 pt-0"
              onClick={() => setShowReservacion(true)}
            >
              <a href="#" className="text-secondary text-decoration-none">
                Políticas de reservación
              </a>
            </div>
            <div
              className="mb-2 p-4 pb-0 pt-0"
              onClick={() => setShowPrivacidad(true)}
            >
              <a href="#" className="text-secondary text-decoration-none">
                Políticas de privacidad
              </a>
            </div>
          </div>

          <div className="col-xs-12">
            <p className="text-white text-center pt-4 h6">
              © 2023 Hotel Danini - Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>

      {showPrivacidad && (
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
                <h1>Políticas de privacidad</h1>
              </div>
              <div
                className="modal-body"
                style={{ overflowY: "auto", maxHeight: "500px" }}
              >
                <p>
                  HOTEL DANINI, con domicilio en calle CIRCUITO JUAN PABLO II #
                  10, colonia CENTRO, ciudad TEZIUTLAN, municipio o delegación
                  TEZIUTLAN, C.P. 73800, en la entidad de PUEBLA, país MEXICO, y
                  portal de internet info@hoteldanini.com, es el responsable del
                  uso y protección de sus datos personales, y al respecto le
                  informamos lo siguiente:
                </p>
                <p>
                  ¿Para qué fines utilizaremos sus datos personales? Los datos
                  personales que recabamos de usted, los utilizaremos para las
                  siguientes finalidades que son necesarias para el servicio que
                  solicita: De manera adicional, utilizaremos su información
                  personal para las siguientes finalidades secundarias que no
                  son necesarias para el servicio solicitado, pero que nos
                  permiten y facilitan brindarle una mejor atención:
                </p>
                <ul>
                  <li>Dar a conocer promociones del Hotel</li>
                  <li>En caso de emergencia poder llamar a un familiar</li>
                  <li>Seguridad en la estancia del Huésped</li>
                  <li>Elaboración de reservaciones</li>
                  <li>Para generar una base de datos de los clientes</li>
                  <li>Verificar y confirmar su identidad</li>
                  <li>Mercadotecnia o publicitaria</li>
                  <li>Prospección comercial</li>
                </ul>
                <p>
                  Qué datos personales utilizaremos para estos fines? Además de
                  los datos personales mencionados anteriormente, para las
                  finalidades informadas en el presente aviso de privacidad
                  utilizaremos los siguientes datos personales considerados como
                  sensibles, que requieren de especial protección:
                </p>
                <ul>
                  <li>
                    Datos sobre ideología; creencias religiosas, filosóficas o
                    morales; opiniones políticas y/o afiliación sindical
                  </li>
                  <li>Datos de salud</li>
                  <li>Datos sobre vida sexual</li>
                  <li>Datos de origen étnico o racial</li>
                </ul>
                <p>
                  ¿Cómo puede acceder, rectificar o cancelar sus datos
                  personales, u oponerse a su uso? Usted tiene derecho a conocer
                  qué datos personales tenemos de usted, para qué los utilizamos
                  y las condiciones del uso que les damos (Acceso). Asimismo, es
                  su derecho solicitar la corrección de su información personal
                  en caso de que esté desactualizada, sea inexacta o incompleta
                  (Rectificación); que la eliminemos de nuestros registros o
                  bases de datos cuando considere que la misma no está siendo
                  utilizada adecuadamente (Cancelación); así como oponerse al
                  uso de sus datos personales para fines específicos
                  (Oposición). Estos derechos se conocen como derechos ARCO.
                </p>
                <p>
                  Para el ejercicio de cualquiera de los derechos ARCO, usted
                  deberá presentar la solicitud respectiva a través del
                  siguiente medio: email: info@hoteldanini.com Para conocer el
                  procedimiento y requisitos para el ejercicio de los derechos
                  ARCO, ponemos a su disposición el siguiente medio: email:
                  info@hoteldanini.com
                </p>
                <p>
                  Los datos de contacto de la persona o departamento de datos
                  personales, que está a cargo de dar trámite a las solicitudes
                  de derechos ARCO, son los siguientes:{" "}
                </p>
                <ul>
                  <li>
                    Nombre de la persona o departamento de datos personales:
                    Angelica Hernández García
                  </li>
                  <li>
                    Domicilio: calle CIRCUITO JUAN PABLO II # 10, colonia
                    CENTRO, ciudad TEZIUTLAN, municipio o delegación TEZIUTLAN,
                    cp. 73800, en la entidad de PUEBLA, país MEXICO
                  </li>
                  <li>Correo electrónico: info@hoteldanini.com</li>
                  <li>Número telefónico: 2311023773</li>
                </ul>
                <p>
                  <strong>
                    Usted puede revocar su consentimiento para el uso de sus
                    datos personales.
                  </strong>
                  Usted puede revocar el consentimiento que, en su caso, nos
                  haya otorgado para el tratamiento de sus datos personales. Sin
                  embargo, es importante que tenga en cuenta que no en todos los
                  casos podremos atender su solicitud o concluir el uso de forma
                  inmediata, ya que es posible que por alguna obligación legal
                  requiramos seguir tratando sus datos personales. Asimismo,
                  usted deberá considerar que, para ciertos fines, la revocación
                  de su consentimiento implicará que no le podamos seguir
                  prestando el servicio que nos solicitó, o la conclusión de su
                  relación con nosotros.
                </p>
                <p>
                  Para conocer el procedimiento y requisitos para la revocación
                  del consentimiento, ponemos a su disposición el siguiente
                  medio:
                </p>
                <ul>
                  <li>info@hoteldanini.com</li>
                </ul>
                <p>
                  Con objeto de que usted pueda limitar el uso y divulgación de
                  su información personal, le ofrecemos los siguientes medios:{" "}
                </p>
                <ul>
                  <li>info@hoteldanini.com</li>
                </ul>
                <p>
                  <strong>
                    ¿Cómo puede conocer los cambios en este aviso de privacidad?
                  </strong>
                </p>
                <p>
                  El presente aviso de privacidad puede sufrir modificaciones,
                  cambios o actualizaciones derivadas de nuevos requerimientos
                  legales; de nuestras propias necesidades por los productos o
                  servicios que ofrecemos; de nuestras prácticas de privacidad;
                  de cambios en nuestro modelo de negocio, o por otras causas.
                  Nos comprometemos a mantenerlo informado sobre los cambios que
                  pueda sufrir el presente aviso de privacidad, a través de:
                  Correo y vía telefónica. El procedimiento a través del cual se
                  llevarán a cabo las notificaciones sobre cambios o
                  actualizaciones al presente aviso de privacidad es el
                  siguiente: por medio de una publicación de un anuncio.
                </p>
                <h3>DECRETO NACIONAL PARA EL CONSUMO DE TABACO</h3>
                <p>
                  De acuerdo a la Ley General para el Control del Tabaco, queda
                  prohibido consumir o tener encendido cualquier producto de
                  tabaco o nicotina en todo el hotel. A excepción del espacio
                  asignada para esa actividad. Si se incumple en las
                  disposiciones serán objetos de Multa de hasta 1.000 UMA
                </p>
                <p>
                  <strong>Última actualización: 26/12/2022</strong>
                </p>
                <p>
                  <strong>
                    Me comprometo a leer el reglamento interno anexo a mi
                    habitación.
                  </strong>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn"
                  data-bs-dismiss="modal"
                  onClick={() => setShowPrivacidad(false)}
                  style={{ backgroundColor: "#006a51", color: "white" }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showReservacion && (
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
                <h1>Políticas de reservación</h1>
              </div>
              <div
                className="modal-body"
                style={{ overflowY: "auto", maxHeight: "500px" }}
              >
                <p>
                  Tarifas públicas por habitación por noche en pesos mexicanos -
                  MXN más impuestos (16% IVA + 3% ISH).
                </p>
                <p>
                  Todas las reservaciones realizadas en nuestro establecimiento
                  deberán estar garantizadas por el pago de una noche de
                  hospedaje.
                </p>
                <p>
                  En caso de no recibir el pago su reserva será cancelada dentro
                  de las próximas 24 hrs.
                </p>
                <p>
                  <strong>Políticas de cambios o cancelaciones</strong>
                </p>
                <p>
                  Cambios o Cancelaciones 1 día antes de la llegada no tienen
                  costo, si la cancelación o modificación ocurre fuera de las
                  políticas y/o el huésped no se presenta el día de la llegada
                  se cobrará una noche más impuestos.
                </p>
                <p>
                  Durante la temporada del 22 de diciembre al 2 de enero cambios
                  o cancelaciones 10 días antes de la llegada no tienen costo,
                  si ocurre fuera de las políticas y/o el huésped no se presenta
                  el día de su llegada se cobrará el 100% del deposito.
                </p>
                <p>No hay devoluciones por no shows o salidas anticipadas.</p>
                <p>
                  <strong>Políticas tarifas no reembolsables</strong>
                </p>
                <p>
                  La penalidad por cancelación es del 100% de la estancia en
                  tarifas que tenga políticas <strong>NO REEMBOLSABLE</strong>.
                </p>
                <p>
                  <strong>Políticas generales del hotel</strong>
                </p>
                <p>Políticas generales del hotel</p>
                <p>
                  Hora de entrada (Check In) 15:00 hrs. y hora de salida (Check
                  Out) 12:00 hrs.
                </p>
                <p>
                  Es obligatorio registrar y presentar identificación con
                  fotografía, con fines de realizar registro a su llegada.
                </p>
                <p>
                  Se le solicitara dejar un voucher por la cantidad de $
                  2,000.00 como garantía por consumos adicionales y cualquier
                  imprevisto.
                </p>
                <p>
                  Las cantidades autorizadas en las TC podrían ser retenidas por
                  su banco o institución financiera por un período desde 72
                  horas hasta 12 días después de su check out. El hotel no se
                  hace responsable por dicha retención ni por cualquier cargo
                  adicional que realice la institución bancaria.
                </p>
                <p>
                  Tenga en cuenta que, por lo general se realiza una inspección
                  más detallada de la habitación después del horario de salida
                  nos reservamos el derecho de cobrar por los daños que se
                  encuentren antes de que la habitación se vuelva a ocupar.
                </p>
                <p>
                  El hotel no se hace responsable del dinero, alhajas, valores u
                  otros bienes que el cliente deje fuera de su vista, ni de los
                  objetos dejados en su vehículo.
                </p>
                <p>
                  No somos responsables de los paquetes, sus contenidos o el
                  almacenamiento de los mismos.
                </p>
                <p>
                  Cualquier daño material al establecimiento deberá ser pagado
                  al hotel antes de su salida, por el monto total que la
                  administración estipule.
                </p>
                <p>El hotel no cuenta con camas adicionales.</p>
                <p>
                  Queda prohibido consumir o tener encendido cualquier producto
                  de tabaco o nicotina en todo el hotel. A excepción del espacio
                  asignado para esa actividad. Si se incumple en las
                  disposiciones será objetos de una multa de hasta 1,000 UMA.
                </p>
                <p>
                  Se permite un máximo de una mascota por habitación. La mascota
                  no puede dejarse desatendida en las habitaciones en ningún
                  momento. Hay una tarifa por mascota, se requiere un pago
                  adicional de $250 MXN. En caso de que su mascota cause daños a
                  la propiedad, se cobrará una tarifa proporcional al valor de
                  mercado.
                </p>
                <p>
                  Como parte de nuestro compromiso con la seguridad de los
                  huéspedes, los empleados no revelarán la identidad, el número
                  de habitación o la presencia de un invitado a nadie que no sea
                  la autoridad municipal correspondiente, es decir, no pasaremos
                  una llamada entrante a la recepción a menos que el huésped lo
                  haya solicitado con antelación, esto incluye la toma o entrega
                  de mensajes o el reenvío de indirecto de llamadas telefónicas.
                </p>
                <p>
                  Es responsabilidad de los huéspedes comunicar su presencia y
                  numero de habitación a cualquier persona de la que deseen
                  recibir llamadas o visitas.
                </p>
                <p>
                  El hotel no asume ninguna responsabilidad por las lesiones
                  ocurridas durante el uso de las instalaciones.
                </p>
                <p>
                  El hotel rescindirá el contrato de hospedaje y pedirá al
                  huésped que desocupe su habitación en los siguientes casos:
                </p>
                <ul>
                  <li>
                    Por violar las disposiciones al reglamento y a este
                    contrato.
                  </li>
                  <li>
                    Cuando el huésped escandalice, cometa faltas a la moral o
                    cause molestia a la clientela del hotel.
                  </li>
                  <li>
                    Si causa daños materiales al establecimiento, sin perjuicio
                    del pago de indemnización correspondiente.
                  </li>
                  <li>Si el huésped comete delito</li>
                  <li>
                    Si se ausenta el huésped, sin previo aviso más de 48 horas,
                    sin previo aviso
                  </li>
                  <li>
                    Si el huésped padece de COVID o alguna otra enfermedad
                    contagiosa.
                  </li>
                </ul>
                <p>
                  Este establecimiento rechaza la explotación sexual y/o laboral
                  de personas, en particular de niñas, niños y adolescentes, por
                  lo que, en caso de detectar cualquier situación de riesgo
                  relacionada con algún cliente, se dará parte a las autoridades
                  correspondientes de forma inmediata.
                </p>
                <p>
                  Todos sus datos personales están protegidos por la Ley de
                  Protección de Datos Personales, puede consular nuestro aviso
                  de privacidad.
                </p>
                <p>
                  El huesped se compromete a leer el reglamento interno anexo en
                  su habitación.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn"
                  data-bs-dismiss="modal"
                  onClick={() => setShowReservacion(false)}
                  style={{ backgroundColor: "#006a51", color: "white" }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
