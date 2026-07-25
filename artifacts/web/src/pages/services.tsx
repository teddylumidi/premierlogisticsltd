import { Link } from "wouter";
import { Truck, Plane, Ship, Package, Clock, Globe, Shield, BarChart3 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Road Freight",
      desc: "Full truckload (FTL) and less-than-truckload (LTL) shipping across our road network. Real-time GPS tracking included.",
      features: ["FTL & LTL options", "Temperature-controlled", "Hazmat certified", "Last-mile delivery"],
      badge: "Most Popular",
    },
    {
      icon: Plane,
      title: "Air Freight",
      desc: "Express and economy air freight solutions for time-critical shipments to 60+ countries worldwide.",
      features: ["Next-flight-out available", "Door-to-door service", "Customs clearance", "Priority handling"],
      badge: null,
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      desc: "FCL and LCL ocean freight services with competitive rates and reliable transit times across major trade lanes.",
      features: ["FCL & LCL", "Port-to-door delivery", "Inland transport", "Cargo insurance"],
      badge: null,
    },
    {
      icon: Package,
      title: "Parcel & Express",
      desc: "Fast, reliable parcel delivery for e-commerce and business shipments with next-day and same-day options.",
      features: ["Same-day available", "Proof of delivery", "Returns management", "API integration"],
      badge: "Best Value",
    },
    {
      icon: Clock,
      title: "Time-Critical Logistics",
      desc: "Guaranteed time-definite delivery for urgent cargo. Our 24/7 operations team monitors every shipment.",
      features: ["Minute-level precision", "Dedicated handler", "Executive notification", "SLA guarantees"],
      badge: null,
    },
    {
      icon: Globe,
      title: "International Freight",
      desc: "End-to-end global freight management including customs brokerage, duties, and compliance documentation.",
      features: ["Customs brokerage", "Trade compliance", "HS code classification", "Duty drawback"],
      badge: null,
    },
    {
      icon: Shield,
      title: "Warehousing & Fulfillment",
      desc: "Strategic warehousing with pick, pack, and ship fulfillment services at locations across our network.",
      features: ["Climate-controlled", "Inventory management", "B2B & D2C fulfillment", "Cross-docking"],
      badge: null,
    },
    {
      icon: BarChart3,
      title: "Supply Chain Consulting",
      desc: "Expert analysis and optimization of your supply chain to reduce costs, improve speed, and increase resilience.",
      features: ["Network design", "Cost reduction", "Risk assessment", "Technology integration"],
      badge: null,
    },
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
            <Link href="/about" className="hover:text-gray-900">About</Link>
            <Link href="/services" className="text-blue-600 font-medium">Services</Link>
            <Link href="/track" className="hover:text-gray-900">Track</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Staff Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Logistics Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From express parcels to complex supply chains — we have a tailored solution for every shipping need.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow relative">
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-blue-100 mb-8">Talk to our logistics experts and get a tailored quote within 2 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Request a Quote
            </Link>
            <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>

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
