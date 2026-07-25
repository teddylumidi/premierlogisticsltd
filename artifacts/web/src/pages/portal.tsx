import { Link } from "wouter";
import { Truck, Package, FileText, CreditCard, User, Loader2, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Portal() {
  const [user, setUser] = useState<any>(null);
  const [overview, setOverview] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<"overview" | "shipments" | "quotes" | "invoices">("overview");
  const [register, setRegister] = useState({ name: "", email: "", company: "", phone: "", address: "" });
  const [registering, setRegistering] = useState(false);
  const [registered, setRegistered] = useState(false);

  const apiBase = import.meta.env.VITE_API_URL || "";
  const api = (path: string) => `${apiBase}/api${path}`;

  useEffect(() => {
    fetch(api("/me"), { credentials: "include" }).then((r) => r.json()).then(setUser).catch(() => setUser(null));
    fetch(api("/portal/overview"), { credentials: "include" })
      .then((r) => { if (!r.ok) throw new Error("Not authenticated"); return r.json(); })
      .then(setOverview)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [registered]);

  const doRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegistering(true);
    const res = await fetch(api("/portal/register"), { method: "POST", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify(register) });
    if (res.ok) setRegistered(true);
    setRegistering(false);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-blue-600" /></div>;
  if (!user) return <div className="min-h-screen flex items-center justify-center"><div className="text-center"><p className="text-gray-600 mb-4">Please log in to access the customer portal.</p><Link href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg">Log In</Link></div></div>;

  if (!overview?.registered) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Registration</h1>
          <p className="text-gray-600 mb-8">Activate your customer portal to view shipments, quotes, and invoices.</p>
          <form onSubmit={doRegister} className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label htmlFor="portal-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label><input id="portal-name" name="name" required value={register.name} onChange={(e) => setRegister({ ...register, name: e.target.value })} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
              <div><label htmlFor="portal-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label><input id="portal-email" name="email" type="email" required value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label htmlFor="portal-company" className="block text-sm font-medium text-gray-700 mb-1">Company</label><input id="portal-company" name="company" value={register.company} onChange={(e) => setRegister({ ...register, company: e.target.value })} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
              <div><label htmlFor="portal-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input id="portal-phone" name="phone" type="tel" value={register.phone} onChange={(e) => setRegister({ ...register, phone: e.target.value })} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
            </div>
            <div><label htmlFor="portal-address" className="block text-sm font-medium text-gray-700 mb-1">Address</label><textarea id="portal-address" name="address" rows={3} value={register.address} onChange={(e) => setRegister({ ...register, address: e.target.value })} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" /></div>
            <button type="submit" disabled={registering} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-60">{registering ? "Activating..." : "Activate Portal"}</button>
          </form>
        </div>
      </div>
    );
  }

  const customer = overview.customer;
  const shipments = overview.shipments || [];
  const quotes = overview.quotes || [];
  const invoices = overview.invoices || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-900"><Truck className="h-6 w-6 text-blue-600" />Premier Logistics</Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/portal" className="text-blue-600 font-medium">Customer Portal</Link>
            <Link href="/track" className="hover:text-gray-900">Track</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Staff Login</Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome, {customer.name}</h1>
            <p className="text-gray-600">{customer.email} · {customer.company || "Individual Account"}</p>
          </div>
          <Link href="/shipments/new" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 inline-flex items-center gap-2"><Package className="h-4 w-4" />Book Shipment</Link>
        </div>
        <div className="flex gap-2 overflow-x-auto mb-6">
          {(["overview", "shipments", "quotes", "invoices"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-lg font-medium capitalize ${tab === t ? "bg-blue-600 text-white" : "bg-white text-gray-700 border hover:bg-gray-50"}`}>{t}</button>
          ))}
        </div>
        {tab === "overview" && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm"><div className="flex items-center gap-3 mb-2"><Package className="h-6 w-6 text-blue-600" /><span className="text-gray-600 font-medium">Shipments</span></div><p className="text-3xl font-bold text-gray-900">{shipments.length}</p></div>
            <div className="bg-white rounded-2xl p-6 shadow-sm"><div className="flex items-center gap-3 mb-2"><FileText className="h-6 w-6 text-blue-600" /><span className="text-gray-600 font-medium">Quotes</span></div><p className="text-3xl font-bold text-gray-900">{quotes.length}</p></div>
            <div className="bg-white rounded-2xl p-6 shadow-sm"><div className="flex items-center gap-3 mb-2"><CreditCard className="h-6 w-6 text-blue-600" /><span className="text-gray-600 font-medium">Invoices</span></div><p className="text-3xl font-bold text-gray-900">{invoices.length}</p></div>
          </div>
        )}
        {tab === "shipments" && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="text-left p-4 font-medium text-gray-700">Tracking</th><th className="text-left p-4 font-medium text-gray-700">Origin</th><th className="text-left p-4 font-medium text-gray-700">Destination</th><th className="text-left p-4 font-medium text-gray-700">Status</th></tr></thead>
            <tbody>{shipments.length === 0 ? <tr><td colSpan={4} className="p-8 text-center text-gray-500">No shipments yet.</td></tr> : shipments.map((s: any) => <tr key={s.id} className="border-t"><td className="p-4 font-medium text-blue-600">{s.trackingNumber}</td><td className="p-4">{s.origin}</td><td className="p-4">{s.destination}</td><td className="p-4"><span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold capitalize">{s.status}</span></td></tr>)}</tbody>
            </table>
          </div>
        )}
        {tab === "quotes" && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="text-left p-4 font-medium text-gray-700">Quote #</th><th className="text-left p-4 font-medium text-gray-700">Route</th><th className="text-left p-4 font-medium text-gray-700">Service</th><th className="text-left p-4 font-medium text-gray-700">Status</th></tr></thead>
            <tbody>{quotes.length === 0 ? <tr><td colSpan={4} className="p-8 text-center text-gray-500">No quotes yet.</td></tr> : quotes.map((q: any) => <tr key={q.id} className="border-t"><td className="p-4 font-medium">{q.quoteNumber}</td><td className="p-4">{q.origin} → {q.destination}</td><td className="p-4 capitalize">{q.serviceType}</td><td className="p-4"><span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold capitalize">{q.status}</span></td></tr>)}</tbody>
            </table>
          </div>
        )}
        {tab === "invoices" && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="text-left p-4 font-medium text-gray-700">Invoice #</th><th className="text-left p-4 font-medium text-gray-700">Amount</th><th className="text-left p-4 font-medium text-gray-700">Status</th><th className="text-left p-4 font-medium text-gray-700">Due</th></tr></thead>
            <tbody>{invoices.length === 0 ? <tr><td colSpan={4} className="p-8 text-center text-gray-500">No invoices yet.</td></tr> : invoices.map((i: any) => <tr key={i.id} className="border-t"><td className="p-4 font-medium">{i.invoiceNumber}</td><td className="p-4">${i.amount.toFixed(2)}</td><td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${i.status === "paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{i.status}</span></td><td className="p-4">{i.dueDate || "—"}</td></tr>)}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
