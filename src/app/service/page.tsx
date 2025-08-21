import Image from 'next/image';

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 md:px-16">
      {/* Hero Section with Blurred Blue Cards and Overlay Text */}
      <section className="relative flex justify-center items-center mb-12 h-60">
        {/* Blurred Blue Cards and Side Shadows */}
        <div className="absolute inset-0 flex justify-center items-center gap-6" aria-hidden="true">
          {/* Left Blur Shadow */}
          <div className="w-[80px] h-[220px] bg-blue-700 rounded-3xl blur-2xl opacity-60 -ml-12" />
          {/* Main Three Cards with different colors */}
          <div className="w-[220px] h-[220px] bg-blue-800 rounded-3xl border-4 border-white blur-md shadow-lg" />
          <div className="w-[220px] h-[220px] bg-blue-800 rounded-3xl border-4 border-white blur-md shadow-lg" />
          <div className="w-[220px] h-[220px] bg-blue-800 rounded-3xl border-4 border-white blur-md shadow-lg" />
          {/* Right Blur Shadow */}
          <div className="w-[80px] h-[220px] bg-blue-700 rounded-3xl blur-2xl opacity-60 -mr-12" />
        </div>
        {/* Overlay Text and Double Angled Lines */}
        <div className="relative z-10 flex flex-col items-center w-[320px]">
          {/* Top Double Lines */}
          <div className="w-full flex flex-col gap-1 mb-4">
            <div className="border-t-2 border-white w-full" style={{ transform: 'rotate(-10deg)' }} />
            <div className="border-t-2 border-white w-full" style={{ transform: 'rotate(-10deg)' }} />
          </div>
          {/* Blurred White Shadow Text */}
          <span
            className="absolute left-1/2 top-1/2 text-4xl font-bold text-white opacity-40 pointer-events-none select-none"
            style={{
              transform: 'translate(-50%, -50%) rotate(-6deg)',
              filter: 'blur(2px)',
              zIndex: 0,
              whiteSpace: 'nowrap'
            }}
          >
            Our Services
          </span>
          {/* Main Text */}
          <h1
            className="text-4xl font-bold text-white text-center relative"
            style={{ transform: 'rotate(-6deg)', zIndex: 1 }}
          >
            Our Services
          </h1>
          {/* Bottom Double Lines */}
          <div className="w-full flex flex-col gap-1 mt-4">
            <div className="border-t-2 border-white w-full" style={{ transform: 'rotate(-10deg)' }} />
            <div className="border-t-2 border-white w-full" style={{ transform: 'rotate(-10deg)' }} />
          </div>
        </div>
      </section>
      {/* Subtitle */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-600">
          Turn processes into progress — with Aerle’s tech expertise.
        </p>
      </section>

      {/* ERPNext Customization Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 mb-16 px-2">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center justify-center mx-auto">
            {/* Title with brush image background */}
            <div className="relative flex justify-center items-center mx-auto mb-4 h-[100px] w-full">
                <Image
                    src="/assets/erpnext-brush.png"
                    alt=""
                    fill
                    className="object-contain pointer-events-none select-none"
                    style={{ zIndex: 10 }}
                />
                <h2 className="text-3xl md:text-4xl font-bold text-black text-center relative z-10">
                    ERPNext Customization
                </h2>
            </div>
            {/* Description */}
            <p className="text-gray-700 mb-6 max-w-2xl text-center">
                Every business is unique, and so should be its ERP. We specialize in deep ERPNext customizations to ensure your workflows are fully supported—not the other way around. Whether you need custom modules, workflow automations, tailored reports, or integrations with third-party tools, we build solutions that adapt to your business.
            </p>
            {/* Features List */}
            <ul className="space-y-4 w-full max-w-xl mx-auto">
                {[
                    {
                        title: "Enhanced Modules",
                        desc: "adapting ERPNext to fit your unique workflows"
                    },
                    {
                        title: "Custom Apps",
                        desc: "building solutions on Frappe tailored to your needs"
                    },
                    {
                        title: "Smart Reports",
                        desc: "dynamic dashboards for data-driven decisions"
                    },
                    {
                        title: "Seamless Integrations",
                        desc: "connecting ERPNext with eCommerce, CRMs, gateways & APIs"
                    }
                ].map((feature, idx) => (
                    <li key={feature.title} className="flex items-start gap-3">
                        {/* Icon image */}
                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                            <Image
                                src="/assets/point.png"
                                alt="Feature Icon"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <span className="font-bold text-blue-900">{feature.title}</span>
                            <span className="block text-gray-700 text-sm"> – {feature.desc}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        {/* Right: Overlapping Images */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="relative w-[420px] h-[260px] max-w-full">
            {/* Back image (shifted up/left, behind) */}
            <Image
              src="/assets/erp-cust1.png"
              alt="ERPNext Customization Screenshot 1"
              width={340}
              height={220}
              className="absolute top-0 left-0 rounded-xl shadow-lg object-contain z-0 -translate-x-8 -translate-y-6 bg-white"
              style={{ background: 'white' }}
            />
            {/* Front image (main, shifted down/right, in front) */}
            <Image
              src="/assets/erp-cust2.png"
              alt="ERPNext Customization Screenshot 2"
              width={380}
              height={240}
              className="absolute top-10 left-16 rounded-xl shadow-2xl object-contain z-10 bg-white"
              style={{ background: 'white' }}
            />
          </div>
        </div>
      </section>

      {/* Enterprise Portal Development Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 mb-16 px-2">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center justify-center mx-auto">
          {/* Title with brush image background */}
          <div className="relative flex justify-center items-center mx-auto mb-4 h-[100px] w-full">
            <Image
              src="/assets/erpnext-brush.png"
              alt=""
              fill
              className="object-contain pointer-events-none select-none"
              style={{ zIndex: 10 }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center relative z-10">
              Enterprise Portal Development
            </h2>
          </div>
          {/* Description */}
          <p className="text-gray-700 mb-6 max-w-2xl text-center">
            Large enterprises deal with scattered systems, complex data, and disconnected teams. We build enterprise portals that act as a unified access point — connecting employees, customers, and partners through intuitive, user-friendly interfaces.
          </p>
          {/* Features List */}
          <ul className="space-y-4 w-full max-w-xl mx-auto">
            {[
              {
                title: "Unified Dashboards",
                desc: "one place for teams, data & operations"
              },
              {
                title: "Self-Service Portals",
                desc: "for customers, vendors, and employees"
              },
              {
                title: "Deep Integration",
                desc: "ERPNext + legacy systems, working as one"
              },
              {
                title: "Scalable Design",
                desc: "secure, mobile-friendly, and future-ready"
              }
            ].map((feature, idx) => (
              <li key={feature.title} className="flex items-start gap-3">
                {/* Icon image */}
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/point.png"
                    alt="Feature Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-bold text-blue-900">{feature.title}</span>
                  <span className="block text-gray-700 text-sm"> – {feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Overlapping Images */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="relative w-[420px] h-[260px] max-w-full">
            {/* Back image (shifted up/left, behind) */}
            <Image
              src="/assets/erp-portal-1.png"
              alt="Enterprise Portal Screenshot 1"
              width={340}
              height={220}
              className="absolute top-0 left-0 rounded-xl shadow-lg object-contain z-0 -translate-x-8 -translate-y-6 bg-white"
              style={{ background: 'white' }}
            />
            {/* Front image (main, shifted down/right, in front) */}
            <Image
              src="/assets/erp-portal-2.png"
              alt="Enterprise Portal Screenshot 2"
              width={380}
              height={240}
              className="absolute top-10 left-16 rounded-xl shadow-2xl object-contain z-10 bg-white"
              style={{ background: 'white' }}
            />
          </div>
        </div>
      </section>

      {/* Prototype & MVP Development Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 mb-16 px-2">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center justify-center mx-auto">
          {/* Title with brush image background */}
          <div className="relative flex justify-center items-center mx-auto mb-4 h-[100px] w-full">
            <Image
              src="/assets/erpnext-brush.png"
              alt=""
              fill
              className="object-contain pointer-events-none select-none"
              style={{ zIndex: 10 }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center relative z-10">
              Prototype & MVP Development
            </h2>
          </div>
          {/* Description */}
          <p className="text-gray-700 mb-6 max-w-2xl text-center">
            In today’s fast-paced market, speed is everything. Whether you’re a startup validating an idea or an enterprise testing a new product line, we help you build robust prototypes and MVPs that let you test, validate, and pivot quickly.
          </p>
          {/* Features List */}
          <ul className="space-y-4 w-full max-w-xl mx-auto">
            {[
              {
                title: "Rapid Prototyping",
                desc: "quick turnarounds to test ideas fast"
              },
              {
                title: "Lean MVPs",
                desc: "core features built for real-world validation"
              },
              {
                title: "Agile Sprints",
                desc: "short cycles with constant feedback loops"
              },
              {
                title: "Growth-Ready",
                desc: "MVPs designed to scale into full products"
              }
            ].map((feature, idx) => (
              <li key={feature.title} className="flex items-start gap-3">
                {/* Blue triangle icon */}
                <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/point.png"
                    alt="Feature Icon"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-bold text-blue-900">{feature.title}</span>
                  <span className="block text-gray-700 text-sm"> – {feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Overlapping Images */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="relative w-[420px] h-[260px] max-w-full">
            {/* Back image (shifted up/left, behind) */}
            <Image
              src="/assets/mvp-1.png"
              alt="Prototype Screenshot 1"
              width={340}
              height={220}
              className="absolute top-0 left-0 rounded-xl shadow-lg object-contain z-0 -translate-x-8 -translate-y-6 bg-white"
              style={{ background: 'white' }}
            />
            {/* Front image (main, shifted down/right, in front) */}
            <Image
              src="/assets/mvp-2.png"
              alt="Prototype Screenshot 2"
              width={380}
              height={240}
              className="absolute top-10 left-16 rounded-xl shadow-2xl object-contain z-10 bg-white"
              style={{ background: 'white' }}
            />
          </div>
        </div>
      </section>

      {/* DevOps & System Integration Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 mb-16 px-2">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center justify-center mx-auto">
          {/* Title with brush image background */}
          <div className="relative flex justify-center items-center mx-auto mb-4 h-[100px] w-full">
            <Image
              src="/assets/erpnext-brush.png"
              alt=""
              fill
              className="object-contain pointer-events-none select-none"
              style={{ zIndex: 10 }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center relative z-10">
              DevOps & System Integration
            </h2>
          </div>
          {/* Description */}
          <p className="text-gray-700 mb-6 max-w-2xl text-center">
            Modern enterprises rely on multiple apps, tools, and systems — and we ensure they work together smoothly. Our DevOps and integration services help you achieve scalability, reliability, and automation in your IT infrastructure.
          </p>
          {/* Features List */}
          <ul className="space-y-6 w-full max-w-xl mx-auto">
            {[
              {
                title: "CI/CD Pipelines",
                desc: "faster, automated, error-free deployments"
              },
              {
                title: "Containerization",
                desc: "Docker & Kubernetes for smooth scaling"
              },
              {
                title: "System Integrations",
                desc: "APIs, CRMs & payment systems connected"
              },
              {
                title: "Proactive Monitoring",
                desc: "reliable uptime & optimized performance"
              }
            ].map((feature, idx) => (
              <li key={feature.title} className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  {/* Blue gradient triangle icon */}
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/assets/point.png"
                      alt="Feature Icon"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-bold text-blue-900">{feature.title}</span>
                    <span className="text-gray-900"> – {feature.desc}</span>
                  </div>
                </div>
                {/* Bottom line */}
                <div className="ml-10 mt-1 h-1 w-3/4 bg-gray-300 rounded-full" />
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Overlapping Images */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="relative w-[420px] h-[260px] max-w-full">
            {/* Back image (shifted up/left, behind) */}
            <Image
              src="/assets/devops-2.png"
              alt="DevOps Screenshot 1"
              width={340}
              height={220}
              className="absolute top-0 left-0 rounded-xl shadow-lg object-contain z-0 -translate-x-8 -translate-y-6 bg-white"
              style={{ background: 'white' }}
            />
            {/* Front image (main, shifted down/right, in front) */}
            <Image
              src="/assets/devops-1.png"
              alt="DevOps Screenshot 2"
              width={380}
              height={240}
              className="absolute top-10 left-16 rounded-xl shadow-2xl object-contain z-10 bg-white"
              style={{ background: 'white' }}
            />
          </div>
        </div>
      </section>

      {/* Technology Consulting Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 mb-16 px-2">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center justify-center mx-auto">
          {/* Title with brush image background */}
          <div className="relative flex justify-center items-center mx-auto mb-4 h-[80px] w-full">
            <Image
              src="/assets/erpnext-brush.png"
              alt=""
              fill
              className="object-contain pointer-events-none select-none"
              style={{ zIndex: 10 }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center relative z-10">
              Technology Consulting
            </h2>
          </div>
          {/* Description */}
          <p className="text-gray-700 mb-6 max-w-2xl text-center">
            Choosing the right technology stack can make or break your growth. Our consulting services help you navigate the digital landscape — from evaluating ERPNext fitment to planning IT architecture and long-term tech strategy.
          </p>
          {/* Features List */}
          <ul className="space-y-6 w-full max-w-xl mx-auto">
            {[
              {
                title: "Tech Assessments",
                desc: "identifying gaps & digital opportunities"
              },
              {
                title: "Scalable Architecture",
                desc: "ERP & apps designed for growth"
              },
              {
                title: "Cloud & DevOps Guidance",
                desc: "smarter adoption, smoother operations"
              },
              {
                title: "Digital Roadmaps",
                desc: "strategies for automation & transformation"
              }
            ].map((feature, idx) => (
              <li key={feature.title} className="flex items-center gap-3">
                {/* Blue gradient triangle icon */}
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/point.png"
                    alt="Feature Icon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-bold text-blue-900">{feature.title}</span>
                  <span className="block text-gray-700 text-sm"> – {feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Overlapping Images */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="relative w-[420px] h-[260px] max-w-full">
            {/* Back image (shifted up/left, behind) */}
            <Image
              src="/assets/consult-2appl.png"
              alt="Technology Consulting Screenshot 1"
              width={340}
              height={220}
              className="absolute top-0 left-0 rounded-xl shadow-lg object-contain z-0 -translate-x-8 -translate-y-6 bg-white"
              style={{ background: 'white' }}
            />
            {/* Front image (main, shifted down/right, in front) */}
            <Image
              src="/assets/consult-1.png"
              alt="Technology Consulting Screenshot 2"
              width={380}
              height={240}
              className="absolute top-10 left-16 rounded-xl shadow-2xl object-contain z-10 bg-white"
              style={{ background: 'white' }}
            />
          </div>
        </div>
      </section>

      {/* Connecting ERPNext with Your Business Ecosystem */}
      <div className="w-full flex flex-col items-center mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
          Connecting ERPNext with Your Business Ecosystem
        </h2>
        <div className="relative w-[920px] h-30 mx-auto mb-8">
          <Image
            src="/assets/erpnext-connect-brush.png"
            alt="ERPNext Connect Brush"
            fill
            className="object-contain pointer-events-none select-none"
          />
        </div>
      </div>



      {/* Industry veterans Trust us section */}
      <section className="max-w-7xl mx-auto mb-20 px-2">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
            Industry veterans <span className="text-blue-700">Trust us</span>
        </h2>
        <div className="w-full">
        <div className="flex flex-wrap justify-center items-center gap-8 py-4">
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/6833ef03ab58b_loreal.png?d=395x278" alt="loreal logo" width={170} height={95} />
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc92ec17499_home_icon_walmart.png?d=288x190" alt="walmart logo" width={144} height={95} />
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc8d799faf3_home_icon_asian_paints2.png?d=222x198" alt="asian paints logo" width={107} height={95} />
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc84534cce0_home_icon_aditya_birla_group.png?d=222x190" alt="aditya birla logo" width={96} height={95} />
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/676e48b78b746_hp.png?d=200x200" alt="Hindustan Petroleum logo" width={111} height={95} />
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/687096c62be4a_zydus.png?d=215x214" alt="Zydus logo" width={111} height={95} />
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc8e3873ff1_home_icon_wipro2.png?d=222x190" alt="Wipro logo" width={111} height={95} />
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/6833ee5e70d03_amazone.png?d=395x294" alt="amazon logo" width={146} height={95} />
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/6833eea57ee44_flipkart.png?d=395x306" alt="flipkart logo" width={135} height={95} />
        </div>
        </div>
      </div>
    </section>
    </main>
  );
}

