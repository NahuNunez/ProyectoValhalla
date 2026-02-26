import React from 'react'
import { motion, useMotionValue } from "framer-motion"


const home = () => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

  return (
    <motion.div className="w-screen h-screen bg-black"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      style={{
        background: `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px,
         rgba(255,255,255,0.2), black 40%)`,
      }}
    />
  )
}

export default home
