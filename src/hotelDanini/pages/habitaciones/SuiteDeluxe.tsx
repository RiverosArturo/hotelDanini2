import { Habitacion, PublicidadSF, Tabla } from "../../components";
import { useScroll } from "../../hooks";

const habitacion = {
  nombre: "Suite Deluxe",
  informacion:
    "Amplia habitación con dos camas Queen, cuenta con un vestidor, aire acondicionado, calefacción, televisión, teléfono, amenidades, secadora de pelo, burro de planchar y plancha, terraza donde podrá disfrutar una hermosa vista a la montaña.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402690/habitaciones/suiteDeluxe/suite_hd8yhc.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402693/habitaciones/suiteDeluxe/terraza_gt0sja.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402686/habitaciones/suiteDeluxe/ba%C3%B1oS_nforsj.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694412270/habitaciones/suiteDeluxe/ba%C3%B1oS2_sdb28w.jpg",
  ],
  // precio: 2200,
  cupo: 4,
};

const tabla = {
  elemento: [
    "2 camas queen size",
    "Terraza",
    "Vestidor",
    "Aire acondicionado",
    "Secadora de pelo",
    'Pantalla de TV de 40"',
    "Internet inalámbrico",
    "Room service",
    "Teléfono",
    "Burro de planchar",
    "Plancha",
    "Vista a la montaña"
  ],
};

export const SuiteDeluxe = () => {
  const { dynamicStyles } = useScroll();

  return (
    <div style={dynamicStyles}>
      <Habitacion habitacion={habitacion} />
      <Tabla tabla={tabla} />
      <PublicidadSF />
    </div>
  );
};
