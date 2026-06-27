import type React from "react"
import { Text } from "@fluentui/react-components"
import tech from '../assets/tech.png'

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={tech || "/placeholder.svg"} alt="4Tech" className="logo-image" />
            <Text style={{ color: "#d1d1d1", marginTop: 8, display: "block" }}>
              Transformando negocios con tecnología
            </Text>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <Text weight="semibold" style={{ color: "white", marginBottom: 8, display: "block" }}>Servicios</Text>
              <button className="footer-link" onClick={() => scrollToSection("services")}>Desarrollo a Medida</button>
              <button className="footer-link" onClick={() => scrollToSection("services")}>SaaS & Productos</button>
              <button className="footer-link" onClick={() => scrollToSection("services")}>Integraciones</button>
            </div>

            <div className="link-group">
              <Text weight="semibold" style={{ color: "white", marginBottom: 8, display: "block" }}>Empresa</Text>
              <button className="footer-link" onClick={() => scrollToSection("about")}>Nosotros</button>
              <button className="footer-link" onClick={() => scrollToSection("products")}>Nuestros Productos</button>
              <button className="footer-link" onClick={() => scrollToSection("hero")}>Inicio</button>
            </div>

            <div className="link-group">
              <Text weight="semibold" style={{ color: "white", marginBottom: 8, display: "block" }}>Contacto</Text>
              <button className="footer-link" onClick={() => scrollToSection("contact")}>Consulta Gratuita</button>
              <button className="footer-link" onClick={() => scrollToSection("contact")}>Soporte</button>
              <button className="footer-link" onClick={() => scrollToSection("contact")}>Escribenos</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <Text size={200} style={{ color: "#a0a0a0" }}>© 2025 4Tech. Todos los derechos reservados.</Text>
        </div>
      </div>
    </footer>
  )
}
