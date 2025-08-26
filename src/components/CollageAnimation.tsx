'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// 🔷 Define QuadrantImage here
const QuadrantImage = ({
  src,
  initialX,
  initialY,
  finalX,
  finalY,
  delay,
  animateNow
}: {
  src: string
  initialX: number
  initialY: number
  finalX: number
  finalY: number
  delay: number
  animateNow: boolean
}) => (
  <motion.div
    initial={{ x: initialX, y: initialY }}
    animate={animateNow ? { x: finalX, y: finalY } : {}}
    transition={{ duration: 2, delay }}
    className="absolute top-70% left-70%"
    style={{ transform: 'translate(-50%, -50%)' }}
  >
    <Image src={src} alt="Quadrant" width={300} height={400} />
  </motion.div>
)

// 🔷 Define SubtractImage next (optional)
const SubtractImage = ({ isVisible }: { isVisible: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: isVisible ? 1 : 0,
      scale: isVisible ? 1 : 0.8,
    }}
    transition={{ duration: 0.8 }}
    className="absolute top-50% left-70%"
    style={{ transform: 'translate(-50%, -50%)' }}
  >
    <Image src="/assets/Subtract.png" alt="Merged Image" width={1200} height={400} />
  </motion.div>
)

// 🔷 Your main animation component
export default function CollageAnimation() {
  const [startAnimation, setStartAnimation] = useState(false)
  const [showFinalImage, setShowFinalImage] = useState(false)

  useEffect(() => {
    let cycleTimer: NodeJS.Timeout

    const runCycle = () => {
      setStartAnimation(true)
      setShowFinalImage(false)

      // show final image after 3s
      setTimeout(() => setShowFinalImage(true), 3000)

      // reset everything after 5s (3s anim + 2s delay)
      cycleTimer = setTimeout(() => {
        setStartAnimation(false)
        setShowFinalImage(false)
        runCycle() // 🔁 restart animation recursively
      }, 7000)
    }

    runCycle()

    return () => clearTimeout(cycleTimer)
  },  [])

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center py-10 mb-20">
      <div className="relative w-[1230px] h-[600px] mx-auto">
        {!showFinalImage && (
          <>
            <QuadrantImage
              src="/assets/1 1.png"
              initialX={100}
              initialY={50}
              finalX={110}
              finalY={50}
              delay={0}
              animateNow={startAnimation}
            />
            <QuadrantImage
              src="/assets/2 1.png"
              initialX={350}
              initialY={100}
              finalX={335}
              finalY={50}
              delay={0}
              animateNow={startAnimation}
            />
            <QuadrantImage
              src="/assets/3 1.png"
              initialX={580}
              initialY={50}
              finalX={541}
              finalY={50}
              delay={0}
              animateNow={startAnimation}
            />
            <QuadrantImage
              src="/assets/4 1.png"
              initialX={810}
              initialY={100}
              finalX={748}
              finalY={45}
              delay={0}
              animateNow={startAnimation}
            />
          </>
        )}
        <SubtractImage isVisible={showFinalImage} />
      </div>
    </div>
  )
}