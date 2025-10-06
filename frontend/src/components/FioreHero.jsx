'use client'
import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

// Polar coordinate calculation for label positions
const R = 340;
const SCALE_Y = 1;

const LABELS = [
  { id:'art',      text:'ART',      deg: 135, r:R },   // upper-left
  { id:'music',    text:'MUSIC',    deg: 180, r:R },   // left
  { id:'writing',  text:'WRITING',  deg: 270, r:R+30 },   // bottom
  { id:'apps',     text:'APPS',     deg: 0, r:R },   // right
  { id:'research', text:'RESEARCH', deg: 45, r:R },   // upper-right
];

function polar(deg, r){
  const t = (deg*Math.PI)/180;
  return { x: r*Math.cos(t), y: (r*Math.sin(t))*SCALE_Y };
}

function FioreLabels(){
  return (
    <>
      {LABELS.map(l=>{
        const p = polar(l.deg, l.r)
        return (
          <motion.button
            key={l.id}
            className="absolute label focus:outline-none"
            style={{ 
              left:`calc(50% + ${p.x}px)`, 
              top:`calc(50% + ${p.y}px)`, 
              transform:'translate(-50%,-50%)',
              letterSpacing:'.28em',
              color:'#9CB4FF',
              fontSize:'14px',
              fontWeight:'500',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              padding: '8px 12px'
            }}
            whileHover={{ scale:1.06, textShadow:'0 0 12px rgba(150,175,255,.85)' }}
            transition={{ duration:.18, ease:[.16,1,.3,1] }}
            aria-label={l.text}
          >
            {l.text}
          </motion.button>
        )
      })}
    </>
  )
}

export default function FioreHero(){
  const reduce = useReducedMotion()

  return (
    <section className="relative grid place-items-center min-h-screen" style={{
      background: 'radial-gradient(120% 80% at 50% 10%, #0F1426 0%, #0B0E1A 65%, #090b12 100%)',
      color: '#E6E8F2'
    }}>
      {/* Micrograin texture overlay */}
      <div className="absolute inset-0 -z-10 opacity-[.035] mix-blend-overlay pointer-events-none" 
           style={{backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9Ii4xIi8+PC9zdmc+)'}}
      />

      <div className="flex flex-col items-center gap-8">
        {/* Title */}
        <header className="text-center">
          <div style={{
            letterSpacing:'.34em',
            color:'#9FB0D1',
            fontSize:'12px',
            fontWeight:'400',
            marginBottom:'16px'
          }}>
            OBIOESIO BASSEY
          </div>
          <h1 style={{
            letterSpacing:'.22em',
            fontWeight:'600',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)'
          }}>
            FIORE INTERFACE
          </h1>
        </header>

        {/* Flower with breathing cycle */}
        <motion.div
          initial={{opacity:0, scale:.98}}
          animate={{
            opacity:1,
            scale: reduce ? 1 : [1,1.03,1],
            transition: reduce
              ? { duration:.9, ease:[.22,.61,.36,1] }
              : { duration:6, times:[0,.5,1], repeat:Infinity, ease:'easeInOut' }
          }}
          className="relative"
          style={{ width: '660px', height: '660px', maxWidth: '90vw', maxHeight: '90vw' }}
        >
          <svg width="660" height="660" viewBox="-400 -400 800 800" role="img" aria-label="Fiore Flower" style={{ width: '100%', height: '100%' }}>
            <defs>
              {/* Radial gradient for each petal - from bright center to translucent edges */}
              <radialGradient id="petalGradient" cx="50%" cy="15%">
                <stop offset="0%" stopColor="#8FB8FF" stopOpacity="0.85"/>
                <stop offset="30%" stopColor="#6A95E8" stopOpacity="0.70"/>
                <stop offset="65%" stopColor="#4F75C8" stopOpacity="0.50"/>
                <stop offset="100%" stopColor="#3555A0" stopOpacity="0.20"/>
              </radialGradient>

              {/* Glow filter for subtle luminous effect */}
              <filter id="petalGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/>
                <feColorMatrix in="blur" type="matrix"
                  values="1 0 0 0 0
                          0 0.85 0 0 0
                          0 0 1.05 0 0
                          0 0 0 0.6 0" result="glow"/>
                <feBlend in="SourceGraphic" in2="glow" mode="screen"/>
              </filter>

              {/* Strong center glow */}
              <radialGradient id="centerGlow">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1"/>
                <stop offset="25%" stopColor="#D5E5FF" stopOpacity="0.85"/>
                <stop offset="50%" stopColor="#8FAFFF" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#5B85E8" stopOpacity="0"/>
              </radialGradient>

              {/* Petal shape - much wider teardrop/almond pointing outward */}
              <path id="petalShape"
                d="M 0 0
                   Q -85 -50, -75 -120
                   Q -45 -175, 0 -200
                   Q 45 -175, 75 -120
                   Q 85 -50, 0 0 Z" />
            </defs>

            {/* Background glow emanating from center */}
            <circle cx="0" cy="0" r="300" fill="url(#centerGlow)" opacity="0.3"/>

            {/* 8 Petals radiating at 45° intervals */}
            <g filter="url(#petalGlow)">
              {Array.from({length:8}).map((_,i)=>{
                const angle = i * 45;
                return (
                  <g 
                    key={i} 
                    transform={`rotate(${angle})`}
                    style={{ transformOrigin: 'center' }}
                  >
                    <use 
                      href="#petalShape" 
                      fill="url(#petalGradient)"
                      opacity="0.92"
                      style={{ mixBlendMode: 'screen' }}
                    />
                  </g>
                );
              })}
            </g>

            {/* Bright center point with starburst effect */}
            <circle cx="0" cy="0" r="20" fill="#FFFFFF" opacity="0.95"/>
            <circle cx="0" cy="0" r="35" fill="url(#centerGlow)" opacity="0.8"/>
            
            {/* Lens flare lines */}
            <g opacity="0.6">
              <line x1="-50" y1="0" x2="50" y2="0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
              <line x1="0" y1="-50" x2="0" y2="50" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
            </g>
          </svg>

          {/* Labels positioned on the elliptical orbit */}
          <FioreLabels/>
        </motion.div>
      </div>
    </section>
  )
}
