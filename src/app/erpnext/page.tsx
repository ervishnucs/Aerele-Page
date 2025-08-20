export default function ERPNextPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto mt-8 mb-8">
        <div className="bg-blue-900 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between text-white relative">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Your Business. One Platform. <span className="text-white font-extrabold">ERPNext</span></h1>
            <p className="mb-4 text-lg">Simplify operations and accelerate growth.</p>
            <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition">Book your consultation Now</button>
          </div>
          <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><polygon points="0,0 80,40 0,80" fill="#1e3a8a" /></svg>
          </div>
        </div>
      </section>

      {/* What is ERPNext */}
      <section className="w-full max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 mt-8">What is ERPNext ?</h2>
        <p className="text-center text-gray-700 mb-2 px-2">
          ERPNext is a modern, open-source ERP system designed to streamline every aspect of your business — from accounting, inventory, and HR to sales, purchases, CRM, and manufacturing. With a clean interface, full customizability, and real-time dashboards, ERPNext empowers businesses to manage operations with insight and make data-driven decisions.
        </p>
        <p className="text-center text-gray-700 mb-2 px-2">
          Built on the powerful Frappe framework, ERPNext is fully web-based, mobile-ready, and ideal for small to mid-sized enterprises across industries like Manufacturing, Retail, Services, Distribution, and more.
        </p>
      </section>

      {/* Why Choose ERPNext */}
      <section className="w-full max-w-5xl mx-auto mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8">Why Choose ERPNext?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">All-in-One Platform</h4>
            <p className="text-gray-600">No more juggling between software—ERPNext unifies your business on one platform.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">Open Source & Cost-Effective</h4>
            <p className="text-gray-600">Enjoy the flexibility and savings of open-source software with no vendor lock-in.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">Customizable for Your Industry</h4>
            <p className="text-gray-600">Tailor ERPNext to your unique workflows and requirements.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">Real-Time Insights</h4>
            <p className="text-gray-600">Get smart dashboards, reports, and analytics to make better decisions, faster.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">Cloud or On-Premise</h4>
            <p className="text-gray-600">Deploy it your way — in the cloud or on your own servers.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">Active Community & Support</h4>
            <p className="text-gray-600">Join a growing community of developers, users, and partners offering global support.</p>
          </div>
        </div>
      </section>

      {/* ERPNext Screenshots */}
      <section className="w-full max-w-5xl mx-auto mb-12 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6">
          <img src="/assets/erp-dashboard-1.png" alt="ERPNext Dashboard 1" className="rounded-xl shadow w-[420px] max-w-full" />
          <img src="/assets/erp-dashboard-2.png" alt="ERPNext Dashboard 2" className="rounded-xl shadow w-[420px] max-w-full" />
        </div>
      </section>

      {/* Logos of users */}
      <section className="w-full max-w-5xl mx-auto mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-4">Loved by users<br /><span className="text-lg font-normal">Used by more than 10,000 companies across the world</span></h3>
        <div className="bg-white rounded-2xl shadow p-6 flex justify-center">
          <img src="/assets/erpnext-users.png" alt="ERPNext Users Logos" className="max-w-full h-auto" />
        </div>
      </section>

      {/* Aerele With ERPNext */}
      <section className="w-full max-w-5xl mx-auto mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8">Aerele With ERPNext</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">Process-Driven Business Analysis</h4>
            <p className="text-gray-600">We start with your workflows, not templates — ensuring ERPNext fits your business, not the other way around.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">Seamless Implementation & Onboarding</h4>
            <p className="text-gray-600">Structured, hassle-free deployment with stakeholder training and hand-holding throughout.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">Custom Workflows & App Development</h4>
            <p className="text-gray-600">From unique approvals to industry-specific modules, we build your business your way.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">API Integrations & Third-Party Connectivity</h4>
            <p className="text-gray-600">Connect ERPNext to your digital ecosystem — e-commerce, CRMs, payment gateways, and more.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">Smart Dashboards & Real-Time Reports</h4>
            <p className="text-gray-600">Gain visibility and make better decisions with intuitive, actionable insights.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">Ongoing Support & Optimization</h4>
            <p className="text-gray-600">We stay with you — post-launch support, version upgrades, and continuous improvements.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
            <h4 className="font-semibold text-lg mb-2">Migration & Compliance</h4>
            <p className="text-gray-600">Migrate legacy data safely and align with data governance best practices.</p>
          </div>
        </div>
      </section>

      {/* Let's Make Something Great Together */}
      <section className="w-full bg-blue-900 py-10 mt-8">
        <h3 className="text-2xl font-bold text-white text-center mb-4">Let’s Make Something Great Together</h3>
        <p className="text-center text-white mb-8">We look forward to collaborating with you to bring your ERP vision to life—seamlessly, strategically, and successfully.</p>
        <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-white bg-opacity-80 rounded-xl p-8 shadow">
          <input type="text" placeholder="Name" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="Email" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="Phone" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 md:col-span-1" />
          <input type="text" placeholder="Subject" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 md:col-span-1" />
          <textarea placeholder="Message" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 md:col-span-2" rows={4}></textarea>
          <button type="submit" className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-800 transition md:col-span-2">Send Message</button>
        </form>
        <div className="w-full flex justify-center mt-8">
          <img src="/assets/erp-footer-city.png" alt="City silhouette" className="w-full max-w-2xl opacity-80" />
        </div>
      </section>
    </main>
  );
}
