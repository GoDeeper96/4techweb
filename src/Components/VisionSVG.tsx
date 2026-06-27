import type React from "react"

const VisionSVG: React.FC = () => (
  <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="vsv-fill" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#0078d4" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#00bcf2" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="vsv-beacon" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00bcf2" />
        <stop offset="100%" stopColor="#40e0d0" />
      </linearGradient>
      <linearGradient id="vsv-rocket" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00bcf2" />
        <stop offset="100%" stopColor="#40e0d0" />
      </linearGradient>
    </defs>

    {/* Stars */}
    <circle cx="28"  cy="28"  r="2.5" fill="#00bcf2" fillOpacity="0.8" />
    <circle cx="62"  cy="15"  r="1.8" fill="#0078d4" fillOpacity="0.7" />
    <circle cx="108" cy="24"  r="2"   fill="#00bcf2" fillOpacity="0.6" />
    <circle cx="148" cy="10"  r="1.5" fill="#0078d4" fillOpacity="0.8" />
    <circle cx="210" cy="18"  r="2"   fill="#00bcf2" fillOpacity="0.7" />
    <circle cx="300" cy="12"  r="2.5" fill="#00bcf2" fillOpacity="0.8" />
    <circle cx="330" cy="30"  r="1.8" fill="#0078d4" fillOpacity="0.6" />
    <circle cx="342" cy="16"  r="1.5" fill="#00bcf2" fillOpacity="0.9" />
    <circle cx="50"  cy="52"  r="1.5" fill="#00bcf2" fillOpacity="0.5" />
    <circle cx="312" cy="48"  r="1.8" fill="#0078d4" fillOpacity="0.6" />

    {/* Mountain fill */}
    <path d="M18 200 L98 82 L158 130 L238 42 L318 200 Z" fill="url(#vsv-fill)" />
    <path d="M18 200 L98 82 L158 130 L238 42 L318 200" stroke="#0078d4" strokeWidth="2" fill="none" strokeLinejoin="round" />

    {/* Beacon at summit */}
    <circle cx="238" cy="42" r="18" fill="url(#vsv-beacon)" />
    <circle cx="238" cy="42" r="9"  fill="white" />
    <line x1="238" y1="15" x2="238" y2="8"  stroke="#00bcf2" strokeWidth="2" strokeLinecap="round" />
    <line x1="257" y1="24" x2="262" y2="18" stroke="#00bcf2" strokeWidth="2" strokeLinecap="round" />
    <line x1="265" y1="42" x2="273" y2="42" stroke="#00bcf2" strokeWidth="2" strokeLinecap="round" />
    <line x1="219" y1="24" x2="214" y2="18" stroke="#00bcf2" strokeWidth="2" strokeLinecap="round" />
    <line x1="211" y1="42" x2="203" y2="42" stroke="#00bcf2" strokeWidth="2" strokeLinecap="round" />

    {/* Rocket */}
    <g transform="translate(262,18) rotate(-35)">
      <ellipse cx="0" cy="0" rx="5" ry="13" fill="url(#vsv-rocket)" />
      <path d="M-5 9 L0 15 L5 9" fill="#0078d4" fillOpacity="0.8" />
      <circle cx="0" cy="-2" r="3.5" fill="white" fillOpacity="0.9" />
    </g>

    {/* Horizon */}
    <line x1="18" y1="200" x2="340" y2="200" stroke="#0078d4" strokeWidth="1" strokeOpacity="0.2" />

    {/* Labels */}
    <text x="66"  y="218" textAnchor="middle" fontSize="10" fill="#0078d4" fontWeight="600" fillOpacity="0.7">Hoy</text>
    <text x="238" y="72"  textAnchor="middle" fontSize="10" fill="#0078d4" fontWeight="600" fillOpacity="0.85">Líderes</text>
    <text x="300" y="218" textAnchor="middle" fontSize="10" fill="#0078d4" fontWeight="600" fillOpacity="0.7">Futuro</text>
  </svg>
)

export default VisionSVG
