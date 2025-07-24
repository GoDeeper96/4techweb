
import type React from "react"
import { useState } from "react"
import { Button, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem } from "@fluentui/react-components"
import { Navigation24Regular, Dismiss24Regular } from "@fluentui/react-icons"
import tech from '../assets/tech.png'
export const Header: React.FC = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Cerrar menú móvil después del click
  };
  return (
    <header className="header" >
      <div className="header-container">
        <div className="logo">
          <img src={tech || "/placeholder.svg"} alt="4Tech" className="logo-image" />
    
        </div>

        <nav className="desktop-nav">
    
          <Button appearance="subtle" onClick={() => scrollToSection('hero')}>Inicio</Button>
          <Button appearance="subtle" onClick={() => scrollToSection('services')}>Servicios</Button>
          <Button appearance="subtle" onClick={() => scrollToSection('about')}>Nosotros</Button>
          <Button appearance="subtle" onClick={() => scrollToSection('contact')}>Contacto</Button>
        </nav>

        <div className="header-actions">
          <Button appearance="primary">Consulta Gratuita</Button>
        </div>

        <div className="mobile-menu">
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button
                appearance="subtle"
                icon={isMenuOpen ? <Dismiss24Regular /> : <Navigation24Regular />}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
               <MenuItem onClick={() => scrollToSection('hero')}>Inicio</MenuItem>
                <MenuItem onClick={() => scrollToSection('services')}>Servicios</MenuItem>
                <MenuItem onClick={() => scrollToSection('about')}>Nosotros</MenuItem>
                <MenuItem onClick={() => scrollToSection('contact')}>Contacto</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      </div>
    </header>
  )
}


