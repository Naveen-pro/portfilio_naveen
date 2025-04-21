import React, { useState, useEffect, useRef } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import { useTheme } from '../context/ThemeContext'

const AnimatedBackground = () => {
  const { reducedMotion } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  
  // Track mouse position
  useEffect(() => {
    if (reducedMotion) return
    
    const handleMouseMove = (event) => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: event.clientX / width,
          y: event.clientY / height
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [reducedMotion])

  // Animate gradient based on mouse position
  const gradientProps = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: reducedMotion 
      ? { backgroundPosition: '0% 50%' } 
      : { backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%` },
    config: { tension: 120, friction: 14 }
  })

  // Static background for reduced motion
  if (reducedMotion) {
    return (
      <div className="fixed inset-0 w-full h-full -z-20">
        <div 
          style={{
            background: 'linear-gradient(132deg, rgba(27,30,39,0.95) 0%, rgba(24,27,37,0.95) 25%, rgba(34,38,55,0.95) 50%, rgba(41,45,65,0.95) 75%, rgba(47,52,75,0.95) 100%)',
          }}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full -z-20 overflow-hidden">
      <animated.div 
        style={{
          ...gradientProps,
          backgroundSize: '200% 200%',
          background: 'linear-gradient(132deg, rgba(27,30,39,0.95) 0%, rgba(24,27,37,0.95) 25%, rgba(34,38,55,0.95) 50%, rgba(41,45,65,0.95) 75%, rgba(47,52,75,0.95) 100%)',
        }}
        className="absolute inset-0 w-full h-full"
      />
      
      <MouseTrailEffect mousePosition={mousePosition} />
    </div>
  )
}

// Mouse trail effect with particles that follow the cursor
const MouseTrailEffect = ({ mousePosition }) => {
  const { reducedMotion } = useTheme()
  const particlesCount = reducedMotion ? 0 : 12
  const particles = Array.from({ length: particlesCount })
  
  return (
    <>
      {particles.map((_, index) => (
        <MouseParticle 
          key={index} 
          index={index} 
          mousePosition={mousePosition}
          total={particlesCount}
        />
      ))}
    </>
  )
}

const MouseParticle = ({ index, mousePosition, total }) => {
  const { reducedMotion } = useTheme()
  const delay = index * 50
  const size = Math.max(6, 20 - (index * 1.5))
  const opacity = Math.max(0.1, 1 - (index * 0.08))
  
  const props = useSpring({
    from: { left: 0, top: 0, opacity: 0, scale: 0 },
    to: {
      left: mousePosition.x * window.innerWidth,
      top: mousePosition.y * window.innerHeight,
      opacity: opacity,
      scale: 1,
    },
    config: {
      tension: 180 - (index * 5),
      friction: 12 + (index * 2),
    },
    delay: delay,
    immediate: reducedMotion
  })

  const particleColor = index % 3 === 0 
    ? 'rgba(99, 102, 241, 0.6)' 
    : index % 3 === 1 
      ? 'rgba(79, 70, 229, 0.6)'
      : 'rgba(139, 92, 246, 0.6)'

  return (
    <animated.div
      style={{
        ...props,
        width: size,
        height: size,
        backgroundColor: particleColor,
        position: 'absolute',
        borderRadius: '50%',
        transform: props.scale.to(s => `scale(${s})`),
        boxShadow: `0 0 10px ${particleColor}`,
        willChange: 'transform, opacity, left, top',
      }}
    />
  )
}

export default AnimatedBackground 