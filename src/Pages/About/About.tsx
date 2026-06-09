import type React from "react"
import { Text } from "@fluentui/react-components"

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="mission-vision-section">
              <div className="mission-item">
                <Text weight="semibold" size={400} className="mission-vision-title">
                  🎯 Nuestra Misión
                </Text>
                <Text size={400} className="mission-vision-text">
                  Acelerar la transformación digital de las empresas mediante soluciones tecnológicas innovadoras,
                  ágiles y escalables que generen impacto real en sus resultados de negocio.
                </Text>
              </div>

              <div className="vision-item">
                <Text weight="semibold" size={400} className="mission-vision-title">
                  🚀 Nuestra Visión
                </Text>
                <Text size={400} className="mission-vision-text">
                  Ser el socio tecnológico de referencia para empresas que buscan innovar sin límites,
                  liderando el futuro del desarrollo de software con velocidad, calidad y resultados medibles.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
