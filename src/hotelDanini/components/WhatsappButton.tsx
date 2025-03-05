

export const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5212311023773" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 text-white px-4 py-2 rounded-full flex items-center shadow-lg no-underline hover:bg-[#1EBE57] active:bg-[#128C7E] transition duration-300 z-50"
      style={{ backgroundColor: "#25D366" ,position: "fixed", bottom: "20px", right: "20px", zIndex: 1000, textDecoration: "none", fontSize: "18px"}}
    >
      <i className="bi bi-whatsapp" style={{ fontSize: "18px", marginRight: "8px" }}></i>
      Chat
    </a>
  )
}
