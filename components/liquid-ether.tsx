"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface LiquidEtherProps {
  colors?: string[]
  mouseForce?: number
  cursorSize?: number
  isViscous?: boolean
  viscous?: number
  iterationsViscous?: number
  iterationsPoisson?: number
  resolution?: number
  isBounce?: boolean
  autoDemo?: boolean
  autoSpeed?: number
  autoIntensity?: number
  takeoverDuration?: number
  autoResumeDelay?: number
  autoRampDuration?: number
}

export default function LiquidEther({
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  resolution = 0.5,
  isBounce = false,
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 3000,
  autoRampDuration = 0.6,
}: LiquidEtherProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const timeRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Setup scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Setup camera
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    cameraRef.current = camera

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2) * resolution)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create gradient material
    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(width, height) },
        mouse: { value: new THREE.Vector2(0.5, 0.5) },
        color1: { value: new THREE.Color(colors[0]) },
        color2: { value: new THREE.Color(colors[1]) },
        color3: { value: new THREE.Color(colors[2]) },
        mouseForce: { value: mouseForce / 100 },
        autoIntensity: { value: autoIntensity },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform vec2 mouse;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform float mouseForce;
        uniform float autoIntensity;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          vec2 center = vec2(0.5);
          
          // Auto demo movement
          vec2 autoMove = vec2(
            sin(time * 0.3) * 0.3,
            cos(time * 0.2) * 0.3
          ) * autoIntensity;
          
          // Mouse influence
          vec2 mouseInfluence = (mouse - uv) * mouseForce;
          
          // Combined position
          vec2 pos = uv + autoMove + mouseInfluence;
          
          // Create flowing gradient
          float wave1 = sin(pos.x * 3.0 + time * 0.5) * 0.5 + 0.5;
          float wave2 = cos(pos.y * 3.0 - time * 0.3) * 0.5 + 0.5;
          float wave3 = sin(length(pos - center) * 5.0 - time * 0.4) * 0.5 + 0.5;
          
          // Mix colors
          vec3 color = mix(color1, color2, wave1);
          color = mix(color, color3, wave2 * wave3);
          
          gl_FragColor = vec4(color, 0.3);
        }
      `,
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current.targetX = (event.clientX - rect.left) / width
      mouseRef.current.targetY = 1 - (event.clientY - rect.top) / height
    }

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01 * autoSpeed

      // Smooth mouse movement
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1

      material.uniforms.time.value = timeRef.current
      material.uniforms.mouse.value.set(mouseRef.current.x, mouseRef.current.y)

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    container.addEventListener("mousemove", handleMouseMove)
    animate()

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      renderer.dispose()
      material.dispose()
      geometry.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [colors, mouseForce, resolution, autoSpeed, autoIntensity])

  return <div ref={containerRef} className="absolute inset-0" />
}
