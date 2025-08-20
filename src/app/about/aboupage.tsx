export default function AboutPage() {
  return (
    <main className="flex flex-col items-center px-4 py-16 min-h-[80vh] bg-white">
      {/* City sketch and About Us heading */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center relative mb-8">
        <img src="/assets/about.png" alt="City sketch" className="w-full max-w-2xl mx-auto mb-[-60px] select-none pointer-events-none" style={{zIndex:1}} />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mt-[-40px] mb-4 drop-shadow-lg" style={{zIndex:2, position:'relative'}}>About Us</h1>
      </div>
      {/* Company description */}
      <div className="w-full max-w-2xl mx-auto text-center text-gray-700 mb-12 text-base md:text-lg leading-relaxed">
        <p className="mb-2">
          Aerele Technologies is a software development company specializing in enterprise solutions built on the Frappe framework 
          and ERPNext. Founded in 2019 and headquartered in Tiruppur, India, we empower businesses with tailored ERP
          systems and technology-driven innovation.
        </p>
        <p className="mb-2">
          Our expertise is trusted by sectors like manufacturing, retail, and supply chain, especially where
           robust software ecosystems and seamless integrations are crucial.
        </p>
        <p>
          At Aerele, we combine deep technical knowledge with practical business insights to deliver scalable, 
          future-ready enterprise applications.
        </p>
      </div>
      {/* Dashboard/ERPNext image section */}
      <div className="w-full flex justify-center mt-8">
        <img src="/assets/erp-dashboard.png" alt="ERPNext Dashboard" className="w-full max-w-3xl rounded-2xl shadow-lg border border-blue-100" />
      </div>
    </main>
  );
}
