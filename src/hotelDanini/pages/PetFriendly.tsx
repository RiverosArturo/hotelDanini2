import { useScroll } from "../hooks";
import styles from "../styles/styles.module.css";

export const PetFriendly = () => {
  const { dynamicStyles } = useScroll();

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
          src="https://res.cloudinary.com/dawwp31sm/image/upload/v1729496544/inicio/petFriendly_mpxkp7.jpg" // Cambia esta URL por la imagen correspondiente
          alt="Pet Friendly"
          className={`img-fluid ${styles.heroImage}`}
        />
        <div className={styles.imageOverlay}>
          <h1 className={styles.titulo} style={{ color: '#fff' }}>Pet Friendly</h1>
        </div>
      </div>
      <div className={`container-fluid ${styles.paqueteContainer}`}>
        <div className={`p-4 ${styles.packageDetails}`}>
          <h2 className={styles.packageTitle}>Política de mascotas</h2>
          <p style={{ textAlign: 'left' }}></p>

          <h3 style={{ color: '#d79623', fontSize: '16px', fontWeight: 'bold' }}>Solo se permiten perros</h3>
          <ul className={styles.incluyeList}>
            <li>Perro de raza pequeña.</li>
            <li>Un perro por habitación.</li>
            <li>Limitado a dos habitaciones por noche.</li>
            <li>Deberá firmar reglamento.</li>
            <li>La mascota no puede entrar al restaurante.</li>
            <li>La mascota no puede quedarse sola en la habitación.</li>
            <li>Deberá traer correa todo el tiempo.</li>
          </ul>

          <h3 style={{ color: '#d79623', fontSize: '16px', fontWeight: 'bold' }}>Tarifa</h3>
          <p><span style={{ fontWeight: 'bold' }}>$300.00 por mascota</span></p>
          <p style={{ fontSize: '13px' }}>Tarifa vigente, sujeta a cambios sin previo aviso</p>
        </div>
      </div>
    </div>
  )
}
