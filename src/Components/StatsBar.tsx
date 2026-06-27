import type React from "react"

const StatsBar: React.FC = () => {
  const stats = [
    { value: "2+",    label: "Años especializados en IA",       sub: "Nos enfocamos en inteligencia artificial" },
    { value: "5+",   label: "Soluciones en producción",        sub: "No prototipos ni MVPs" },
    { value: "Scale", label: "IA enterprise-grade",             sub: "Arquitectura que crece contigo" },
    { value: "DPA",   label: "Seguridad & protección de datos", sub: "Compliance garantizado" },
  ]

  return (
    <section className="stats-bar">
      <div className="stats-container">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <span className={`stat-value${stat.value.length > 3 ? " stat-value--word" : ""}`}>{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-sub">{stat.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar
