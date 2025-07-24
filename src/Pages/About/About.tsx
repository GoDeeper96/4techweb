import type React from "react"
import { Card, Text, Avatar } from "@fluentui/react-components"
import { CheckmarkCircle24Regular } from "@fluentui/react-icons"

const About: React.FC = () => {
  const achievements = [
    "Transformamos tu negocio traduciéndose en ventas reales",
    "Tecnología innovadora que marca la diferencia",
    "Soluciones escalables y elásticas que crecen contigo",
    "Tranquilidad total: continuidad y mantenibilidad garantizadas",
  ]

  return (
    <section className="about"  id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <Text as="h2" className="section-title">
              Las <span className="innovation-highlight">4T</span> que Impulsan tu Éxito
            </Text>
            <Text as="p" className="about-description">
              Nuestro enfoque se basa en cuatro pilares fundamentales que garantizan el éxito de tu proyecto.
              <strong> No son solo promesas, son resultados medibles.</strong> Cada solución que desarrollamos está
              diseñada para generar impacto real en tu negocio desde el primer día.
            </Text>

            <Text as="p" className="about-description-secondary">
              Combinamos velocidad de desarrollo con solidez técnica. Nuestra juventud nos permite adoptar las últimas
              tecnologías sin miedo, mientras que nuestra visión estratégica asegura que cada línea de código contribuya
              al crecimiento de tu empresa. <strong>Resultados, no experimentos.</strong>
            </Text>

            <div className="achievements">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <CheckmarkCircle24Regular className="check-icon" />
                  <Text>{achievement}</Text>
                </div>
              ))}
            </div>
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

          <div className="about-cards">
            <Card className="team-card">
              <div className="team-header">
                <Avatar name="4Tech Team" size={72} color="brand" />
                <div className="team-info">
                  <Text weight="semibold" size={500} className="team-title">
                    Metodología 4T
                  </Text>
                  <Text size={300} className="team-subtitle">
                    Transformar + Tecnología + Tranquilidad
                  </Text>
                </div>
              </div>
              <Text className="team-description">
                <strong>Enfoque integral.</strong> No solo desarrollamos software, construimos soluciones que impulsan
                ventas, se adaptan al crecimiento y perduran en el tiempo. Tu éxito es nuestro compromiso.
              </Text>
              
            </Card>

            <Card className="methodology-card">
              <div className="methodology-header">
                <Text weight="semibold" size={500} className="methodology-title">
                  Nuestro Ciclo de Desarrollo 
                </Text>
                <Text size={300} className="methodology-subtitle">
                  En 6 Fases estructuradas
                </Text>
              </div>
              <div className="methodology-phases">
                <div className="phase-item">
                  <span className="phase-number">1</span>
                  <div className="phase-content">
                    <Text weight="semibold">Inicio</Text>
                    <Text size={200}>Objetivos, necesidades, problemas y soluciones documentadas</Text>
                  </div>
                </div>
                <div className="phase-item">
                  <span className="phase-number">2</span>
                  <div className="phase-content">
                    <Text weight="semibold">Planificación</Text>
                    <Text size={200}>Análisis exhaustivo de requerimientos y recursos</Text>
                  </div>
                </div>
                <div className="phase-item">
                  <span className="phase-number">3</span>
                  <div className="phase-content">
                    <Text weight="semibold">Diseño</Text>
                    <Text size={200}>Historias de usuario, procesos y arquitectura técnica</Text>
                  </div>
                </div>
                <div className="phase-item">
                  <span className="phase-number">4</span>
                  <div className="phase-content">
                    <Text weight="semibold">Desarrollo</Text>
                    <Text size={200}>Construcción modular y desarrollo iterativo</Text>
                  </div>
                </div>
                <div className="phase-item">
                  <span className="phase-number">5</span>
                  <div className="phase-content">
                    <Text weight="semibold">Monitoreo</Text>
                    <Text size={200}>Pruebas de estrés, integración y calidad</Text>
                  </div>
                </div>
                <div className="phase-item">
                  <span className="phase-number">6</span>
                  <div className="phase-content">
                    <Text weight="semibold">Cierre</Text>
                    <Text size={200}>Manuales técnicos, documentación y continuidad</Text>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
