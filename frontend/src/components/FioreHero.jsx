'use client'
import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

// Polar coordinate calculation with elliptical orbit
const R = 300;
const SCALE_Y = 0.92;

const LABELS = [
  { id:'art',      text:'ART',      deg: 160, r:R-25 },   // upper-left
  { id:'music',    text:'MUSIC',    deg: 215, r:R-10 },   // left-lower
  { id:'writing',  text:'WRITING',  deg: 270, r:R-15 },   // bottom-center
  { id:'apps',     text:'APPS',     deg: 325, r:R-20 },   // right-lower
  { id:'research', text:'RESEARCH', deg:   0, r:R-10 },   // right-mid
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
          <svg width="660" height="660" viewBox="-330 -330 660 660" role="img" aria-label="Fiore Flower" style={{ width: '100%', height: '100%' }}>
            <defs>
              {/* Canvas halo under the flower */}
              <radialGradient id="fioreCanvasGlow" cx="0" cy="0" r="1">
                <stop offset="0%"   stopColor="#AFC2FF" stopOpacity=".18"/>
                <stop offset="65%"  stopColor="#6270E8" stopOpacity=".06"/>
                <stop offset="100%" stopColor="#0B0E1A" stopOpacity="0"/>
              </radialGradient>

              {/* Petal translucency (body) */}
              <linearGradient id="fiorePetalBody" x1="0" y1="-1" x2="0" y2="1">
                <stop offset="0%"   stopColor="#B7C6FF" stopOpacity=".42"/>
                <stop offset="55%"  stopColor="#8FA4FF" stopOpacity=".28"/>
                <stop offset="100%" stopColor="#6E63F1" stopOpacity=".16"/>
              </linearGradient>

              {/* Inner light that creates the luminous center fade */}
              <radialGradient id="fiorePetalCore" cx="0" cy="0" r="1">
                <stop offset="0%"   stopColor="#D7E2FF" stopOpacity=".60"/>
                <stop offset="70%"  stopColor="#9FB2FF" stopOpacity=".18"/>
                <stop offset="100%" stopColor="#8CA0FF" stopOpacity="0"/>
              </radialGradient>

              {/* Subtle feather at the rim (cooler, bluish) */}
              <radialGradient id="fiorePetalFeather" cx="0" cy="0" r="1">
                <stop offset="70%"  stopColor="#A5B4FF" stopOpacity="0"/>
                <stop offset="100%" stopColor="#BFD0FF" stopOpacity=".18"/>
              </radialGradient>

              {/* Soft bloom filter to avoid "vector crisp" look */}
              <filter id="fioreSoftBloom" x="-200%" y="-200%" width="400%" height="400%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.75" result="blur"/>
                <feColorMatrix in="blur" type="matrix"
                  values="1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 .90 0" result="soft"/>
                <feBlend in="SourceGraphic" in2="soft" mode="screen"/>
              </filter>

              {/* Petal silhouette (long almond, round base; tip at -252) */}
              <path id="fiorePetal"
                d="M 0 -252
                   C  72 -218, 130 -134, 100  -60
                   C  74  -4,   26   50,   0   96
                   C -26   50, -74   -4, -100  -60
                   C -130 -134, -72 -218, 0  -252 Z" />
            </defs>

            {/* Under-flower halo */}
            <circle cx="0" cy="0" r="210" fill="url(#fioreCanvasGlow)"/>

            {/* Petals (additive) */}
            <g id="petals" filter="url(#fioreSoftBloom)" style={{ mixBlendMode:'screen', isolation:'isolate' }}>
              {Array.from({length:8}).map((_,i)=>(
                <motion.g 
                  key={i} 
                  id={`petal-${i}`} 
                  transform={`rotate(${i*45})`}
                  whileHover={{ scale:1.02, filter:'drop-shadow(0 0 18px rgba(140,170,255,.9))' }}
                  transition={{ duration:.18, ease:[.16,1,.3,1] }}
                  style={{ transformOrigin: 'center' }}
                >
                  <use href="#fiorePetal" fill="url(#fiorePetalCore)"   opacity=".55"/>
                  <use href="#fiorePetal" fill="url(#fiorePetalBody)"   opacity=".66"/>
                  <use href="#fiorePetal" fill="url(#fiorePetalFeather)" opacity=".42"/>
                  {/* faint vein hint (matches luminous inner lines) */}
                  <path d="M0 -252 C 30 -190, 28 -118, 0 -40"
                        fill="none" stroke="#C9D5FF" strokeOpacity=".08" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M0 -40 C -10 -8, -10 16, 0 40" fill="none"
                        stroke="#C9D5FF" strokeOpacity=".04" strokeWidth="2" strokeLinecap="round"/>
                </motion.g>
              ))}
            </g>

            {/* Elliptical orbit (dev guide; keep at very low opacity in prod) */}
            <g transform="scale(1, .92)">
              <circle cx="0" cy="0" r="290" fill="none" stroke="#7A8CFF" strokeOpacity=".045" />
            </g>
          </svg>

          {/* Labels positioned on the elliptical orbit */}
          <FioreLabels/>
        </motion.div>
      </div>
    </section>
  )
}
