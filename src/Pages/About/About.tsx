import type React from "react"
import { Text } from "@fluentui/react-components"

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="mv-grid">
          <div className="mv-block">
            <Text weight="semibold" className="mv-label">Misión</Text>
            <Text className="mv-body">
              Llevar inteligencia artificial a las operaciones de las empresas de forma responsable y sostenible.
              Validamos cada solución antes de construirla, la implementamos con rigor,
              la escalamos cuando demuestra valor y la mantenemos para que siga funcionando — sin dejar deuda técnica ni promesas sin cumplir.
            </Text>
          </div>
          <div className="mv-block mv-block-right">
            <Text weight="semibold" className="mv-label">Visión</Text>
            <Text className="mv-body">
              Ser la consultora de IA de referencia para empresas que quieren hacer las cosas bien.
              No vendemos hype — acompañamos a nuestros clientes desde la primera validación
              hasta una IA en producción que escala, cumple con los estándares de seguridad y genera impacto medible a largo plazo.
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
