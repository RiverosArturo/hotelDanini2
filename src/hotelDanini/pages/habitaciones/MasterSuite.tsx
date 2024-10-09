import { Habitacion, Tabla } from "../../components";

const habitacion = {
  nombre: "Master Suite",
  informacion:
    "Cuenta con dos habitaciones, una equipada con cama king y la otra con cama queen. Cada habitación cuenta con baño propio, amenidades, televisión, teléfono, secadora de pelo, burro de planchar y plancha. Además, la suite incluye una cómoda sala, un elegante comedor, cafetera y microondas para mayor conveniencia. Para su confort, también ofrece aire acondicionado y calefacción. Además, dispone de balcones desde donde podrá deleitarse con una impresionante vista a la montaña.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402609/habitaciones/masterDeluxe/master2_rzrba3.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402613/habitaciones/masterDeluxe/mSala_sr2h6a.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1715054800/habitaciones/masterDeluxe/masterSuite3_oavck3.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402607/habitaciones/masterDeluxe/master_kcy6q8.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402611/habitaciones/masterDeluxe/mComedor_hhviok.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1715054797/habitaciones/masterDeluxe/masterSuite2_pt5ag5.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1715054797/habitaciones/masterDeluxe/masterSuite_qd4s6w.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402604/habitaciones/masterDeluxe/ba%C3%B1oM_ev9bta.jpg",
  ],
  // precio: 2800,
  cupo: 4,
};

const tabla = {
  elemento: [
    "Una recámara queen",
    "Una recámara king",
    "2 baños",
    "Sala",
    "Comedor",
    "Microondas",
    "Frigobar",
    "Cafetera",
    "Pantalla TV 40 pulgadas",
    "Internet inalámbrico",
    "Teléfono",
    "Balcón",
    "Aire acondicionado",
    "Secadora de pelo",
    "Burro de planchar",
    "Room service",
    "Vista a la montaña",
    "Acceso al jardín Danini",
  ],
};

export const MasterSuite = () => {
  return (
    <>
      <Habitacion habitacion={habitacion} />
      <Tabla tabla={tabla} />
    </>
  );
};
