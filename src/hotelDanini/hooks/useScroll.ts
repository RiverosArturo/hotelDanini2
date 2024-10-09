import { useEffect, useState } from "react";

export const useScroll = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const dynamicStyles = {
        marginTop: visible
          ? windowWidth > 768
            ? 240
            : windowWidth < 769 && windowWidth > 359
            ? 168
            : windowWidth < 360 && windowWidth > 300 ?208:208
          : 100,
      };

    useEffect(() => {
        // Función que se ejecuta cuando cambia el tamaño de la ventana
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        // Agregar un evento de escucha para el cambio de tamaño de la ventana
        window.addEventListener("resize", handleResize);
    
        // Limpia el evento de escucha cuando el componente se desmonta
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          const visible = prevScrollPos > currentScrollPos;
    
          setPrevScrollPos(currentScrollPos);
          setVisible(visible);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [prevScrollPos]);

    return {
        visible,
        windowWidth,
        dynamicStyles
    }
}