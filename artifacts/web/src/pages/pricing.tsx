import { Link } from "wouter";
import { Truck, Check, X } from "lucide-react";

export default function Pricing() {
  const tiers = [
    { name: "Starter", price: "Free", desc: "For occasional shippers and small businesses", cta: "Get Started", highlight: false },
    { name: "Business", price: "$299", period: "/month", desc: "For growing businesses with regular shipping needs", cta: "Start Free Trial", highlight: true },
    { name: "Enterprise", price: "Custom", desc: "For high-volume shippers and complex supply chains", cta: "Contact Sales", highlight: false },
  ];
  const features = [
    { label: "Customer account & portal", starter: true, business: true, enterprise: true },
    { label: "Public tracking link", starter: true, business: true, enterprise: true },
    { label: "Real-time tracking updates", starter: true, business: true, enterprise: true },
    { label: "Email notifications", starter: true, business: true, enterprise: true },
    { label: "Road freight", starter: true, business: true, enterprise: true },
    { label: "Air & ocean freight", starter: false, business: true, enterprise: true },
    { label: "Dedicated account manager", starter: false, business: true, enterprise: true },
    { label: "Volume discounts", starter: false, business: "10%", enterprise: "Custom" },
    { label: "API access", starter: false, business: true, enterprise: true },
    { label: "Customs & brokerage support", starter: "Pay-per-use", business: true, enterprise: true },
    { label: "Warehousing & fulfillment", starter: false, business: "Add-on", enterprise: true },
    { label: "SLA guarantees", starter: false, business: true, enterprise: true },
  ];

  const render = (val: boolean | string) =>
    val === true ? <Check className="h-5 w-5 text-green-600 mx-auto" /> :
    val === false ? <X className="h-5 w-5 text-gray-300 mx-auto" /> :
    <span className="text-sm font-medium text-blue-600">{val}</span>;

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
            <Link href="/pricing" className="text-blue-600 font-medium">Pricing</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Staff Login</Link>
          </div>
        </div>
      </nav>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-blue-100">Choose a plan that fits your shipping volume and business needs.</p>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl p-8 border ${t.highlight ? "border-blue-600 shadow-xl shadow-blue-900/10 relative" : "border-gray-200"}`}>
              {t.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>}
              <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
              <div className="mt-4 mb-2"><span className="text-4xl font-bold text-blue-600">{t.price}</span>{t.period && <span className="text-gray-500">{t.period}</span>}</div>
              <p className="text-gray-600 mb-6">{t.desc}</p>
              <Link href="/quote" className={`block text-center py-3 rounded-lg font-semibold transition-colors ${t.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}>{t.cta}</Link>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 border border-gray-200 font-semibold text-gray-900">Feature</th>
                <th className="p-4 border border-gray-200 font-semibold text-gray-900">Starter</th>
                <th className="p-4 border border-gray-200 font-semibold text-blue-600">Business</th>
                <th className="p-4 border border-gray-200 font-semibold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.label} className="hover:bg-gray-50">
                  <td className="p-4 border border-gray-200 text-gray-700">{f.label}</td>
                  <td className="p-4 border border-gray-200 text-center">{render(f.starter)}</td>
                  <td className="p-4 border border-gray-200 text-center">{render(f.business)}</td>
                  <td className="p-4 border border-gray-200 text-center">{render(f.enterprise)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p>&copy; {new Date().getFullYear()} Premier Logistics Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
