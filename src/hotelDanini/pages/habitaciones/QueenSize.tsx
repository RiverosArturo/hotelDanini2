import { Habitacion, PublicidadSF, Tabla } from "../../components";
import { useScroll } from "../../hooks";

const habitacion = {
  nombre: "Queen Size",
  informacion:
    "Confortable habitación con una cama Queen, cuenta con aire acondicionado, calefacción, televisión, teléfono, amenidades, secadora de pelo, burro de planchar y plancha a solicitud, con acceso directo al jardín de la fuente o con balcón para disfrutar de una agradable vista a la montaña.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402655/habitaciones/queenSize/queen2_xe497t.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402652/habitaciones/queenSize/queen_ay0ymz.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402650/habitaciones/queenSize/ba%C3%B1o_etyjbf.jpg",
  ],
  // precio: 900,
  cupo: 2,
};

const tabla = {
  elemento: [
    "Cama queen size",
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

export const QueenSize = () => {
  const { dynamicStyles } = useScroll();

  return (
    <div style={dynamicStyles}>
      <Habitacion habitacion={habitacion} />
      <Tabla tabla={tabla} />
      <PublicidadSF />
    </div>
  );
};
