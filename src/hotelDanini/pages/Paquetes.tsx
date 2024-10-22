
import { PaquetesCarrusel } from "../components";
import { useScroll } from "../hooks";
import { Paquete } from "../interfaces/paquetes";

import styles from "../styles/styles.module.css";


export const Paquetes = () => {
  const { dynamicStyles } = useScroll();

  const packages: Paquete[] = [
    {
      titulo: 'Paquete Nupcial',
      descripcion: 'Nuestra Suite Nupcial es decorada con toques de romanticismo y magia, cada aroma, detalle y accesorio es pensado en el confort que mereces.',
      lista: [
        'Hospedaje por una noche en Habitación cama King Size, con balcón y vista a la montaña, habitación 17.',
        'Botella de vino espumoso Asti capeta.',
        'Deliciosa canasta de frutas.',
        'Arreglo de la habitación con pétalos de flores y globos.',
        'Dos desayunos Buffet en el Restaurante Danini del hotel.',
        'Salida hasta las 3pm de la habitación.',
        'Uso de los jardines para toma de fotografía de los novios.',
      ],
      precio: '$3,190.00 con impuestos incluidos',
      advertencia: 'Tarifa vigente, sujeta a cambios sin previo aviso.',
    },
    {
      titulo: 'Arreglo de mesa para novios',
      descripcion: 'Celebra tu gran día con un exquisito arreglo de mesa. Nuestro equipo cuida cada detalle para crear un ambiente romántico y sofisticado, reflejando la esencia de tu historia de amor.',
      lista: [
        'Mantelería',
        'Cubiertos',
        'Copas',
        'Velas',
        'Petalos de rosas',
        'Decoración'
      ],
      precio: '$350.00',
      advertencia: 'Tarifa vigente, sujeta a cambios sin previo aviso.',
    },
    {
      titulo: 'Sesion de fotos',
      descripcion: 'Captura el momento con las vistas más espectaculares de Teziutlán.',
      lista: [
        'Uso de los jardines, áreas comunes y restaurante del hotel.',
        'Café, té o agua de sabor.',
        'Galletas.',
        'De 1 a 40 personas.',
      ],
      precio: '$2,500.00 por sesion',
      advertencia: 'Tarifa vigente, sujeta a cambios sin previo aviso.',
    },
  ];

  return (
    <div
      className={`${styles.nosotros}`}
      style={{
        ...dynamicStyles,
        position: "relative",
        width: "100%",
        paddingBottom: '0px'
      }}
    >
      <div className={styles.imageContainer}>
        <img
          src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694404188/eventos/boda5_h8thuo.jpg" // Cambia esta URL por la imagen correspondiente
          alt="Paquetes Especiales"
          className={`img-fluid ${styles.heroImage}`}
        />
        <div className={styles.imageOverlay}>
          <h1 className={styles.titulo} style={{ color: '#fff' }}>Paquetes Especiales</h1>
        </div>
      </div>
      <div className={`container-fluid ${styles.paqueteContainer}`}>
        <PaquetesCarrusel paquetes={packages} />
      </div>
    </div>
  )
}
