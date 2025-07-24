import type React from "react"
import { Card, Text, Input, Textarea, Button, Field } from "@fluentui/react-components"
import { Send24Regular, Mail24Regular, Phone24Regular } from "@fluentui/react-icons"

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <Text as="h2" className="section-title">
            Hablemos, cuentanos tú contexto.
          </Text>
          <Text as="p" className="section-subtitle">
            Estamos listos para ayudarte a llevar tu idea al siguiente nivel
          </Text>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <Card className="info-card">
              <div className="contact-item">
                <Mail24Regular className="contact-icon" />
                <div>
                  <Text weight="semibold">Email:</Text>
                  <Text> contacto@techconsultpro.com</Text>
                </div>
              </div>
              <div className="contact-item">
                <Phone24Regular className="contact-icon" />
                <div>
                  <Text weight="semibold">Teléfono:</Text>
                  <Text> +(51) 994244459</Text>
                </div>
              </div>
            </Card>
          </div>

          <Card className="contact-form">
            <form>
              <div className="form-row">
                <Field label="Nombre">
                  <Input placeholder="Tu nombre completo" />
                </Field>
                <Field label="Email">
                  <Input type="email" placeholder="tu@email.com" />
                </Field>
              </div>

              <Field label="Empresa">
                <Input placeholder="Nombre de tu empresa" />
              </Field>

              <Field label="Mensaje">
                <Textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} />
              </Field>

              <Button
                appearance="primary"
                size="large"
                icon={<Send24Regular />}
                iconPosition="after"
                className="submit-button"
              >
                Enviar Mensaje
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
