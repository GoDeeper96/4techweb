import type React from "react"

const MissionSVG: React.FC = () => (
  <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="msv-center" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0078d4" />
        <stop offset="100%" stopColor="#00bcf2" />
      </linearGradient>
      <linearGradient id="msv-node" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8f4ff" />
        <stop offset="100%" stopColor="#d0eaff" />
      </linearGradient>
    </defs>

    {/* Glow rings */}
    <circle cx="180" cy="120" r="100" fill="#0078d4" fillOpacity="0.04" />
    <circle cx="180" cy="120" r="70" fill="#0078d4" fillOpacity="0.06" />

    {/* Dashed connectors */}
    <line x1="94" y1="63" x2="147" y2="96" stroke="#0078d4" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.45" />
    <line x1="266" y1="63" x2="213" y2="96" stroke="#0078d4" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.45" />
    <line x1="94" y1="177" x2="147" y2="144" stroke="#0078d4" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.45" />
    <line x1="266" y1="177" x2="213" y2="144" stroke="#0078d4" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.45" />

    {/* Center hub */}
    <circle cx="180" cy="120" r="50" fill="url(#msv-center)" />
    {/* Lightning bolt: transformation */}
    <path d="M188 96 L169 122 H184 L171 148 L201 116 H186 L199 96 Z" fill="white" fillOpacity="0.95" />

    {/* Node TL: empresa/building */}
    <circle cx="76" cy="52" r="28" fill="url(#msv-node)" stroke="#0078d4" strokeWidth="1.5" />
    <rect x="65" y="42" width="22" height="20" rx="1" fill="none" stroke="#0078d4" strokeWidth="1.5" />
    <rect x="69" y="46" width="5" height="5" rx="0.5" fill="#0078d4" fillOpacity="0.7" />
    <rect x="77" y="46" width="5" height="5" rx="0.5" fill="#0078d4" fillOpacity="0.7" />
    <rect x="73" y="54" width="5" height="8" rx="0.5" fill="#0078d4" fillOpacity="0.7" />
    <text x="76" y="91" textAnchor="middle" fontSize="9" fill="#0078d4" fontWeight="600">Empresa</text>

    {/* Node TR: cloud */}
    <circle cx="284" cy="52" r="28" fill="url(#msv-node)" stroke="#0078d4" strokeWidth="1.5" />
    <path d="M272 57 Q268 57 268 53 Q268 48 273 48 Q275 43 281 43 Q288 43 289 49 Q293 48 295 52 Q299 52 299 56 Q299 61 294 61 L272 61 Z" fill="#0078d4" fillOpacity="0.75" />
    <text x="284" y="91" textAnchor="middle" fontSize="9" fill="#0078d4" fontWeight="600">Tecnología</text>

    {/* Node BL: chart/growth */}
    <circle cx="76" cy="188" r="28" fill="url(#msv-node)" stroke="#0078d4" strokeWidth="1.5" />
    <polyline points="63,196 70,184 77,190 84,178 91,182" stroke="#0078d4" strokeWidth="2" fill="none" strokeLinecap="round" />
    <text x="76" y="227" textAnchor="middle" fontSize="9" fill="#0078d4" fontWeight="600">Crecimiento</text>

    {/* Node BR: code */}
    <circle cx="284" cy="188" r="28" fill="url(#msv-node)" stroke="#0078d4" strokeWidth="1.5" />
    <text x="284" y="194" textAnchor="middle" fontSize="15" fill="#0078d4" fontFamily="monospace" fontWeight="700">{'</>'}</text>
    <text x="284" y="227" textAnchor="middle" fontSize="9" fill="#0078d4" fontWeight="600">Desarrollo</text>
  </svg>
)

export default MissionSVG
