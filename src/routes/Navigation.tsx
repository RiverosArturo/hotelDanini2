import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Contactos,
  Bar,
  Eventos,
  Inicio,
  Restaurante,
} from "../hotelDanini/pages";
import {
  DobleMatrimonial,
  KingSize,
  MasterSuite,
  QueenSize,
  SuiteDeluxe,
} from "../hotelDanini/pages/habitaciones";
import { Footer, Navbar } from "../hotelDanini/components";

export const Navigation = () => {
  return (
    <BrowserRouter>
      {/* <div className="navbarColor"> */}
      <Navbar />

      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/habitacion/queenSize" element={<QueenSize />} />
        <Route path="/habitacion/kingSize" element={<KingSize />} />
        <Route
          path="/habitacion/dobleMatrimonial"
          element={<DobleMatrimonial />}
        />
        <Route path="/habitacion/suiteDeluxe" element={<SuiteDeluxe />} />
        <Route path="/habitacion/masterSuite" element={<MasterSuite />} />
        <Route path="/restauranteDanini" element={<Restaurante />} />
        {/* <Route path="/menuDanini" element={<h1>Menú Danini</h1>} /> */}
        <Route path="/barGallo" element={<Bar />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/contactos" element={<Contactos />} />

        <Route path="/*" element={<Navigate to="/inicio" replace />} />
      </Routes>

      <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
};
