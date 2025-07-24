import type React from "react"
import { Button, Text } from "@fluentui/react-components"
import { ArrowRight24Regular, Play24Regular } from "@fluentui/react-icons"

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <Text as="h1" className="hero-title">
              TRANSFORMAMOS TU NEGOCIO
            </Text>
            <Text as="h2" className="hero-subtitle-large">
              con tecnología de vanguardia
            </Text>
            <Text as="p" className="hero-description">
             Creamos soluciones innovadoras que potencian tus operaciones y están diseñadas para escalar junto con tu crecimiento. Garantizamos continuidad, rendimiento y adaptabilidad a largo plazo.
            </Text>
            {/* <div className="hero-actions">
              <Button appearance="primary" size="large" icon={<ArrowRight24Regular />} iconPosition="after">
                Comenzar Proyecto
              </Button>
              <Button appearance="subtle" size="large" icon={<Play24Regular />}>
                Ver Demo
              </Button>
            </div> */}
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <img src="/img/hero-tech.png"  className="hero-background-image" />
              <div className="floating-card card-1">
                <div className="card-content">
                  <div className="card-icon saas-icon"></div>
                  <span>SaaS Solutions</span>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-content">
                  <div className="card-icon enterprise-icon"></div>
                  <span>Apps Empresariales</span>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-content">
                  <div className="card-icon cloud-icon"></div>
                  <span>Cloud Integration</span>
                </div>
              </div>
              <div className="floating-card card-4">
                <div className="card-content">
                  <div className="card-icon ai-icon"></div>
                  <span>IA & Automatización</span>
                </div>
              </div>
              <div className="floating-card card-5">
                <div className="card-content">
                  <div className="card-icon mobile-icon"></div>
                  <span>Apps Móviles</span>
                </div>
              </div>
              <div className="floating-card card-6">
                <div className="card-content">
                  <div className="card-icon analytics-icon"></div>
                  <span>Analytics & BI</span>
                </div>
              </div>
              <div className="floating-card card-7">
                <div className="card-content">
                  <div className="card-icon security-icon"></div>
                  <span>Chatbots</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
