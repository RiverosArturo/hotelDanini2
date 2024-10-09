import { Habitacion, Tabla } from "../../components";

const habitacion = {
  nombre: "Doble Matrimonial",
  informacion:
    "Confortable habitación con dos camas matrimoniales, todas las habitaciones cuentan con aire acondicionado, calefacción, televisión, teléfono, amenidades, secadora de pelo, burro de planchar y plancha a solicitud, con acceso directo al jardín de la fuente o con balcón para disfrutar de una agradable vista a la montaña.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402545/habitaciones/dobleMatrimonial/doble2_jcfxbb.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402543/habitaciones/dobleMatrimonial/doble_x6qnoa.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402541/habitaciones/dobleMatrimonial/ba%C3%B1o2_tdvdam.jpg",
  ],
  // precio: 1600,
  cupo: 4,
};

const tabla = {
  elemento: [
    "2 camas matrimoniales",
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

export const DobleMatrimonial = () => {
  return (
    <>
      <Habitacion habitacion={habitacion} />
      <Tabla tabla={tabla} />
    </>
  );
};
