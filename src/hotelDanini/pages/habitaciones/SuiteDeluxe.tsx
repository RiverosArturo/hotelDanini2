import { Habitacion, Tabla } from "../../components";

const habitacion = {
  nombre: "Suite Deluxe",
  informacion:
    "Amplia habitación con dos camas queen, cuenta con un vestidor, aire acondicionado, calefacción, televisión, teléfono, amenidades, secadora de pelo, burro de planchar y plancha, terraza en desde donde podrá disfrutar con una hermosa vista a la montaña.",
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
  return (
    <>
      <Habitacion habitacion={habitacion} />
      <Tabla tabla={tabla} />
    </>
  );
};
