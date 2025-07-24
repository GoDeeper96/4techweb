import type React from "react"
import { Text, Link } from "@fluentui/react-components"
import tech from '../assets/tech.png'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
             <img src={tech || "/placeholder.svg"} alt="4Tech" className="logo-image" />
            <Text>Transformando negocios con tecnología</Text>
          </div>

          {/* <div className="footer-links">
            <div className="link-group">
              <Text weight="semibold">Servicios</Text>
              <Link href="#">Desarrollo Frontend</Link>
              <Link href="#">Arquitectura Cloud</Link>
              <Link href="#">Consultoría Técnica</Link>
            </div>

            <div className="link-group">
              <Text weight="semibold">Empresa</Text>
              <Link href="#">Nosotros</Link>
              <Link href="#">Casos de Éxito</Link>
              <Link href="#">Blog</Link>
            </div>

            <div className="link-group">
              <Text weight="semibold">Contacto</Text>
              <Link href="#">Consulta Gratuita</Link>
              <Link href="#">Soporte</Link>
            </div>
          </div> */}
        </div>

        <div className="footer-bottom">
          <Text size={200}>© 2025 4Tech. Todos los derechos reservados.</Text>
        </div>
      </div>
    </footer>
  )
}


