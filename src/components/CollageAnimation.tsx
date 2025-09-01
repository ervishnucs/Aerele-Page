'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useIsMobile } from '../hooks/useIsMobile'

const QuadrantImage = ({
  src,
  initialX,
  initialY,
  finalX,
  finalY,
  delay,
  animateNow,
  isMobile
}: {
  src: string
  initialX: number
  initialY: number
  finalX: number
  finalY: number
  delay: number
  animateNow: boolean
  isMobile: boolean
}) => (
  <motion.div
    initial={{ x: initialX, y: initialY }}
    animate={animateNow ? { x: finalX, y: finalY } : {}}
    transition={{ duration: 2, delay }}
    className="absolute top-70% left-70%"
    style={{ transform: 'translate(-50%, -50%)' }}
  >
    <Image
      src={src}
      alt="Quadrant"
      width={isMobile ? 100 : 250}
      height={isMobile ? 200 : 600}
    />
  </motion.div>
)

const SubtractImage = ({ isVisible }: { isVisible: boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.5 }}
    className="absolute top-30% left-70%"
  >
    <Image src="/assets/Subtract.png" alt="Merged Image" width={1200} height={900} />
  </motion.div>
)

export default function CollageAnimation() {
  const isMobile = useIsMobile()
  const [startAnimation, setStartAnimation] = useState(false)
  const [showFinalImage, setShowFinalImage] = useState(false)
  const timersRef = useRef<number[]>([])

  const mobilePositions = {
    image1: { initialX: 50, initialY: 25, finalX: -15, finalY: 25 },
    image2: { initialX: 30, initialY: 50, finalX: 83, finalY: 25 },
    image3: { initialX: 80, initialY: 25, finalX: 180, finalY: 25 },
    image4: { initialX: 90, initialY: 50, finalX: 279, finalY: 25 }
  }

  const desktopPositions = {
    image1: { initialX: 100, initialY: 50, finalX: 110, finalY: 50 },
    image2: { initialX: 400, initialY: 100, finalX: 359, finalY: 50 },
    image3: { initialX: 700, initialY: 50, finalX: 608, finalY: 50 },
    image4: { initialX: 1000, initialY: 100, finalX: 857, finalY: 50 }
  }

  const positions = isMobile ? mobilePositions : desktopPositions

  useEffect(() => {
    const clearTimers = () => {
      timersRef.current.forEach((t) => clearTimeout(t))
      timersRef.current = []
    }

    setStartAnimation(false)
    setShowFinalImage(false)

    timersRef.current.push(
      window.setTimeout(() => setStartAnimation(true), 400)
    )
    timersRef.current.push(
      window.setTimeout(() => setShowFinalImage(true), 3000)
    )

    return () => clearTimers()
  }, [])

  // ⛔ FIXED: moved after all hooks
  if (isMobile === null) return null

  return (
   <div
  className={`relative w-full ${
    isMobile ? 'min-h-[250px] py-2 mb-2' : 'h-[600px] py-10 mb-20'
  } flex items-center justify-center`}
>

      <div
        className={`relative ${
          isMobile ? 'w-[90%] max-w-[360px] min-h-[250px]' : 'w-[1230px] h-[600px]'
        } mx-auto`}
      >
        {!showFinalImage && (
          <>
            <QuadrantImage src="/assets/1 1.png" {...positions.image1} delay={0} animateNow={startAnimation} isMobile={isMobile} />
            <QuadrantImage src="/assets/2 1.png" {...positions.image2} delay={0} animateNow={startAnimation} isMobile={isMobile} />
            <QuadrantImage src="/assets/3 1.png" {...positions.image3} delay={0} animateNow={startAnimation} isMobile={isMobile} />
            <QuadrantImage src="/assets/4 1.png" {...positions.image4} delay={0} animateNow={startAnimation} isMobile={isMobile} />
          </>
        )}
        <SubtractImage isVisible={showFinalImage} />
      </div>
    </div>
  )
}
