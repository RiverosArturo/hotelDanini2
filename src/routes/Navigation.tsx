import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Contactos,
  Bar,
  Eventos,
  Inicio,
  Restaurante,
  Nosotros,
  Paquetes
} from "../hotelDanini/pages";
import {
  DobleMatrimonial,
  KingSize,
  MasterSuite,
  QueenSize,
  SuiteDeluxe
} from "../hotelDanini/pages/habitaciones";
import { Footer, Navbar, WhatsappButton } from "../hotelDanini/components";
import { useScroll } from "../hotelDanini/hooks";
import { PetFriendly } from "../hotelDanini/pages/PetFriendly";

const roomRoutes = [
  { path: "/habitacion/queenSize", component: <QueenSize /> },
  { path: "/habitacion/kingSize", component: <KingSize /> },
  { path: "/habitacion/dobleMatrimonial", component: <DobleMatrimonial /> },
  { path: "/habitacion/suiteDeluxe", component: <SuiteDeluxe /> },
  { path: "/habitacion/masterSuite", component: <MasterSuite /> },
];

export const Navigation = () => {

  const { windowWidth } = useScroll();

  useEffect(() => {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    const mainContent = document.querySelector("main") as HTMLElement;

    if (navbar && mainContent) {
      // mainContent.style.paddingTop = `${navbar.offsetHeight}px`;
      if (windowWidth < 360) {
        mainContent.style.paddingTop = '3px';
      } else if (windowWidth < 769) {
        mainContent.style.paddingTop = '43px';
      } else if (windowWidth < 992) {
        mainContent.style.paddingTop = '35px';
      } else {
        mainContent.style.paddingTop = '71px';
      }
    }
  }, [windowWidth]);

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          {roomRoutes.map((room) => (
            <Route key={room.path} path={room.path} element={room.component} />
          ))}
          <Route path="/paquetes" element={<Paquetes />} />
          <Route path="/restauranteDanini" element={<Restaurante />} />
          <Route path="/barGallo" element={<Bar />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/petFriendly" element={<PetFriendly />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappButton />
    </BrowserRouter>
  );
};
