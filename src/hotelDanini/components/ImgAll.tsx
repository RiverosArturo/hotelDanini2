
interface Props {
    selectedImage: string;
    handleCloseModal: () => void;
}

export const ImgAll = ({ selectedImage, handleCloseModal }:Props ) => {
    return (
        <>
            {/* Modal para mostrar la imagen en tamaño completo */}
            {selectedImage && (
                <div
                    className="modal"
                    onClick={handleCloseModal} // Cerrar modal al hacer clic fuera de la imagen
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.8)", // Fondo semi-transparente
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <img
                        src={selectedImage}
                        alt="Imagen ampliada"
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            objectFit: "contain",
                        }}
                    />
                </div>
            )}
        </>
    );
};