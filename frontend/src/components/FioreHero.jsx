'use client'
import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

const LABELS = [
  { id:'art',      text:'ART',      offsetX: '-30%', offsetY: '-25%' },  // 315° diagonal (upper-left)
  { id:'music',    text:'MUSIC',    offsetX: '30%', offsetY: '-25%' },   // 45° diagonal (upper-right)
  { id:'apps',     text:'APPS',     offsetX: '-30%', offsetY: '30%' },   // 225° diagonal (lower-left)
  { id:'research', text:'RESEARCH', offsetX: '30%', offsetY: '30%' },    // 135° diagonal (lower-right)
]
const easeSnap = [0.16,1,0.3,1]
const easeSoft = [0.22,0.61,0.36,1]

export default function FioreHero(){
  const reduce = useReducedMotion()
  const containerRef = React.useRef(null)

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
          scale: reduce ? 1 : [1,1.025,1],
          transition: reduce
            ? { duration:.9, ease:easeSoft }
            : { duration:8, times:[0,.5,1], repeat:Infinity, ease:'easeInOut' }
        }}
        className="relative fiore-motion-wrapper"
      >
        <div className="fiore-container" ref={containerRef}>
        {/* 8-Petal Fiore Flower - Starting Fresh */}
        <svg
          className="fiore-graphic"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1024 1024"
          >
          <defs>
            <radialGradient id="b" cx="511.66" cy="540.88" fx="511.66" fy="540.88" r="254.73" gradientTransform="translate(364.39 1051.89) rotate(-89.75) scale(1 .27)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4d6bb3"/>
              <stop offset=".21" stopColor="#3d5ba1"/>
              <stop offset=".49" stopColor="#2d4a8f"/>
              <stop offset=".5" stopColor="#2c498d"/>
              <stop offset=".69" stopColor="#223872"/>
              <stop offset=".87" stopColor="#1c2e61"/>
              <stop offset=".99" stopColor="#1a2b5c"/>
            </radialGradient>
            <radialGradient id="c" cx="511.66" cy="540.88" fx="511.66" fy="540.88" r="254.73" gradientTransform="translate(767.74 1006.89) rotate(-134.75) scale(1 .27)" xlinkHref="#b"/>
            <radialGradient id="d" cx="511.67" cy="540.88" fx="511.67" fy="540.88" r="254.66" gradientTransform="translate(1021.15 689.85) rotate(-179.75) scale(1 .27)" xlinkHref="#b"/>
            <radialGradient id="e" cx="511.66" cy="540.88" fx="511.66" fy="540.88" r="254.73" gradientTransform="translate(976.14 286.51) rotate(135.25) scale(1 .27)" xlinkHref="#b"/>
            <radialGradient id="f" cx="511.66" cy="540.88" fx="511.66" fy="540.88" r="254.73" gradientTransform="translate(659.11 33.11) rotate(90.25) scale(1 .27)" xlinkHref="#b"/>
            <radialGradient id="g" cx="511.66" cy="540.88" fx="511.66" fy="540.88" r="254.73" gradientTransform="translate(255.76 78.11) rotate(45.25) scale(1 .27)" xlinkHref="#b"/>
            <radialGradient id="h" cx="511.67" cy="540.88" fx="511.67" fy="540.88" r="254.66" gradientTransform="translate(2.35 395.15) rotate(.25) scale(1 .27)" xlinkHref="#b"/>
            <radialGradient id="i" cx="511.66" cy="540.88" fx="511.66" fy="540.88" r="254.73" gradientTransform="translate(47.36 798.49) rotate(-44.75) scale(1 .27)" xlinkHref="#b"/>
          </defs>
          <g style={{isolation:'isolate'}}>
            <g>
              <g style={{mixBlendMode:'screen'}}>
                <path d="M511.85,541.76c-45.84-67.68-65.53-136.38-58.08-163.8,2.14-8.73,8.1-22.87,11.99-29.69,4.86-8.57,9.5-13.94,14.87-20.16,2.84-3.29,5.78-6.7,9.06-10.92,6.57-8.64,13.74-18.98,21.64-35.99.21-.47.41-.92.57-1.34.07-.18.13-.36.18-.54,0,.02.02.04.03.06,7.41,17.13,14.71,27.37,22.15,37.19,3.26,4.21,6.18,7.6,9.01,10.89,5.35,6.21,9.98,11.58,14.81,20.13,3.47,6.17,9.69,20.43,11.94,29.62,3.89,13.37.61,37.54-8.99,66.34-10.55,31.64-28.01,66.49-49.19,98.19Z" fill="url(#b)"/>
              </g>
              <g style={{mixBlendMode:'screen'}}>
                <path d="M511.29,541.9c-80.26-15.44-142.77-50.1-156.89-74.76-4.66-7.68-10.45-21.89-12.51-29.47-2.63-9.5-3.14-16.58-3.74-24.77-.32-4.34-.65-8.82-1.31-14.12-1.47-10.76-3.71-23.14-10.15-40.75-.18-.48-.36-.94-.55-1.35-.08-.18-.16-.35-.25-.51.02,0,.04.02.06.02,17.35,6.87,29.75,8.95,41.96,10.63,5.28.67,9.75,1,14.07,1.33,8.18.61,15.24,1.13,24.71,3.76,6.81,1.91,21.29,7.59,29.39,12.5,12.2,6.7,26.98,26.11,40.55,53.27,14.91,29.83,27.21,66.82,34.65,104.21Z" fill="url(#c)"/>
              </g>
              <g style={{mixBlendMode:'screen'}}>
                <path d="M360.62,601.99c-5.22,0-9.73-.51-13.41-1.51-8.73-2.14-22.87-8.1-29.69-11.99-8.57-4.86-13.94-9.5-20.16-14.87-3.29-2.84-6.7-5.78-10.92-9.06-8.65-6.57-18.99-13.74-35.99-21.64-.47-.21-.92-.41-1.34-.57-.18-.07-.36-.13-.54-.18.02,0,.04-.02.06-.03,17.13-7.41,27.37-14.71,37.19-22.15,4.21-3.26,7.6-6.18,10.89-9.01,6.21-5.35,11.58-9.98,20.13-14.81,6.17-3.47,20.42-9.69,29.62-11.94,3.64-1.06,8.13-1.6,13.37-1.6,30.75,0,89.37,18.49,151.17,59.77-60.76,41.15-119.29,59.58-150.39,59.58Z" fill="url(#d)"/>
              </g>
              <g style={{mixBlendMode:'screen'}}>
                <path d="M325.44,728.29c6.87-17.36,8.95-29.75,10.63-41.96.67-5.28,1-9.75,1.33-14.07.61-8.18,1.13-15.24,3.76-24.71,1.91-6.81,7.59-21.29,12.5-29.39,6.7-12.2,26.11-26.98,53.27-40.55,29.83-14.91,66.82-27.21,104.21-34.65-15.44,80.26-50.1,142.77-74.76,156.89-7.69,4.66-21.9,10.45-29.47,12.51-9.5,2.63-16.58,3.14-24.78,3.74-4.34.32-8.82.65-14.12,1.31-10.76,1.47-23.14,3.71-40.75,10.15-.48.18-.94.36-1.35.55-.18.08-.35.16-.51.25l.02-.06Z" fill="url(#e)"/>
              </g>
              <g style={{mixBlendMode:'screen'}}>
                <path d="M511.39,805.62c-7.41-17.13-14.71-27.37-22.15-37.19-3.26-4.21-6.18-7.6-9.01-10.89-5.35-6.21-9.98-11.58-14.81-20.13-3.47-6.17-9.69-20.42-11.94-29.62-3.89-13.37-.61-37.54,8.99-66.34,10.55-31.64,28.01-66.49,49.19-98.19,45.84,67.67,65.53,136.38,58.08,163.8-2.14,8.73-8.1,22.87-12,29.69-4.86,8.57-9.5,13.95-14.87,20.17-2.84,3.29-5.78,6.69-9.06,10.91-6.57,8.65-13.74,18.99-21.64,35.99-.21.47-.41.92-.57,1.34-.07.18-.13.36-.18.53,0-.02-.02-.04-.03-.06Z" fill="url(#f)"/>
              </g>
              <g style={{mixBlendMode:'screen'}}>
                <path d="M697.54,728.81c-17.35-6.87-29.75-8.95-41.96-10.63-5.28-.67-9.75-1-14.07-1.33-8.18-.61-15.25-1.13-24.71-3.76-6.81-1.91-21.29-7.59-29.39-12.51-12.2-6.7-26.98-26.11-40.55-53.27-14.91-29.83-27.21-66.82-34.65-104.21,80.26,15.44,142.77,50.1,156.89,74.75,4.66,7.69,10.45,21.9,12.51,29.48,2.63,9.49,3.14,16.57,3.74,24.77.32,4.34.64,8.82,1.31,14.12,1.47,10.76,3.71,23.14,10.15,40.75.18.48.36.94.54,1.35.08.18.17.35.25.51l-.06-.02Z" fill="url(#g)"/>
              </g>
              <g style={{mixBlendMode:'screen'}}>
                <path d="M663.66,602.37c-30.75,0-89.37-18.49-151.16-59.77,60.76-41.15,119.29-59.58,150.39-59.58,5.22,0,9.73.51,13.41,1.51,8.73,2.14,22.87,8.1,29.69,11.99,8.57,4.86,13.94,9.5,20.16,14.87,3.29,2.84,6.7,5.78,10.92,9.06,8.65,6.57,18.99,13.74,35.99,21.64.47.21.92.41,1.34.57.18.07.36.13.54.18-.02,0-.04.02-.06.03-17.13,7.41-27.37,14.71-37.19,22.15-4.21,3.26-7.6,6.18-10.88,9.01-6.21,5.36-11.58,9.98-20.14,14.81-6.17,3.47-20.42,9.69-29.62,11.94-3.64,1.06-8.13,1.59-13.37,1.59Z" fill="url(#h)"/>
              </g>
              <g style={{mixBlendMode:'screen'}}>
                <path d="M512.35,542.04c15.44-80.26,50.1-142.77,74.76-156.89,7.68-4.66,21.89-10.45,29.47-12.51,9.49-2.63,16.58-3.14,24.77-3.74,4.34-.32,8.82-.65,14.12-1.31,10.76-1.47,23.14-3.71,40.75-10.15.48-.18.94-.36,1.35-.55.18-.08.35-.16.5-.25,0,.02-.01.04-.02.06-6.88,17.36-8.95,29.75-10.63,41.96-.67,5.28-1,9.75-1.33,14.07-.61,8.18-1.13,15.25-3.76,24.71-1.91,6.81-7.59,21.29-12.51,29.39-6.7,12.2-26.11,26.98-53.27,40.55-29.83,14.91-66.82,27.21-104.21,34.65Z" fill="url(#i)"/>
              </g>
            </g>
          </g>
        </svg>

        {/* Orbit labels (percentage-based positioning for responsive scaling) */}
        {LABELS.map(l=>{
          return (
            <motion.button
              key={l.id}
              className="absolute text-[11px] md:text-sm tracking-[0.28em] text-[#A9B7FF] focus:outline-none cursor-pointer"
              style={{ left:`calc(50% + ${l.offsetX})`, top:`calc(50% + ${l.offsetY})`, transform:'translate(-50%,-50%)' }}
              whileHover={{ 
                textShadow:'0 0 20px rgba(107,159,255,.9), 0 0 40px rgba(77,127,207,.4)',
                color: '#e8f4ff'
              }}
              transition={{ duration:.25, ease:easeSoft }}
              aria-label={l.text}
            >
              {l.text}
            </motion.button>
          )
        })}
        </div>
      </motion.div>
    </section>
  )
}
