'use client'
import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

const SCALE_Y = 0.92          // elliptical orbit like the mock
const R = 300                 // label radius before ellipse squash
const LABELS = [
  { id:'art',      text:'ART',      deg: 160, r: R-25 },
  { id:'music',    text:'MUSIC',    deg: 215, r: R-10 },
  { id:'writing',  text:'WRITING',  deg: 270, r: R-15 },
  { id:'apps',     text:'APPS',     deg: 325, r: R-20 },
  { id:'research', text:'RESEARCH', deg:   0, r: R-10 },
]
const easeSnap = [0.16,1,0.3,1]
const easeSoft = [0.22,0.61,0.36,1]
const xy = (r, deg) => {
  const t = (deg*Math.PI)/180
  return { x: r*Math.cos(t), y: (r*Math.sin(t))*SCALE_Y }
}

export default function FioreHero(){
  const reduce = useReducedMotion()

  return (
    <section className="relative grid place-items-center min-h-[80vh] text-[#E6E8F2] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_10%,#0F1426_0%,#0B0E1A_65%,#090B12_100%)]"/>
      <div className="absolute inset-0 -z-10 opacity-[.035] mix-blend-overlay" style={{backgroundImage:'url(/textures/micrograin.png)'}}/>

      {/* Title */}
      <header className="text-center mb-8">
        <div className="tracking-[0.34em] text-xs text-[#9FB0D1]">OBIOESIO BASSEY</div>
        <h1 className="tracking-[0.22em] text-4xl md:text-6xl font-semibold mt-3">FIORE INTERFACE</h1>
      </header>

      {/* Flower + labels */}
      <motion.div
        initial={{opacity:0, scale:.98}}
        animate={{
          opacity:1,
          scale: reduce ? 1 : [1,1.03,1],
          transition: reduce
            ? { duration:.9, ease:easeSoft }
            : { duration:6, times:[0,.5,1], repeat:Infinity, ease:'easeInOut' }
        }}
        className="relative"
      >
        {/* Fresh SVG - matches reference visual */}
        <svg width="660" height="660" viewBox="-330 -330 660 660" role="img" aria-label="Fiore Flower">
          <defs>
            {/* Radial gradient for each petal - bright at base, fading to edges */}
            <radialGradient id="petalGrad" cx="50%" cy="80%">
              <stop offset="0%" stopColor="#E8F0FF" stopOpacity="0.95"/>
              <stop offset="30%" stopColor="#A8C5FF" stopOpacity="0.75"/>
              <stop offset="70%" stopColor="#6B8FFF" stopOpacity="0.50"/>
              <stop offset="100%" stopColor="#4A6FE8" stopOpacity="0.15"/>
            </radialGradient>

            {/* Subtle glow filter */}
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
              <feBlend in="SourceGraphic" in2="blur" mode="normal" opacity="0.6"/>
            </filter>

            {/* Center radial glow */}
            <radialGradient id="centerGlow">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1"/>
              <stop offset="40%" stopColor="#D5E5FF" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#8FAFFF" stopOpacity="0"/>
            </radialGradient>

            {/* Single petal shape - cleaner almond/teardrop */}
            <path id="petal"
              d="M 0 0
                 Q -60 -60, -50 -140
                 Q -30 -190, 0 -210
                 Q 30 -190, 50 -140
                 Q 60 -60, 0 0 Z" />
          </defs>

          {/* Large center glow background */}
          <circle cx="0" cy="0" r="250" fill="url(#centerGlow)" opacity="0.4"/>

          {/* 8 Petals */}
          <g filter="url(#softGlow)">
            {Array.from({length:8}).map((_,i)=>(
              <g key={i} transform={`rotate(${i*45})`}>
                <use href="#petal" fill="url(#petalGrad)"/>
              </g>
            ))}
          </g>

          {/* Bright center point with starburst */}
          <circle cx="0" cy="0" r="25" fill="#FFFFFF" opacity="0.95"/>
          <circle cx="0" cy="0" r="45" fill="url(#centerGlow)" opacity="0.7"/>
          
          {/* Starburst cross */}
          <g opacity="0.8" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round">
            <line x1="-60" y1="0" x2="60" y2="0"/>
            <line x1="0" y1="-60" x2="0" y2="60"/>
          </g>

          {/* Optional faint orbit guide */}
          <g transform="scale(1,.92)" opacity="0.05">
            <circle cx="0" cy="0" r="290" fill="none" stroke="#7A8CFF" strokeWidth="1"/>
          </g>
        </svg>

        {/* Orbit labels (polar coordinates) */}
        {LABELS.map(l=>{
          const p = xy(l.r,l.deg)
          return (
            <motion.button
              key={l.id}
              className="absolute text-[11px] md:text-sm tracking-[0.28em] text-[#A9B7FF] focus:outline-none"
              style={{ left:`calc(50% + ${p.x}px)`, top:`calc(50% + ${p.y}px)`, transform:'translate(-50%,-50%)' }}
              whileHover={{ scale:1.06, textShadow:'0 0 12px rgba(150,175,255,.85)' }}
              transition={{ duration:.18, ease:easeSnap }}
              aria-label={l.text}
            >
              {l.text}
            </motion.button>
          )
        })}
      </motion.div>
    </section>
  )
}
