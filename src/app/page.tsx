"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import CollageAnimation from '@/components/CollageAnimation';

export default function Page() {
  return (
    <main className="bg-white w-full text-gray-800 overflow-hidden">
      <CollageAnimation/>




      {/* Intro Section */}
      <section className="px-4 sm:px-6 md:px-[20rem] pt-6 sm:pt-8 pb-16 sm:pb-20">
        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-center sm:text-left" style={{ color: "#032148" }}>
          From Prototypes to Portals — We Engineer ERP Success
        </h3>
        <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-center sm:text-left leading-relaxed">
          we empower businesses with tailored ERP systems and technology-driven innovations.

          Our expertise is trusted by sectors like manufacturing, retail, and supply chain, especially where robust software ecosystems and seamless integrations are crucial.

          At Aerele, we combine deep technical knowledge with practical business insights to deliver scalable, future-ready enterprise applications.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#043072" }}
          whileTap={{ scale: 0.97 }}
          className="mt-4 sm:mt-6 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2 rounded-full transition-colors duration-300 mx-auto sm:mx-0 block sm:inline-block"
          style={{ backgroundColor: "#032148" }}
          onClick={() => window.location.href = '/about'}
        >
          About Us
        </motion.button>

      </section>

      {/* Services Section */}
      <section className="relative w-full px-4 sm:px-6 md:px-24 py-16 sm:py-24">
        {/* Grey shadow "SERVICES" in background */}
        <h1 className="relative text-center text-4xl sm:text-6xl md:text-8xl font-bold z-10" style={{ color: "#032148" }}>
          <span className="absolute text-gray-800 text-6xl sm:text-[10rem] md:text-[12rem] opacity-10 -top-8 sm:-top-16 left-1/2 -translate-x-1/2 select-none tracking-widest">
        SERVICES
          </span>
          Our Services
        </h1>

        {/* Blurred E-shaped background (soft, spread out, responsive) */}
        <div className="absolute left-1/4 top-[120px] sm:top-[160px] w-[150px] sm:w-[200px]">
          <div className="w-[40px] sm:w-[50px] left-0px h-[1200px] sm:h-[1570px] bg-gray-300 opacity-20 rounded-full  blur-[8px] sm:blur-[10px]"></div>
          <div className="absolute top-0 left-[-80px] sm:left-[-100px] w-[600px] sm:w-[900px] h-[40px] sm:h-[50px] bg-gray-300 opacity-25 rounded-full  blur-[8px] sm:blur-[10px]"></div>
          <div className="absolute top-[600px] sm:top-[750px] left-[-80px] sm:left-[-100px] w-[600px] sm:w-[900px] h-[40px] sm:h-[50px] bg-gray-300 opacity-25 rounded-full blur-[8px] sm:blur-[10px]"></div>
          <div className="absolute bottom-0 left-[-80px] sm:left-[-100px] w-[600px] sm:w-[900px] h-[40px] sm:h-[50px] bg-gray-300 opacity-25 rounded-full blur-[8px] sm:blur-[10px]"></div>
        </div>

        {/* Optional glowing circle */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[120px] sm:top-[160px] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-blue-400 opacity-30 blur-[60px] sm:blur-[100px] rounded-full z-0"></div>

        {/* Service Grid */}
        <div className="relative mt-16 sm:mt-24 max-w-6xl mx-auto z-10 space-y-12 sm:space-y-16">
          {/* Item 1 - Left */}
          <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:flex md:items-start md:justify-between"
          >
        <div className="relative md:w-1/2 text-center md:text-left p-4 sm:p-6 group transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[0_4px_12px_rgba(191,219,254,0.6)]">
          <div className="transition-all duration-300 group-hover:bg-white group-hover:rounded-xl p-3 sm:p-4">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold">ERPNext Customization</h4>
            <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-gray-600 leading-relaxed">
          <strong>Tailor your ERP, your way.</strong> <br />
          We specialize in deeply customizing ERPNext to align with your unique business workflows — from module enhancements to custom apps, reports, and integrations.
            </p>
            <div className="absolute left-0 bottom-0 w-full h-[6px] sm:h-[8px] rounded-b-4xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white to-blue-500 transition-all duration-300"></div>
          </div>
        </div>
          </motion.div>

          {/* Item 2 - Right */}
          <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:flex md:items-start md:justify-between md:flex-row-reverse"
          >
        <div className="relative md:w-1/2 text-center md:text-left p-4 sm:p-6 group transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[0_4px_12px_rgba(191,219,254,0.6)]">
          <div className="transition-all duration-300 group-hover:bg-white group-hover:rounded-xl p-3 sm:p-4">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold">Enterprise Portal Development</h4>
            <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-gray-600 leading-relaxed">
          <strong>Bringing data, processes, and users together.</strong> <br />
          We build user-friendly enterprise portals that connect teams, streamline operations, and offer intuitive interfaces over complex systems — all backed by Frappe.
            </p>
            <div className="absolute left-0 bottom-0 w-full h-[6px] sm:h-[8px] rounded-b-4xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white to-blue-500 transition-all duration-300"></div>
          </div>
        </div>
          </motion.div>
          <div className="absolute left-1/4 -translate-x-1/2 top-[460px] w-[200px] h-[200px] bg-blue-400 opacity-30 blur-[100px] rounded-full z-0"></div>

          {/* Item 3 - Left */}
          <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:flex md:items-start md:justify-between"
          >
        <div className="relative md:w-1/2 text-center md:text-left p-4 sm:p-6 group transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[0_4px_12px_rgba(191,219,254,0.6)]">
          <div className="transition-all duration-300 group-hover:bg-white group-hover:rounded-xl p-3 sm:p-4">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold">Prototype & MVP Development</h4>
            <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-gray-600 leading-relaxed">
          <strong>Move fast. Validate faster.</strong> <br />
          Need to test an idea or launch a product fast? We help you build robust prototypes and MVPs using agile development practices and the power of Frappe.
            </p>
            <div className="absolute left-0 bottom-0 w-full h-[6px] sm:h-[8px] rounded-b-4xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white to-blue-500 transition-all duration-300"></div>
          </div>
        </div>
          </motion.div>
          <div className="absolute right-1/4 -translate-x-1/2 top-[660px] w-[200px] h-[200px] bg-blue-400 opacity-30 blur-[100px] rounded-full z-0"></div>

          {/* Item 4 - Right */}
          <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:flex md:items-start md:justify-between md:flex-row-reverse"
          >
        <div className="relative md:w-1/2 text-center md:text-left p-4 sm:p-6 group transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[0_4px_12px_rgba(191,219,254,0.6)]">
          <div className="transition-all duration-300 group-hover:bg-white group-hover:rounded-xl p-3 sm:p-4">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold">DevOps & System Integration</h4>
            <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-gray-600 leading-relaxed">
          <strong>Seamless systems. Reliable delivery.</strong> <br />
          Our DevOps solutions ensure your ERP and enterprise apps are deployed, scaled, and monitored efficiently — with CI/CD pipelines, containerization, and third-party API integrations.
            </p>
            <div className="absolute left-0 bottom-0 w-full h-[6px] sm:h-[8px] rounded-b-4xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white to-blue-500 transition-all duration-300"></div>
          </div>
        </div>
          </motion.div>
          <div className="absolute left-1/4 -translate-x-1/2 top-[1000px] w-[200px] h-[200px] bg-blue-400 opacity-30 blur-[100px] rounded-full z-0"></div>

          {/* Item 5 - Left */}
          <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:flex md:items-start md:justify-between"
          >
        <div className="relative md:w-1/2 text-center md:text-left p-4 sm:p-6 group transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[0_4px_12px_rgba(191,219,254,0.6)]">
          <div className="transition-all duration-300 group-hover:bg-white group-hover:rounded-xl p-3 sm:p-4">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold">Technology Consulting</h4>
            <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-gray-600 leading-relaxed">
          <strong>Your business, powered by the right tech.</strong> <br />
          We guide businesses through technology choices, architecture decisions, and digital transformation strategies to ensure scalable growth with the right tools.
            </p>
            <div className="absolute left-0 bottom-0 w-full h-[6px] sm:h-[8px] rounded-b-4xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white to-blue-500 transition-all duration-300"></div>
          </div>
        </div>
          </motion.div>
        </div>
      </section>


      <section className="w-full bg-gradient-to-br from-gray-100 via-white to-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-24 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-gray-800 drop-shadow-[0_6px_8px_rgba(96,165,250,0.4)]">
          Industries We Serve
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 md:gap-14 items-center justify-center">
          {[
  { name: "Manufacturing", img: "image 6.png" },
  { name: "Distribution & Retail", img: "image 7.png" },
  { name: "Textile & Apparel", img: "image 8.png" },
  { name: "Services & Agencies", img: "image 10.png" },
  { name: "ERP-driven Enterprises", img: "image 12.png" },
].map((industry, index, array) => (
  <div
    key={index}
    className={`flex flex-col items-center justify-center gap-4 cursor-pointer group
      ${index === array.length - 1 ? "col-span-2 sm:col-span-1" : ""}
    `}
  >
    {/* Gradient glow only on hover */}
    <div className="relative">
      <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-visible shadow-blue-400 shadow-md transition duration-300 group-hover:scale-105">
        <img
          src={`/assets/${industry.img}`}
          alt={industry.name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Bottom gradient only on hover */}
      <div className="absolute bottom-[-8px] sm:bottom-[-10px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="w-16 h-4 sm:w-24 sm:h-6 md:w-28 md:h-7 rounded-b-full bg-gradient-to-t from-blue-400 via-blue-300 to-transparent blur-md"></div>
      </div>
    </div>

    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 tracking-wide group-hover:text-blue-600 transition">
      {industry.name}
    </p>
  </div>
))}
</div>
      </section>







    </main>
  );
}