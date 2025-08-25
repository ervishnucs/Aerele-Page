'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [showRocket, setShowRocket] = useState(true)
  const [showPlane, setShowPlane] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const rocketTimer = setTimeout(() => {
      setShowRocket(false)
      setShowPlane(true)
    }, 1000)

    const textTimer = setTimeout(() => {
      setShowText(true)
    }, 2500)

    return () => {
      clearTimeout(rocketTimer)
      clearTimeout(textTimer)
    }
  }, [])

  return (
    <section className="relative w-full h-[700px] flex items-start justify-center bg-white px-6 md:px-24 pt-12 overflow-hidden fluid-px">

      {/* Paper background fades out with rocket */}
      <motion.div
        initial={{ opacity: 50 }}
        animate={{ opacity: showRocket ? 50 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-10"
      >
        <Image
          src="/assets/paper.png"
          alt="Paper Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Rocket Animation */}
      {showRocket && (
        <motion.img
          src="/assets/rocket.png"
          alt="Rocket"
          initial={{
            x: -500,
            y: -150,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: 200,
            y: -350,
            opacity: 0,
            scale: 0.6,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute w-[700px] z-20"
          style={{ left: '50%', top: '50%', transform: 'scaleX(-1) translate(-50%, -50%)' }}
        />
      )}

      {/* Plane Animation */}
      {showPlane && (
        <>
          <motion.div
            initial={{
              x: 500,
              y: 150,
              scale: 0.2,
              rotate: 15,
              opacity: 1,
            }}
            animate={{
              x: -220,
              y: -120,
              scale: 3.6,
              rotate: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              onComplete: () => setShowText(true),
            }}
            className="absolute z-30 w-[200px]"
            style={{ left: '60%', top: '60%' }}
          >
            <Image
              src="/assets/plane.png"
              alt="Plane"
              width={400}
              height={200}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          {/* Background of clouds and birds fades in with plane */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-0 left-[320px] z-20 pointer-events-none"
          >
            <Image
              src="/assets/cloud.png"
              alt="Clouds"
              width={800}
              height={300}
              className="opacity-50"
            />
          </motion.div>
        </>
      )}

      {/* Text Section */}
      <div className="relative z-40 mt-12 text-left">
        <h1 className="fluid-h1 font-bold leading-tight text-black">
          Your Dream,<br />Our Commitment!
        </h1>

        {showText && (
          <motion.div
            className="mt-4 text-gray-700 fluid-body space-y-1 font-medium font-[Sanchez]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p>Get the best of open-source products</p>
            <p> into your business</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}