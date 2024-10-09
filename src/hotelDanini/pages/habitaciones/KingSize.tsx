import { Habitacion, Tabla } from "../../components";

const habitacion = {
  nombre: "King Size",
  informacion:
    "Confortable habitación con una cama king, cuentan con aire acondicionado, calefacción, televisión, teléfono, amenidades, secadora de pelo, burro de planchar y plancha a solicitud, con acceso directo al jardín de la fuente o con balcón para disfrutar de una hermosa vista a la montaña.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402577/habitaciones/kingSize/king2_tgkkop.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402575/habitaciones/kingSize/king_yynfvt.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402573/habitaciones/kingSize/ba%C3%B1o_fwyafj.jpg",
  ],
  // precio: 1200,
  cupo: 2,
};

const tabla = {
  elemento: [
    "Cama King size",
    "Aire acondicionado",
    "Secadora de pelo",
    'Pantalla de TV de 40"',
    "Internet inalámbrico",
    "Room service",
    "Teléfono",
    "Burro de planchar a solicitud",
    "Plancha a solicitud",
    "Vista a la montaña"
  ],
};

export const KingSize = () => {
  return (
    <>
      <Habitacion habitacion={habitacion} />
      <Tabla tabla={tabla} />
    </>
  );
};
