import { Link } from "wouter";
import { Truck, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { name: "Adeola Johnson", company: "NileTrade Group", quote: "Premier Logistics transformed our cross-border supply chain. Transit times to East Africa dropped by 40%." },
    { name: "James Peterson", company: "EuroTech Components", quote: "Their real-time tracking and proactive communication give us confidence with every high-value shipment." },
    { name: "Priya Sharma", company: "Mumbai Fresh Foods", quote: "Temperature-controlled delivery is critical for us. Premier's cold-chain reliability is unmatched." },
    { name: "Carlos Mendez", company: "Andes Mining Supplies", quote: "They moved heavy equipment to a remote site in record time. Professional, safe, and transparent." },
    { name: "Fatima Al-Rashid", company: "Dubai Retail Holdings", quote: "E-commerce fulfillment scaled seamlessly during peak season. Our customers noticed the difference." },
    { name: "Michael Chen", company: "Pacific Auto Parts", quote: "Just-in-time parts delivery keeps our factory running. Their SLA performance is consistently above 99%." },
    { name: "Grace Okafor", company: "Lagos Medical Depot", quote: "Emergency medical supplies arrive on time, every time. Their 24/7 operations team is outstanding." },
    { name: "Thomas Mueller", company: "Berlin Pharma GmbH", quote: "Regulatory compliance, chain of custody, and GDP standards — Premier handles it all flawlessly." },
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
            <Link href="/testimonials" className="text-blue-600 font-medium">Testimonials</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Staff Login</Link>
          </div>
        </div>
      </nav>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-xl text-blue-100">Trusted by businesses across six continents to deliver on time, every time.</p>
        </div>
      </section>
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-blue-600 mb-2">98.7%</div><div className="text-gray-600">Customer Satisfaction</div></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">2M+</div><div className="text-gray-600">Deliveries Completed</div></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">15+</div><div className="text-gray-600">Years in Business</div></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">50K+</div><div className="text-gray-600">Business Clients</div></div>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white">
              <Quote className="h-8 w-8 text-blue-200 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.company}</p>
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
