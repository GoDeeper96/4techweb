import type React from "react"
import { useState } from "react"
import { Card, Text, Input, Textarea, Button, Field } from "@fluentui/react-components"
import { Send24Regular, Mail24Regular, Phone24Regular, CheckmarkCircle24Regular } from "@fluentui/react-icons"

const CONTACT_API = import.meta.env.VITE_CONTACT_API_URL || "https://eya-tech-contact.azurewebsites.net"

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", empresa: "", mensaje: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch(`${CONTACT_API}/contactForm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
        setForm({ name: "", email: "", empresa: "", mensaje: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <Text as="h2" className="section-title">
            Hablemos, cuéntanos tu contexto.
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
                  <Text> contacto@eya-tech.com</Text>
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
            {status === "success" ? (
              <div className="form-success">
                <CheckmarkCircle24Regular style={{ fontSize: 48, color: "#0078d4" }} />
                <Text as="h3" weight="semibold" style={{ marginTop: 12 }}>
                  ¡Mensaje enviado!
                </Text>
                <Text as="p" style={{ color: "#666", marginTop: 8 }}>
                  Nos pondremos en contacto contigo muy pronto.
                </Text>
                <Button
                  appearance="subtle"
                  style={{ marginTop: 16 }}
                  onClick={() => setStatus("idle")}
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <Field label="Nombre" required>
                    <Input
                      placeholder="Tu nombre completo"
                      value={form.name}
                      onChange={e => handleChange("name", e.target.value)}
                      required
                    />
                  </Field>
                  <Field label="Email" required>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={e => handleChange("email", e.target.value)}
                      required
                    />
                  </Field>
                </div>

                <Field label="Empresa">
                  <Input
                    placeholder="Nombre de tu empresa"
                    value={form.empresa}
                    onChange={e => handleChange("empresa", e.target.value)}
                  />
                </Field>

                <Field label="Mensaje" required>
                  <Textarea
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={4}
                    value={form.mensaje}
                    onChange={e => handleChange("mensaje", e.target.value)}
                    required
                  />
                </Field>

                {status === "error" && (
                  <Text style={{ color: "red", fontSize: 14 }}>
                    Hubo un error al enviar. Intenta nuevamente o escríbenos directamente.
                  </Text>
                )}

                <Button
                  type="submit"
                  appearance="primary"
                  size="large"
                  icon={<Send24Regular />}
                  iconPosition="after"
                  className="submit-button"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
