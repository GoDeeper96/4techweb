import type React from "react"
import { Card, CardHeader, Text, Button } from "@fluentui/react-components"
import {ArrowRight16Regular, BoxCheckmark24Regular, BoxToolbox24Filled, Code24Filled } from "@fluentui/react-icons"

const Services: React.FC = () => {
const services = [
  {
    icon: <BoxCheckmark24Regular />,
    title: "SaaS listos para crecer",
    description:
      "Productos SaaS ya desarrollados que puedes implementar o adaptar para tu negocio. Soluciones probadas, listas para escalar.",
    features: [
      "Listas para producción",
      "Paneles administrativos modernos",
      "Módulos reutilizables",
      "Soporte y mantenimiento opcional",
    ],
  },
  {
    icon: <BoxToolbox24Filled />,
    title: "Desarrollo a Medida",
    description:
      "Aplicaciones web personalizadas desde cero, diseñadas para resolver necesidades específicas de tu negocio.",
    features: [
      "Análisis de requerimientos",
      "Desarrollo y testing",
      "Diseño UI/UX enfocado en el usuario o negocio",
      "Escalabilidad, disponibilidad y continuidad garantizadas",
    ],
  },
  {
    icon: <Code24Filled />,
    title: "Integraciones & Migraciones",
    description:
      "Transformación de sistemas legacy, conexión con APIs y migración de plataformas hacia tecnologías modernas.",
    features: [
      "Integración con servicios externos",
      "Migración a la nube",
      "Modernización de sistemas antiguos",
      "Automatización de procesos manuales",
    ],
  },
];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <Text as="h2" className="section-title">
            Nuestros Servicios
          </Text>
          <Text as="p" className="section-subtitle">
            Soluciones integrales para impulsar tu transformación digital
          </Text>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <CardHeader
                image={<div className="service-icon">{service.icon}</div>}
                header={<Text weight="semibold">{service.title}</Text>}
                description={<Text>{service.description}</Text>}
              />
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
              <Button
                appearance="subtle"
                icon={<ArrowRight16Regular />}
                iconPosition="after"
                className="service-button"
              >
                Saber más
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
