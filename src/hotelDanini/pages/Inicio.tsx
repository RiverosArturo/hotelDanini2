import { Contenido } from "../components";
import { useScroll } from "../hooks";

export const Inicio = () => {
  const { dynamicStyles } = useScroll();

  return (
    <>
      <div style={dynamicStyles}>
        <div
          style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}
        >
          <div
            className="col-md-12"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <video autoPlay controls style={{ width: "100%", height: "100%" }}>
              <source
                src="https://res.cloudinary.com/dawwp31sm/video/upload/v1694406874/video/hotelDanini.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <Contenido />
      </div>
    </>
  );
};
