'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/data'

const ease = [0.16, 1, 0.3, 1] as const

// Animated geometric wireframe SVG
function HeroObject({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const rotateX = -mouseY * 10
  const rotateY = mouseX * 10

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}
        animate={{
          rotateZ: [0, 2, -2, 0],
          y: [0, -16, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          width="520"
          height="520"
          viewBox="0 0 520 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full max-h-full"
        >
          {/* Outer octagon */}
          <polygon
            points="260,20 420,100 480,260 420,420 260,500 100,420 40,260 100,100"
            stroke="rgba(245,240,232,0.08)"
            strokeWidth="1"
            fill="none"
          />
          {/* Inner octagon rotated */}
          <polygon
            points="260,80 380,140 420,260 380,380 260,440 140,380 100,260 140,140"
            stroke="rgba(245,240,232,0.06)"
            strokeWidth="1"
            fill="none"
          />
          {/* Core diamond */}
          <polygon
            points="260,140 360,260 260,380 160,260"
            stroke="rgba(200,146,42,0.25)"
            strokeWidth="1"
            fill="rgba(200,146,42,0.02)"
          />
          {/* Amber accent lines */}
          <line x1="260" y1="20" x2="260" y2="140" stroke="rgba(200,146,42,0.5)" strokeWidth="1.5" />
          <line x1="260" y1="380" x2="260" y2="500" stroke="rgba(200,146,42,0.5)" strokeWidth="1.5" />
          <line x1="20" y1="260" x2="140" y2="260" stroke="rgba(200,146,42,0.3)" strokeWidth="1" />
          <line x1="380" y1="260" x2="500" y2="260" stroke="rgba(200,146,42,0.3)" strokeWidth="1" />
          {/* Cross lines */}
          <line x1="100" y1="100" x2="420" y2="420" stroke="rgba(245,240,232,0.04)" strokeWidth="1" />
          <line x1="420" y1="100" x2="100" y2="420" stroke="rgba(245,240,232,0.04)" strokeWidth="1" />
          {/* Outer structural lines */}
          <line x1="260" y1="20" x2="480" y2="260" stroke="rgba(245,240,232,0.06)" strokeWidth="1" />
          <line x1="480" y1="260" x2="260" y2="500" stroke="rgba(245,240,232,0.06)" strokeWidth="1" />
          <line x1="260" y1="500" x2="40" y2="260" stroke="rgba(245,240,232,0.06)" strokeWidth="1" />
          <line x1="40" y1="260" x2="260" y2="20" stroke="rgba(245,240,232,0.06)" strokeWidth="1" />
          {/* Center dot */}
          <circle cx="260" cy="260" r="4" fill="rgba(200,146,42,0.8)" />
          <circle cx="260" cy="260" r="20" stroke="rgba(200,146,42,0.2)" strokeWidth="1" fill="none" />
          <circle cx="260" cy="260" r="50" stroke="rgba(200,146,42,0.08)" strokeWidth="1" fill="none" />
          {/* Corner dots */}
          <circle cx="260" cy="140" r="3" fill="rgba(200,146,42,0.6)" />
          <circle cx="360" cy="260" r="3" fill="rgba(200,146,42,0.6)" />
          <circle cx="260" cy="380" r="3" fill="rgba(200,146,42,0.6)" />
          <circle cx="160" cy="260" r="3" fill="rgba(200,146,42,0.6)" />
          {/* Outer dots */}
          <circle cx="260" cy="20" r="2" fill="rgba(245,240,232,0.3)" />
          <circle cx="480" cy="260" r="2" fill="rgba(245,240,232,0.3)" />
          <circle cx="260" cy="500" r="2" fill="rgba(245,240,232,0.3)" />
          <circle cx="40" cy="260" r="2" fill="rgba(245,240,232,0.3)" />
          {/* Grid overlay (subtle) */}
          <line x1="160" y1="140" x2="360" y2="140" stroke="rgba(245,240,232,0.04)" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="160" y1="380" x2="360" y2="380" stroke="rgba(245,240,232,0.04)" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="140" y1="160" x2="140" y2="360" stroke="rgba(245,240,232,0.04)" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="380" y1="160" x2="380" y2="360" stroke="rgba(245,240,232,0.04)" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5  // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMouse({ x, y })
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-obsidian flex items-center overflow-hidden"
    >
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(200,146,42,0.06) 0%, transparent 70%)',
          transform: 'translate(50%, -50%)',
        }}
      />

      <div className="container-wide w-full pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-8rem)]">

          {/* LEFT — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Tag */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <span className="tag">{siteConfig.nameEn} · Иннополис</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-green-400/80">
                  {siteConfig.availability}
                </span>
              </span>
            </motion.div>

            {/* H1 */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="font-playfair text-display-l text-mist leading-none mb-1">
                Веб-разработчик
              </p>
              <h1 className="font-playfair text-display-xl text-ivory leading-none">
                для бизнеса,
                <br />
                который растёт.
              </h1>
            </motion.div>

            {/* Subtagline */}
            <motion.p
              variants={itemVariants}
              className="text-body-l text-slate max-w-md mb-10 leading-relaxed"
            >
              {siteConfig.subTagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
              <a href="#projects" className="btn-primary">
                Смотреть проекты ↓
              </a>
              <a href="#contact" className="btn-ghost">
                Обсудить задачу →
              </a>
            </motion.div>



          </motion.div>

          {/* RIGHT — 3D Object */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.4 }}
            className="lg:col-span-7 relative h-[400px] lg:h-[600px] hidden md:block"
          >
            <HeroObject mouseX={mouse.x} mouseY={mouse.y} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-mist">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-mist to-transparent"
        />
      </motion.div>
    </section>
  )
}
