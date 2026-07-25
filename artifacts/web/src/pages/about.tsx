import { Link } from "wouter";
import { Truck, Shield, Globe, Users, Award, Clock } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years in Business", value: "15+" },
    { label: "Countries Served", value: "60+" },
    { label: "Shipments Delivered", value: "2M+" },
    { label: "Client Satisfaction", value: "98.7%" },
  ];

  const values = [
    { icon: Shield, title: "Reliability", desc: "We treat every shipment as our own, ensuring safe, on-time delivery every time." },
    { icon: Globe, title: "Global Reach", desc: "Our network spans 60+ countries with trusted local partners and owned infrastructure." },
    { icon: Clock, title: "Timeliness", desc: "Industry-leading transit times backed by real-time tracking and proactive communication." },
    { icon: Award, title: "Excellence", desc: "ISO 9001 certified operations with rigorous quality checks at every milestone." },
  ];

  const team = [
    { name: "Marcus O. Adeyemi", title: "Chief Executive Officer", initials: "MA" },
    { name: "Sarah L. Chen", title: "Chief Operating Officer", initials: "SC" },
    { name: "David R. Nwachukwu", title: "VP of Global Logistics", initials: "DN" },
    { name: "Amina K. Hassan", title: "Head of Customer Experience", initials: "AH" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-900">
            <Truck className="h-6 w-6 text-blue-600" />
            Premier Logistics
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/about" className="text-blue-600 font-medium">About</Link>
            <Link href="/services" className="hover:text-gray-900">Services</Link>
            <Link href="/track" className="hover:text-gray-900">Track</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Staff Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Premier Logistics</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Founded in 2009, Premier Logistics Ltd has grown from a regional carrier into a global logistics powerhouse,
            connecting businesses and communities across six continents.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{s.value}</div>
                <div className="text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              To deliver more than packages — we deliver certainty. In a world of complex supply chains and rising
              customer expectations, Premier Logistics provides the clarity, speed, and trust that businesses depend on.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every shipment, large or small, gets the same commitment: accurate tracking, transparent communication,
              and professional handling from pickup to proof of delivery.
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-10">
            <blockquote className="text-xl italic text-blue-900 leading-relaxed">
              "We don't just move goods — we move businesses forward. Every delivery is a promise kept."
            </blockquote>
            <p className="mt-6 text-blue-600 font-semibold">— Marcus O. Adeyemi, CEO</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="h-20 w-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {m.initials}
                </div>
                <h3 className="font-semibold text-gray-900">{m.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{m.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Ship with Confidence?</h2>
          <p className="text-blue-100 mb-8 text-lg">Join over 50,000 businesses that trust Premier Logistics.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get a Quote
            </Link>
            <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Premier Logistics Ltd. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
