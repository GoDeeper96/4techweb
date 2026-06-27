import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Text, Button } from "@fluentui/react-components"
import {
  Dismiss24Regular,
  ChevronLeft24Regular,
  ChevronRight24Regular,
  Warning24Regular,
  Lightbulb24Regular,
  CheckmarkCircle24Regular,
  AppsListDetail24Regular,
  Building24Regular,
  ArrowRight24Regular,
} from "@fluentui/react-icons"

export interface ProductSlide {
  label: string
  title: string
  body: string
  bullets?: string[]
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
  <Warning24Regular />,
  <Lightbulb24Regular />,
  <CheckmarkCircle24Regular />,
  <AppsListDetail24Regular />,
  <Building24Regular />,
]

export default function ProductDrawer({ product, onClose }: Props) {
  const [slide, setSlide] = useState(0)
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

  const scrollToContact = () => {
    onClose()
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  return createPortal(
    <>
      <div
        className={`drawer-backdrop ${visible ? "drawer-backdrop--in" : ""}`}
        onClick={onClose}
      />
      <div className={`drawer ${visible ? "drawer--in" : ""}`}>
        {/* Header */}
        <div className="drawer-header" style={{ background: product.gradient }}>
          <div className="drawer-header-text">
            <Text className="drawer-product-name">{product.name}</Text>
            <Text className="drawer-product-tagline">{product.tagline}</Text>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Cerrar">
            <Dismiss24Regular />
          </button>
        </div>

        {/* Slide content */}
        <div className="drawer-body">
          <div className="drawer-slide-icon">
            {slideIcons[slide] ?? <CheckmarkCircle24Regular />}
          </div>
          <Text className="drawer-slide-label">{current.label}</Text>
          <Text weight="semibold" className="drawer-slide-title">{current.title}</Text>
          <Text className="drawer-slide-body">{current.body}</Text>
          {current.bullets && (
            <ul className="drawer-bullets">
              {current.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer nav */}
        <div className="drawer-footer">
          <div className="drawer-nav">
            <button
              className="drawer-nav-btn"
              onClick={() => setSlide(s => Math.max(0, s - 1))}
              disabled={slide === 0}
              aria-label="Anterior"
            >
              <ChevronLeft24Regular />
            </button>

            <div className="drawer-dots">
              {product.slides.map((_, i) => (
                <button
                  key={i}
                  className={`drawer-dot ${i === slide ? "drawer-dot--active" : ""}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="drawer-nav-btn"
              onClick={() => setSlide(s => Math.min(total - 1, s + 1))}
              disabled={slide === total - 1}
              aria-label="Siguiente"
            >
              <ChevronRight24Regular />
            </button>
          </div>

          {slide === total - 1 && (
            <Button
              appearance="primary"
              icon={<ArrowRight24Regular />}
              iconPosition="after"
              className="drawer-cta"
              onClick={scrollToContact}
            >
              Quiero saber más
            </Button>
          )}
        </div>
      </div>
    </>,
    document.body
  )
}
