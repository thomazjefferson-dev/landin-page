"use client"

import { useEffect, useRef } from "react"

interface LightningProps {
  hue?: number
  xOffset?: number
  speed?: number
  intensity?: number
  size?: number
}

export default function Lightning({ hue = 220, xOffset = 0, speed = 1, intensity = 1, size = 1 }: LightningProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const drawLightning = (x1: number, y1: number, x2: number, y2: number, displace: number) => {
      if (displace < 1) {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${Math.random() * 0.5 + 0.3})`
        ctx.lineWidth = Math.random() * 2 + 1
        ctx.stroke()
        return
      }

      const midX = (x1 + x2) / 2
      const midY = (y1 + y2) / 2
      const offsetX = (Math.random() - 0.5) * displace * intensity
      const offsetY = (Math.random() - 0.5) * displace * intensity

      drawLightning(x1, y1, midX + offsetX, midY + offsetY, displace / 2)
      drawLightning(midX + offsetX, midY + offsetY, x2, y2, displace / 2)

      // Random branches
      if (Math.random() > 0.8) {
        const branchX = midX + offsetX + (Math.random() - 0.5) * 100
        const branchY = midY + offsetY + Math.random() * 100
        drawLightning(midX + offsetX, midY + offsetY, branchX, branchY, displace / 3)
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.016 * speed

      if (Math.random() > 0.95) {
        const startX = canvas.width / 2 + xOffset + (Math.random() - 0.5) * 200
        const startY = 0
        const endX = startX + (Math.random() - 0.5) * 100
        const endY = canvas.height

        drawLightning(startX, startY, endX, endY, canvas.height * size * 0.3)
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [hue, xOffset, speed, intensity, size])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ background: "transparent" }} />
}
