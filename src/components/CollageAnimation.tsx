'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
    <Image src={src} alt="Quadrant" width={250} height={600} />
  </motion.div>
)


const SubtractImage = ({ isVisible }: { isVisible: boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: isVisible ? 1 : 0,
      
    }}
    transition={{ duration: 0.5 }}
    className="absolute top-30% left-70%"
   
  >
    <Image src="/assets/Subtract.png" alt="Merged Image" width={1200} height={900} />
  </motion.div>
)


export default function CollageAnimation() {
  const [startAnimation, setStartAnimation] = useState(false)
  const [showFinalImage, setShowFinalImage] = useState(false)
  const timersRef = useRef<number[]>([])

  useEffect(() => {
    const clearTimers = () => {
      timersRef.current.forEach((t) => clearTimeout(t))
      timersRef.current = []
    }

    const runCycle = () => {
      // reset
      setStartAnimation(false)
      setShowFinalImage(false)

      // kick off quadrant motion after small delay
      timersRef.current.push(
        window.setTimeout(() => setStartAnimation(true), 400)
      )

      // show merged image
      timersRef.current.push(
        window.setTimeout(() => setShowFinalImage(true), 3000)
      )

      // hold final image, then restart cycle
      timersRef.current.push(
        window.setTimeout(() => runCycle(), 7000)
      )
    }

    runCycle()
    return () => clearTimers()
  }, [])

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
              initialX={400}
              initialY={100}
              finalX={359}
              finalY={50}
              delay={0}
              animateNow={startAnimation}
            />
             <QuadrantImage
              src="/assets/3 1.png"
              initialX={700}
              initialY={50}
              finalX={608}
              finalY={50}
              delay={0}
              animateNow={startAnimation}
            />
             <QuadrantImage
              src="/assets/4 1.png"
              initialX={1000}
              initialY={100}
              finalX={857}
              finalY={50}
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