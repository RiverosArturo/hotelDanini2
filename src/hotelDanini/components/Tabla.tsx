import styles from "../styles/styles.module.css";

interface Props {
  tabla: Tabla;
}
interface Tabla {
  elemento: string[];
}
export const Tabla = ({ tabla }: Props) => {
  return (
    <>
      <div className={`${styles.tabla} container-fluid`}>
        <h1>SERVICIOS DE HABITACIÓN</h1>
        <table className="table">
          <tbody>
            {tabla.elemento.map((servicio) => (
              <tr key={servicio}>
                <th scope="row">
                  {servicio}
                  <i
                    className="bi bi-check2-all p-3 h3"
                    style={{ color: "lime" }}
                  ></i>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
