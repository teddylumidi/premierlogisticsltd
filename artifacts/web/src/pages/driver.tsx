import { Link } from "wouter";
import { Truck, Package, MapPin, CheckCircle, ArrowRight, Loader2, Navigation } from "lucide-react";
import { useState, useEffect } from "react";

export default function Driver() {
  const [user, setUser] = useState<any>(null);
  const [shipments, setShipments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [forbidden, setForbidden] = useState(false);
  const [updating, setUpdating] = useState<number | null>(null);

  const apiBase = import.meta.env.VITE_API_URL || "";
  const api = (path: string) => `${apiBase}/api${path}`;
  const req = (path: string, opts?: RequestInit) => fetch(api(path), { credentials: "include", ...opts });

  useEffect(() => {
    req("/me").then((r) => { if (!r.ok) throw new Error("unauth"); return r.json(); }).then((u) => { setUser(u); if (u.role !== "driver" && u.role !== "staff" && u.role !== "admin") setForbidden(true); }).catch(() => setForbidden(true)).finally(() => setLoading(false));
  }, []);

  const load = () => req("/shipments").then((r) => r.json()).then(setShipments);
  useEffect(() => { if (!forbidden && user) load(); }, [user, forbidden]);

  const updateStatus = async (id: number, status: string) => {
    setUpdating(id);
    await req(`/shipments/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    await load();
    setUpdating(null);
  };

  const navLink = (origin: string, destination: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-blue-600" /></div>;
  if (forbidden) return <div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-gray-900 mb-2">Driver Access Only</h1><Link href="/dashboard" className="text-blue-600 font-medium">Go to Dashboard</Link></div></div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-900"><Truck className="h-6 w-6 text-blue-600" />Premier Logistics</Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/dashboard" className="hover:text-gray-900">Dashboard</Link>
            <Link href="/driver" className="text-blue-600 font-medium">Driver</Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Driver Dashboard</h1>
        <p className="text-gray-600 mb-6">Driver: {user?.firstName} {user?.lastName}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shipments.length === 0 ? <p className="col-span-full text-gray-500">No assigned deliveries.</p> : shipments.map((s) => (
            <div key={s.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-blue-600">{s.trackingNumber}</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold capitalize">{s.status}</span>
              </div>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gray-400 mt-0.5" /><div><p className="text-gray-500">From</p><p className="font-medium text-gray-900">{s.origin}</p></div></div>
                <div className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-gray-400 mt-0.5" /><div><p className="text-gray-500">To</p><p className="font-medium text-gray-900">{s.destination}</p></div></div>
                <div className="flex items-start gap-2"><Package className="h-4 w-4 text-gray-400 mt-0.5" /><div><p className="text-gray-500">Weight</p><p className="font-medium text-gray-900">{s.weight} kg</p></div></div>
              </div>
              <a href={navLink(s.origin, s.destination)} target="_blank" rel="noreferrer" className="w-full block text-center bg-blue-50 text-blue-600 py-2 rounded-lg font-medium mb-3 hover:bg-blue-100 flex items-center justify-center gap-2"><Navigation className="h-4 w-4" />Navigate</a>
              <div className="grid grid-cols-2 gap-2">
                {s.status !== "delivered" && [
                  { label: "Picked Up", value: "picked_up" },
                  { label: "In Transit", value: "in_transit" },
                  { label: "Out for Delivery", value: "out_for_delivery" },
                  { label: "Delivered", value: "delivered" },
                ].map((opt) => (
                  <button key={opt.value} disabled={updating === s.id} onClick={() => updateStatus(s.id, opt.value)} className={`px-2 py-2 rounded-lg text-xs font-semibold transition-colors ${s.status === opt.value ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                    {updating === s.id ? "..." : opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
