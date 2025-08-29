'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import './HeroSection.css'

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
    <section className="hero-section">

      {/* Paper background fades out with rocket */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: showRocket ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="paper-background"
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
          className="rocket-animation"
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
            className="plane-animation"
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
            className="cloud-background"
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
      <div className="text-section">
        <h1 className="hero-title" data-replay-on-active>
          <span className="slide-left">Your Dream,</span><br />
          <span className="slide-right">Our Commitment!</span>
        </h1>

        {showText && (
          <motion.div
            className="hero-description"
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