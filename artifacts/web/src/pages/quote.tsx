import { Link } from "wouter";
import { Truck, CheckCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Quote() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", origin: "", destination: "", serviceType: "", weight: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ""}/api/quotes`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origin: form.origin, destination: form.destination, serviceType: form.serviceType,
          weight: Number(form.weight) || undefined, notes: `Name: ${form.name}, Phone: ${form.phone}, Description: ${form.description}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit quote");
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

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
            <Link href="/quote" className="text-blue-600 font-medium">Quote</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Staff Login</Link>
          </div>
        </div>
      </nav>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl text-blue-100">Get a tailored logistics quote within 2 hours. No commitment required.</p>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Tell Us About Your Shipment</h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quote Request Received</h3>
              <p className="text-gray-600">Our team will email your tailored quote within 2 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label htmlFor="quote-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label><input id="quote-name" name="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" /></div>
                <div><label htmlFor="quote-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input id="quote-email" name="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@company.com" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input id="quote-phone" name="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+1 555 000 0000" /></div>
                <div><label htmlFor="quote-service" className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label><select id="quote-service" name="serviceType" required value={form.serviceType} onChange={(e) => setForm({ ...form, serviceType: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"><option value="">Select</option><option value="road">Road Freight</option><option value="air">Air Freight</option><option value="ocean">Ocean Freight</option><option value="express">Express Parcel</option></select></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label htmlFor="quote-origin" className="block text-sm font-medium text-gray-700 mb-1">Origin City *</label><input id="quote-origin" name="origin" required value={form.origin} onChange={(e) => setForm({ ...form, origin: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. London" /></div>
                <div><label htmlFor="quote-destination" className="block text-sm font-medium text-gray-700 mb-1">Destination City *</label><input id="quote-destination" name="destination" required value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Lagos" /></div>
              </div>
              <div><label htmlFor="quote-weight" className="block text-sm font-medium text-gray-700 mb-1">Estimated Weight (kg)</label><input id="quote-weight" name="weight" type="number" min="0" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0.00" /></div>
              <div><label htmlFor="quote-desc" className="block text-sm font-medium text-gray-700 mb-1">Shipment Description</label><textarea id="quote-desc" name="description" rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Describe the goods, dimensions, special handling..." /></div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center gap-2 disabled:opacity-60"><Send className="h-4 w-4" />{loading ? "Submitting..." : "Request Quote"}</button>
            </form>
          )}
        </div>
        <div className="bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Estimated Sample Rates</h3>
          <p className="text-gray-600 text-sm mb-6">Rates are indicative and depend on exact dimensions, commodity, and service level. Final pricing is confirmed after review.</p>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-blue-100 pb-2"><span className="text-gray-700">Express Parcel (1 kg)</span><span className="font-semibold text-gray-900">$25 - $45</span></div>
            <div className="flex justify-between border-b border-blue-100 pb-2"><span className="text-gray-700">Road Freight (100 kg)</span><span className="font-semibold text-gray-900">$120 - $220</span></div>
            <div className="flex justify-between border-b border-blue-100 pb-2"><span className="text-gray-700">Air Freight (500 kg)</span><span className="font-semibold text-gray-900">$850 - $1,500</span></div>
            <div className="flex justify-between border-b border-blue-100 pb-2"><span className="text-gray-700">Ocean Freight (FCL)</span><span className="font-semibold text-gray-900">$2,000 - $4,500</span></div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p>&copy; {new Date().getFullYear()} Premier Logistics Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
