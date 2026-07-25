import { Link } from "wouter";
import { Truck, ShoppingBag, Car, Pill, Flame, Factory, Leaf, Cpu, HeartPulse } from "lucide-react";

export default function Industries() {
  const industries = [
    { icon: ShoppingBag, title: "Retail & E-commerce", desc: "Fast, reliable parcel delivery and returns for online retailers of every size.", needs: ["Same-day delivery", "Reverse logistics", "API integration", "Proof of delivery"] },
    { icon: Car, title: "Automotive", desc: "Just-in-time parts delivery and finished vehicle logistics across borders.", needs: ["JIT delivery", "Parts distribution", "Quality checks", "Hazmat handling"] },
    { icon: Pill, title: "Pharmaceuticals", desc: "Temperature-controlled, compliant logistics for medicines and clinical supplies.", needs: ["Cold chain", "GDP compliance", "Serialisation", "Chain of custody"] },
    { icon: Flame, title: "Oil & Gas", desc: "Heavy equipment, parts, and hazardous cargo for remote energy operations.", needs: ["Dangerous goods", "Charter services", "Remote delivery", "Security escort"] },
    { icon: Factory, title: "Manufacturing", desc: "Raw material inbound, finished goods outbound, and factory-to-distributor routes.", needs: ["Supply chain design", "Consolidation", "Customs clearance", "VMI programs"] },
    { icon: Leaf, title: "Agriculture", desc: "Perishable produce, seeds, and farm equipment shipped with care and speed.", needs: ["Refrigerated transport", "Phytosanitary docs", "Fast transit", "Farm collection"] },
    { icon: Cpu, title: "Technology", desc: "High-value electronics with secure handling, insurance, and white-glove options.", needs: ["Anti-static packaging", "High-value insurance", "Secure transport", "Global returns"] },
    { icon: HeartPulse, title: "Healthcare", desc: "Medical devices, emergency supplies, and hospital replenishment with full traceability.", needs: ["Sterile handling", "Emergency response", "Temperature control", "Lot tracking"] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-900"><Truck className="h-6 w-6 text-blue-600" />Premier Logistics</Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/about" className="hover:text-gray-900">About</Link>
            <Link href="/services" className="hover:text-gray-900">Services</Link>
            <Link href="/track" className="hover:text-gray-900">Track</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact</Link>
            <Link href="/industries" className="text-blue-600 font-medium">Industries</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Staff Login</Link>
          </div>
        </div>
      </nav>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-blue-100">Specialised logistics solutions tailored to the unique demands of each sector.</p>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((i) => (
            <div key={i.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <i.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{i.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{i.desc}</p>
              <ul className="space-y-1">
                {i.needs.map((n) => (
                  <li key={n} className="text-sm text-gray-600 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-500" />{n}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p>&copy; {new Date().getFullYear()} Premier Logistics Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
