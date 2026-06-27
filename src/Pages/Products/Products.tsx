import React, { useState, Fragment } from "react"
import { Text, Button } from "@fluentui/react-components"
import { Bot24Filled, CalendarCheckmark24Filled, Headphones24Filled, ReceiptMoney24Filled, ArrowRight16Regular } from "@fluentui/react-icons"
import ProductModal, { type ProductDetail } from "../../Components/ProductModal"

// ── Mockup SVGs ────────────────────────────────────────────────────────────────

const ChatMockup = () => (
  <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 260 }}>
    <rect x="10" y="10" width="240" height="140" rx="10" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
    <rect x="10" y="10" width="240" height="28" rx="10" fill="white" fillOpacity="0.2" />
    <circle cx="28" cy="24" r="5" fill="white" fillOpacity="0.6" />
    <circle cx="44" cy="24" r="5" fill="white" fillOpacity="0.4" />
    <circle cx="60" cy="24" r="5" fill="white" fillOpacity="0.25" />
    <text x="135" y="28" textAnchor="middle" fontSize="10" fill="white" fillOpacity="0.8" fontWeight="600">ChatBot IA</text>
    <rect x="22" y="50" width="130" height="24" rx="12" fill="white" fillOpacity="0.22" />
    <text x="87" y="66" textAnchor="middle" fontSize="9" fill="white" fillOpacity="0.9">Hola, ¿en qué te ayudo?</text>
    <rect x="108" y="82" width="130" height="24" rx="12" fill="white" fillOpacity="0.35" />
    <text x="173" y="98" textAnchor="middle" fontSize="9" fill="white" fillOpacity="0.9">Necesito información</text>
    <rect x="22" y="114" width="150" height="24" rx="12" fill="white" fillOpacity="0.22" />
    <text x="97" y="130" textAnchor="middle" fontSize="9" fill="white" fillOpacity="0.9">Claro, con mucho gusto...</text>
  </svg>
)

const AppMockup = () => (
  <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 130 }}>
    {/* Phone frame */}
    <rect x="10" y="4" width="140" height="192" rx="16" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" fill="white" fillOpacity="0.06" />
    {/* WhatsApp-green header */}
    <rect x="10" y="4" width="140" height="36" rx="16" fill="white" fillOpacity="0.22" />
    <rect x="10" y="20" width="140" height="20" fill="white" fillOpacity="0.22" />
    <circle cx="30" cy="22" r="9" fill="white" fillOpacity="0.4" />
    <text x="30" y="26" textAnchor="middle" fontSize="8" fill="white" fillOpacity="0.9" fontWeight="700">R</text>
    <text x="78" y="19" textAnchor="middle" fontSize="9" fill="white" fillOpacity="0.95" fontWeight="700">CitaloApp</text>
    <text x="78" y="30" textAnchor="middle" fontSize="7" fill="white" fillOpacity="0.6">en línea</text>
    {/* Bot bubble 1 */}
    <rect x="14" y="48" width="98" height="22" rx="10" fill="white" fillOpacity="0.2" />
    <text x="22" y="62" fontSize="7.5" fill="white" fillOpacity="0.9">¿Qué servicio necesitas?</text>
    {/* User bubble */}
    <rect x="58" y="78" width="88" height="20" rx="10" fill="white" fillOpacity="0.32" />
    <text x="66" y="92" fontSize="7.5" fill="white" fillOpacity="0.95">Cita para mañana 🗓</text>
    {/* Bot bubble 2 */}
    <rect x="14" y="106" width="112" height="32" rx="10" fill="white" fillOpacity="0.2" />
    <text x="22" y="119" fontSize="7.5" fill="white" fillOpacity="0.9">Disponible mañana:</text>
    <text x="22" y="131" fontSize="7.5" fill="white" fillOpacity="0.75">• 10:00 am  • 3:00 pm</text>
    {/* User reply */}
    <rect x="84" y="146" width="62" height="20" rx="10" fill="white" fillOpacity="0.32" />
    <text x="92" y="160" fontSize="7.5" fill="white" fillOpacity="0.95">3:00 pm ✓</text>
    {/* Confirmation bubble */}
    <rect x="14" y="172" width="120" height="18" rx="9" fill="white" fillOpacity="0.25" />
    <text x="74" y="184" textAnchor="middle" fontSize="7" fill="white" fillOpacity="0.9">✅ ¡Reserva confirmada!</text>
  </svg>
)

const AudioMockup = () => (
  <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 260 }}>
    <rect x="10" y="10" width="240" height="140" rx="10" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
    <circle cx="130" cy="52" r="24" fill="none" stroke="white" strokeOpacity="0.6" strokeWidth="2.5" />
    <path d="M106 52 Q106 36 130 36 Q154 36 154 52" fill="none" stroke="white" strokeOpacity="0.6" strokeWidth="2.5" />
    <rect x="103" y="48" width="6" height="14" rx="3" fill="white" fillOpacity="0.7" />
    <rect x="151" y="48" width="6" height="14" rx="3" fill="white" fillOpacity="0.7" />
    {[20, 10, 26, 16, 30, 12, 24, 8, 28, 14, 22, 18, 26].map((h, i) => (
      <rect key={i} x={30 + i * 16} y={104 - h / 2} width="8" height={h} rx="4" fill="white" fillOpacity={0.3 + (i % 3) * 0.15} />
    ))}
    <rect x="30" y="120" width="200" height="4" rx="2" fill="white" fillOpacity="0.2" />
    <rect x="30" y="120" width="90" height="4" rx="2" fill="white" fillOpacity="0.7" />
    <text x="30" y="138" fontSize="9" fill="white" fillOpacity="0.6">0:00</text>
    <text x="222" y="138" fontSize="9" fill="white" fillOpacity="0.6">2:45</text>
  </svg>
)

const InvoiceMockup = () => (
  <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 240 }}>
    <rect x="20" y="8" width="200" height="144" rx="6" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
    <rect x="20" y="8" width="200" height="32" rx="6" fill="white" fillOpacity="0.2" />
    <text x="120" y="22" textAnchor="middle" fontSize="9" fill="white" fillOpacity="0.5">FACTURA ELECTRÓNICA</text>
    <text x="120" y="34" textAnchor="middle" fontSize="10" fill="white" fillOpacity="0.9" fontWeight="700">F001-00128</text>
    <line x1="30" y1="52" x2="210" y2="52" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
    <text x="60" y="49" fontSize="8" fill="white" fillOpacity="0.5">Descripción</text>
    <text x="178" y="49" fontSize="8" fill="white" fillOpacity="0.5">Precio</text>
    <text x="36" y="68" fontSize="9" fill="white" fillOpacity="0.8">Servicio Web</text>
    <text x="178" y="68" fontSize="9" fill="white" fillOpacity="0.8">S/ 800</text>
    <line x1="30" y1="74" x2="210" y2="74" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
    <text x="36" y="88" fontSize="9" fill="white" fillOpacity="0.8">Mantenimiento</text>
    <text x="178" y="88" fontSize="9" fill="white" fillOpacity="0.8">S/ 200</text>
    <line x1="30" y1="94" x2="210" y2="94" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
    <text x="36" y="108" fontSize="9" fill="white" fillOpacity="0.8">IGV (18%)</text>
    <text x="178" y="108" fontSize="9" fill="white" fillOpacity="0.8">S/ 180</text>
    <rect x="20" y="118" width="200" height="24" rx="0" fill="white" fillOpacity="0.2" />
    <text x="50" y="134" fontSize="10" fill="white" fillOpacity="0.95" fontWeight="700">Total SUNAT</text>
    <text x="175" y="134" fontSize="10" fill="white" fillOpacity="0.95" fontWeight="700">S/ 1,380</text>
    <circle cx="196" cy="78" r="14" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 2" />
    <text x="196" y="82" textAnchor="middle" fontSize="7" fill="white" fillOpacity="0.5" fontWeight="700">SUNAT</text>
  </svg>
)

// ── Slide visual components ────────────────────────────────────────────────────

const AsIsToBeVisual = ({ asIs, toBe }: { asIs: string[]; toBe: string[] }) => (
  <div style={{ display: "flex", width: "100%", minHeight: 148 }}>
    <div style={{ flex: 1, padding: "16px 14px 16px 18px", display: "flex", flexDirection: "column", gap: 7 }}>
      <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.2px", color: "#a4262c", marginBottom: 2 }}>
        As-Is
      </div>
      {asIs.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
          <span style={{ color: "#a4262c", fontSize: 12, flexShrink: 0, lineHeight: 1.5 }}>✕</span>
          <span style={{ fontSize: 12, color: "#605e5c", lineHeight: 1.5 }}>{item}</span>
        </div>
      ))}
    </div>
    <div style={{ display: "flex", alignItems: "center", padding: "0 10px" }}>
      <div style={{ fontSize: 20, color: "#0078d4", fontWeight: 300 }}>→</div>
    </div>
    <div style={{ flex: 1, padding: "16px 18px 16px 14px", display: "flex", flexDirection: "column", gap: 7, background: "rgba(0,120,212,0.05)", borderLeft: "1px solid #e8f0fb" }}>
      <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.2px", color: "#0078d4", marginBottom: 2 }}>
        To-Be
      </div>
      {toBe.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
          <span style={{ color: "#107c10", fontSize: 12, flexShrink: 0, lineHeight: 1.5 }}>✓</span>
          <span style={{ fontSize: 12, color: "#323130", lineHeight: 1.5 }}>{item}</span>
        </div>
      ))}
    </div>
  </div>
)

const WorkflowVisual = ({ steps, color }: { steps: string[]; color: string }) => (
  <div style={{ display: "flex", alignItems: "flex-start", width: "100%", padding: "20px 16px 16px" }}>
    {steps.map((step, i) => (
      <Fragment key={i}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center", minWidth: 0 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: color, color: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, flexShrink: 0,
            boxShadow: `0 3px 10px ${color}55`,
          }}>
            {i + 1}
          </div>
          <span style={{ fontSize: 11, color: "#323130", lineHeight: 1.4, fontWeight: 500, padding: "0 4px" }}>{step}</span>
        </div>
        {i < steps.length - 1 && (
          <div style={{ color: "#c8c6c4", fontSize: 18, paddingTop: 9, flexShrink: 0 }}>›</div>
        )}
      </Fragment>
    ))}
  </div>
)

const AppBanner = ({ gradient, children }: { gradient: string; children: React.ReactNode }) => (
  <div style={{ width: "100%", background: gradient, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 60px", minHeight: 148 }}>
    {children}
  </div>
)

// ── Product data ───────────────────────────────────────────────────────────────

const productDetails: ProductDetail[] = [
  {
    name: "Chatbots Inteligentes",
    tagline: "Atención 24/7 que resuelve, califica y escala — sin incrementar tu equipo.",
    gradient: "linear-gradient(135deg, #0078d4, #00bcf2)",
    slides: [
      {
        label: "Situación actual",
        title: "El equipo de atención repite las mismas respuestas cada día",
        body: "Capital humano dedicado a tareas predecibles mientras los casos de mayor valor esperan en cola.",
        visual: <AsIsToBeVisual
          asIs={["Consultas repetitivas gestionadas por agentes", "Tiempos de espera de horas para respuestas simples", "Atención limitada al horario laboral"]}
          toBe={["Consultas frecuentes resueltas de forma autónoma", "Respuesta en segundos, sin filas de espera", "Disponibilidad 24/7 sin costo adicional"]}
        />,
      },
      {
        label: "Objetivo",
        title: "Atención inmediata para lo repetitivo, humana para lo complejo",
        body: "Los agentes intervienen solo donde aportan valor real. La mayoría de consultas se resuelven en segundos.",
        visual: <AppBanner gradient="linear-gradient(135deg, #0078d4, #00bcf2)"><ChatMockup /></AppBanner>,
      },
      {
        label: "Validación",
        title: "Validado en pilotos con empresas de retail y servicios",
        body: "",
        bullets: [
          "En pilotos con empresas medianas detectamos que entre el 55% y 72% de consultas entrantes son repetitivas y predecibles",
          "Implementamos el asistente en canales activos y confirmamos resolución autónoma sin intervención del equipo",
          "Las áreas comerciales identificaron oportunidades de calificación de leads que antes se perdían por capacidad",
        ],
      },
      {
        label: "Indicadores",
        title: "KPIs que mejoramos en cada implementación",
        body: "",
        bullets: [
          "Consultas resueltas sin agente humano: 65% en promedio",
          "Tiempo de respuesta: de 4+ horas a menos de 30 segundos",
          "Disponibilidad de atención: de horario laboral a 24/7",
          "NPS de atención al cliente: incremento promedio de 18 puntos",
          "Costo por consulta gestionada: reducción del 60–70%",
        ],
      },
      {
        label: "El flujo",
        title: "Cómo opera en tu empresa",
        body: "",
        visual: <WorkflowVisual color="#0078d4" steps={["Cliente consulta por canal activo", "Asistente identifica la intención", "Responde autónomamente o escala con contexto", "Interacción registrada y aprendizaje continuo"]} />,
      },
    ],
  },
  {
    name: "CitaloApp",
    tagline: "Tu agenda llena, gestionada por IA en WhatsApp — sin contestar el teléfono.",
    gradient: "linear-gradient(135deg, #25D366, #128C7E)",
    slides: [
      {
        label: "Situación actual",
        title: "Los clientes intentan reservar, pero nadie contesta — y se van a la competencia",
        body: "La agenda se maneja por llamadas perdidas, grupos de WhatsApp o cuadernos. Los no-shows generan pérdidas y no hay forma de anticiparlos.",
        visual: <AsIsToBeVisual
          asIs={["Reservas perdidas por falta de respuesta inmediata", "Agenda en cuadernos o grupos de WhatsApp sin control", "No-shows sin previo aviso generan tiempo y dinero perdido"]}
          toBe={["IA responde y agenda automáticamente 24/7", "Agenda centralizada y actualizada en tiempo real", "Recordatorios automáticos reducen no-shows un 40%"]}
        />,
      },
      {
        label: "Objetivo",
        title: "El cliente reserva en WhatsApp en lenguaje natural — sin formularios, sin apps",
        body: "La IA entiende la solicitud, muestra disponibilidad, confirma la cita y envía recordatorios. Todo en la conversación.",
        visual: <AppBanner gradient="linear-gradient(135deg, #25D366, #128C7E)"><AppMockup /></AppBanner>,
      },
      {
        label: "Validación",
        title: "Validado con clínicas, consultorios, salones y restaurantes",
        body: "",
        bullets: [
          "Pilotos con negocios de servicios donde la reserva por teléfono es el cuello de botella principal",
          "En todos los casos, más del 60% de reservas llegaron fuera del horario de atención",
          "Los negocios reportaron reducción inmediata de carga administrativa en recepción",
          "Clientes valoran la confirmación instantánea y los recordatorios automáticos",
        ],
      },
      {
        label: "Indicadores",
        title: "KPIs que mejoramos en cada implementación",
        body: "",
        bullets: [
          "Reservas gestionadas sin intervención humana: más del 70%",
          "Reducción de no-shows con recordatorio automático: 40%",
          "Incremento de reservas en horario no laboral: +35%",
          "Tiempo promedio de confirmación de cita: menos de 2 minutos",
          "Reducción de carga administrativa en recepción: 60%",
        ],
      },
      {
        label: "El flujo",
        title: "Del mensaje al calendario — sin fricción",
        body: "",
        visual: <WorkflowVisual color="#25D366" steps={["Cliente escribe por WhatsApp en lenguaje natural", "IA entiende el servicio, fecha y hora deseada", "Confirma disponibilidad y registra la reserva", "Recordatorio automático + integración a pagos y SUNAT"]} />,
      },
    ],
  },
  {
    name: "BriefyAI",
    tagline: "Cada reunión y documento convertido en conocimiento listo para decidir.",
    gradient: "linear-gradient(135deg, #1a1a2e, #0078d4)",
    slides: [
      {
        label: "Situación actual",
        title: "La información existe, pero nadie tiene tiempo de procesarla",
        body: "Los equipos directivos toman decisiones con información incompleta o llegan desalineados a reuniones clave.",
        visual: <AsIsToBeVisual
          asIs={["Acuerdos de reuniones sin seguimiento formal", "Información crítica enterrada en correos e hilos", "Equipo directivo operando con contexto parcial"]}
          toBe={["Cada reunión genera compromisos claros y responsables", "Brief personalizado por rol disponible en minutos", "Organización alineada en un mismo contexto"]}
        />,
      },
      {
        label: "Objetivo",
        title: "Ningún acuerdo perdido, ningún responsable sin contexto",
        body: "Cada persona recibe lo que necesita saber, en el formato que necesita, sin leer todo.",
        visual: <AppBanner gradient="linear-gradient(135deg, #1a1a2e, #0078d4)"><AudioMockup /></AppBanner>,
      },
      {
        label: "Validación",
        title: "Validado con equipos directivos y de gestión de proyectos",
        body: "",
        bullets: [
          "Pilotos con equipos de dirección en empresas de consultoría y servicios profesionales",
          "Detectamos que el 40% de los acuerdos tomados en reuniones no se ejecutaban por falta de seguimiento formal",
          "Los equipos que adoptaron el flujo de briefs reportaron mayor alineación y reducción de reuniones de seguimiento",
          "Los líderes recuperaron tiempo significativo que antes destinaban a redistribuir información manualmente",
        ],
      },
      {
        label: "Indicadores",
        title: "KPIs que mejoramos en cada implementación",
        body: "",
        bullets: [
          "Cumplimiento de action items: de 55% a 85% en promedio",
          "Tiempo para ponerse al día sobre un tema: de 45 min a menos de 5 min",
          "Reuniones de seguimiento por proyecto: reducidas en un 30%",
          "Tiempo en redistribuir y resumir información: reducción del 40%",
          "Alineación entre áreas sobre decisiones tomadas: mejora significativa en todos los pilotos",
        ],
      },
      {
        label: "El flujo",
        title: "De la reunión al brief en minutos",
        body: "",
        visual: <WorkflowVisual color="#0078d4" steps={["Reunión o documento finaliza", "IA extrae decisiones y responsables", "Brief enviado por rol automáticamente", "Compromisos en seguimiento activo"]} />,
      },
    ],
  },
  {
    name: "VentaIQ",
    tagline: "Operación unificada, facturación automática y cumplimiento SUNAT garantizado.",
    gradient: "linear-gradient(135deg, #005a9e, #0078d4)",
    slides: [
      {
        label: "Situación actual",
        title: "Facturación manual, compliance frágil, operación desconectada",
        body: "Los errores de cumplimiento tributario generan multas y la gerencia opera sin visibilidad consolidada entre locales.",
        visual: <AsIsToBeVisual
          asIs={["Comprobantes emitidos manualmente con riesgo de error", "Inventario reconciliado de forma manual semanalmente", "Gerencia sin visibilidad operativa en tiempo real"]}
          toBe={["Comprobante SUNAT generado automáticamente al registrar la venta", "Inventario actualizado en tiempo real en todos los locales", "Reportes consolidados disponibles al instante"]}
        />,
      },
      {
        label: "Objetivo",
        title: "Cada venta genera su comprobante. El inventario se actualiza. La gerencia ve todo.",
        body: "Sin intervención manual. Sin errores tributarios. Sin reportes atrasados.",
        visual: <AppBanner gradient="linear-gradient(135deg, #005a9e, #0078d4)"><InvoiceMockup /></AppBanner>,
      },
      {
        label: "Validación",
        title: "Validado en operaciones de retail y restaurantes con alto volumen",
        body: "",
        bullets: [
          "Pilotos en cadenas con múltiples locales en Lima y provincias",
          "Identificamos que el 80% de las empresas realizaba reconciliaciones de inventario manualmente al cierre de semana",
          "Eliminamos la necesidad de conciliaciones manuales y los errores de declaración asociados",
          "Los equipos de contabilidad redujeron el tiempo de cierre mensual de días a horas",
        ],
      },
      {
        label: "Indicadores",
        title: "KPIs que mejoramos en cada implementación",
        body: "",
        bullets: [
          "Errores de compliance tributario: reducidos a 0 en operaciones piloto",
          "Tiempo de cierre de caja diario: reducción del 65%",
          "Visibilidad de inventario: de reconciliación semanal a tiempo real",
          "Incidencias por quiebre de stock no detectado: reducción del 45%",
          "Tiempo de declaración mensual ante SUNAT: reducido en más del 50%",
        ],
      },
      {
        label: "El flujo",
        title: "De la venta al comprobante válido sin intervención manual",
        body: "",
        visual: <WorkflowVisual color="#005a9e" steps={["Cajero registra la venta", "Sistema calcula impuestos y genera comprobante", "SUNAT valida en el mismo flujo", "Inventario y reportes actualizados al instante"]} />,
      },
    ],
  },
]

const products = [
  { mockup: <ChatMockup />, gradient: "linear-gradient(135deg, #0078d4, #00bcf2)", icon: <Bot24Filled />, title: "Chatbots Inteligentes", description: "Asistentes virtuales con IA que atienden a tus clientes 24/7, resuelven consultas y mejoran la conversión.", tag: "IA & Automatización" },
  { mockup: <AppMockup />, gradient: "linear-gradient(135deg, #25D366, #128C7E)", icon: <CalendarCheckmark24Filled />, title: "CitaloApp", description: "Agente IA en WhatsApp que gestiona citas en lenguaje natural 24/7, con recordatorios automáticos, pagos y facturación SUNAT.", tag: "WhatsApp / IA" },
  { mockup: <AudioMockup />, gradient: "linear-gradient(135deg, #1a1a2e, #0078d4)", icon: <Headphones24Filled />, title: "BriefyAI", description: "IA que convierte reuniones, documentos y reportes en briefs ejecutivos estructurados y accionables.", tag: "IA / Productividad" },
  { mockup: <InvoiceMockup />, gradient: "linear-gradient(135deg, #005a9e, #0078d4)", icon: <ReceiptMoney24Filled />, title: "VentaIQ", description: "POS inteligente con facturación electrónica integrada con SUNAT, gestión de inventario y operación multi-local.", tag: "Fintech / SUNAT" },
]

export default function Products() {
  const [activeProduct, setActiveProduct] = useState<ProductDetail | null>(null)

  return (
    <section className="products" id="products">
      <div className="products-container">
        <div className="products-header">
          <Text as="h2" className="section-title">Nuestros Productos</Text>
          <Text as="p" className="section-subtitle">Soluciones propias, listas para usar y adaptarse a tu negocio</Text>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-showcase-card">
              <div className="product-mockup-area" style={{ background: product.gradient }}>
                {product.mockup}
              </div>
              <div className="product-showcase-body">
                <p className="product-title">{product.title}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-card-footer">
                  <span className="product-tag">{product.tag}</span>
                  <Button
                    appearance="subtle"
                    size="small"
                    icon={<ArrowRight16Regular />}
                    iconPosition="after"
                    className="product-ver-mas"
                    onClick={() => setActiveProduct(productDetails[index])}
                  >
                    Ver más
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </section>
  )
}
