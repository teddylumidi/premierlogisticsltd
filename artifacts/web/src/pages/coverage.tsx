import { Link } from "wouter";
import { Truck, Globe, MapPin } from "lucide-react";

export default function Coverage() {
  const regions = [
    { name: "Africa", countries: "Nigeria, South Africa, Kenya, Ghana, Egypt, Morocco, Ethiopia, Tanzania", hubs: "Lagos, Johannesburg, Nairobi, Casablanca", time: "1-5 days domestic, 3-7 regional" },
    { name: "Europe", countries: "UK, Germany, France, Netherlands, Spain, Italy, Poland, Belgium", hubs: "London, Amsterdam, Frankfurt, Madrid", time: "1-3 days regional, 2-5 cross-border" },
    { name: "North America", countries: "USA, Canada, Mexico", hubs: "New York, Chicago, Los Angeles, Toronto", time: "1-5 days ground, 1-2 air" },
    { name: "Asia Pacific", countries: "China, India, Japan, Singapore, Australia, South Korea, Malaysia", hubs: "Singapore, Hong Kong, Shanghai, Sydney", time: "2-7 days regional, 1-3 air" },
    { name: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, Jordan", hubs: "Dubai, Jeddah, Doha, Riyadh", time: "1-3 days regional" },
    { name: "Latin America", countries: "Brazil, Argentina, Chile, Colombia, Peru, Mexico, Uruguay", hubs: "São Paulo, Mexico City, Buenos Aires, Santiago", time: "2-6 days regional" },
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
            <Link href="/coverage" className="text-blue-600 font-medium">Coverage</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Staff Login</Link>
          </div>
        </div>
      </nav>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Coverage</h1>
          <p className="text-xl text-blue-100">We connect 60+ countries and 500+ cities through owned infrastructure and trusted partners.</p>
        </div>
      </section>
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-blue-600 mb-2">60+</div><div className="text-gray-600">Countries</div></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">500+</div><div className="text-gray-600">Cities</div></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">120+</div><div className="text-gray-600">Hubs</div></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">6</div><div className="text-gray-600">Continents</div></div>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((r) => (
            <div key={r.name} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{r.name}</h3>
              </div>
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Key Countries</p>
                <p className="text-gray-700 text-sm">{r.countries}</p>
              </div>
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Major Hubs</p>
                <p className="text-gray-700 text-sm flex items-center gap-1"><MapPin className="h-3 w-3" />{r.hubs}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Transit Times</p>
                <p className="text-gray-700 text-sm">{r.time}</p>
              </div>
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
