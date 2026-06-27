import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Button } from "@fluentui/react-components"
import {
  Dismiss24Regular,
  ChevronLeft24Regular,
  ChevronRight24Regular,
  Warning24Regular,
  Rocket24Regular,
  CheckmarkCircle24Regular,
  ArrowTrending24Regular,
  ArrowRight24Regular,
} from "@fluentui/react-icons"

export interface ProductSlide {
  label: string
  title: string
  body: string
  bullets?: string[]
  visual?: React.ReactNode
}

export interface ProductDetail {
  name: string
  tagline: string
  gradient: string
  slides: ProductSlide[]
}

interface Props {
  product: ProductDetail | null
  onClose: () => void
}

const slideIcons = [
  <Warning24Regular />,        // Situación actual
  <Rocket24Regular />,         // Objetivo
  <CheckmarkCircle24Regular />, // Validación
  <ArrowTrending24Regular />,  // Indicadores
  <ArrowRight24Regular />,     // El flujo
]

export default function ProductModal({ product, onClose }: Props) {
  const [slide, setSlide] = useState(0)
  const [dir, setDir] = useState<"next" | "prev">("next")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (product) {
      setSlide(0)
      requestAnimationFrame(() => setVisible(true))
      document.body.style.overflow = "hidden"
    } else {
      setVisible(false)
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [product])

  if (!product) return null

  const total = product.slides.length
  const current = product.slides[slide]

  const go = (idx: number) => {
    setDir(idx > slide ? "next" : "prev")
    setSlide(idx)
  }

  const scrollToContact = () => {
    onClose()
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  return createPortal(
    <div
      className={`modal-backdrop ${visible ? "modal-backdrop--in" : ""}`}
      onClick={onClose}
    >
      <div
        className={`modal-card ${visible ? "modal-card--in" : ""}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Gradient header */}
        <div className="modal-header" style={{ background: product.gradient }}>
          <div>
            <p className="modal-product-name">{product.name}</p>
            <p className="modal-product-tagline">{product.tagline}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
            <Dismiss24Regular />
          </button>
        </div>

        {/* Slide */}
        <div className="modal-body">
          <div key={`${slide}-${dir}`} className="modal-slide">
            {current.visual ? (
              <div className="modal-slide-visual">{current.visual}</div>
            ) : (
              <div className="modal-slide-icon">
                {slideIcons[slide] ?? <CheckmarkCircle24Regular />}
              </div>
            )}
            <span className="modal-slide-label">{current.label}</span>
            <h3 className="modal-slide-title">{current.title}</h3>
            {current.body && (
              <p className="modal-slide-body">{current.body}</p>
            )}
            {current.bullets && (
              <ul className="modal-bullets">
                {current.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button
            className="modal-nav-btn"
            onClick={() => go(slide - 1)}
            disabled={slide === 0}
            aria-label="Anterior"
          >
            <ChevronLeft24Regular />
          </button>

          <div className="modal-dots">
            {product.slides.map((_, i) => (
              <button
                key={i}
                className={`modal-dot ${i === slide ? "modal-dot--active" : ""}`}
                onClick={() => go(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {slide === total - 1 ? (
            <Button
              appearance="primary"
              size="small"
              icon={<ArrowRight24Regular />}
              iconPosition="after"
              onClick={scrollToContact}
            >
              Quiero saber más
            </Button>
          ) : (
            <button
              className="modal-nav-btn"
              onClick={() => go(slide + 1)}
              aria-label="Siguiente"
            >
              <ChevronRight24Regular />
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
