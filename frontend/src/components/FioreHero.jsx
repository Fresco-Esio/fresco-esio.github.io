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
        {/* EXACT INLINE SVG — do not alter */}
        <svg width="660" height="660" viewBox="-330 -330 660 660" role="img" aria-label="Fiore Flower">
          <defs>
            <radialGradient id="fioreCanvasGlow" cx="0" cy="0" r="1">
              <stop offset="0%"   stopColor="#AFC2FF" stopOpacity=".18"/>
              <stop offset="65%"  stopColor="#6270E8" stopOpacity=".06"/>
              <stop offset="100%" stopColor="#0B0E1A" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="fiorePetalBody" x1="0" y1="-1" x2="0" y2="1">
              <stop offset="0%"   stopColor="#B7C6FF" stopOpacity=".42"/>
              <stop offset="55%"  stopColor="#8FA4FF" stopOpacity=".28"/>
              <stop offset="100%" stopColor="#6E63F1" stopOpacity=".16"/>
            </linearGradient>
            <radialGradient id="fiorePetalCore" cx="0" cy="0" r="1">
              <stop offset="0%"   stopColor="#D7E2FF" stopOpacity=".60"/>
              <stop offset="70%"  stopColor="#9FB2FF" stopOpacity=".18"/>
              <stop offset="100%" stopColor="#8CA0FF" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="fiorePetalFeather" cx="0" cy="0" r="1">
              <stop offset="70%"  stopColor="#A5B4FF" stopOpacity="0"/>
              <stop offset="100%" stopColor="#BFD0FF" stopOpacity=".18"/>
            </radialGradient>
            <filter id="fioreSoftBloom" x="-200%" y="-200%" width="400%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.75" result="blur"/>
              <feColorMatrix in="blur" type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .90 0" result="soft"/>
              <feBlend in="SourceGraphic" in2="soft" mode="screen"/>
            </filter>
            <path id="fiorePetal"
              d="M 0 -252
                 C  72 -218, 130 -134, 100  -60
                 C  74   -4,  26   50,   0   96
                 C -26   50, -74   -4, -100  -60
                 C -130 -134, -72 -218,   0 -252 Z" />
          </defs>

          <circle cx="0" cy="0" r="210" fill="url(#fioreCanvasGlow)"/>
          <g id="petals" filter="url(#fioreSoftBloom)" style={{mixBlendMode:'screen', isolation:'isolate'}}>
            {Array.from({length:8}).map((_,i)=>(
              <motion.g key={i} id={`petal-${i}`} transform={`rotate(${i*45})`}
                        whileHover={{ scale:1.02, filter:'drop-shadow(0 0 18px rgba(140,170,255,.9))' }}
                        transition={{ duration:.18, ease:easeSnap }}>
                <use href="#fiorePetal" fill="url(#fiorePetalCore)"   opacity=".55"/>
                <use href="#fiorePetal" fill="url(#fiorePetalBody)"   opacity=".66"/>
                <use href="#fiorePetal" fill="url(#fiorePetalFeather)" opacity=".42"/>
              </motion.g>
            ))}
          </g>

          {/* faint elliptical orbit like the mock */}
          <g transform="scale(1,.92)">
            <circle cx="0" cy="0" r="290" fill="none" stroke="#7A8CFF" strokeOpacity=".045"/>
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
