import { Link } from "wouter";
import { Truck, LayoutDashboard, Users, Package, FileText, CreditCard, Briefcase, Shield, Loader2, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Admin() {
  const [user, setUser] = useState<any>(null);
  const [tab, setTab] = useState<"overview" | "shipments" | "customers" | "drivers" | "quotes" | "invoices" | "users">("overview");
  const [summary, setSummary] = useState<any>(null);
  const [customers, setCustomers] = useState<any[]>([]);
  const [drivers, setDrivers] = useState<any[]>([]);
  const [quotes, setQuotes] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<any[]>([]);
  const [shipments, setShipments] = useState<any[]>([]);
  const [adminUsers, setAdminUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [forbidden, setForbidden] = useState(false);
  const [message, setMessage] = useState("");

  const apiBase = import.meta.env.VITE_API_URL || "";
  const api = (path: string) => `${apiBase}/api${path}`;
  const req = (path: string, opts?: RequestInit) => fetch(api(path), { credentials: "include", ...opts });

  const refresh = async () => {
    if (tab === "overview") req("/reports/summary").then((r) => r.json()).then(setSummary);
    if (tab === "customers") req("/customers").then((r) => r.json()).then(setCustomers);
    if (tab === "drivers") req("/drivers").then((r) => r.json()).then(setDrivers);
    if (tab === "quotes") req("/quotes").then((r) => r.json()).then(setQuotes);
    if (tab === "invoices") req("/invoices").then((r) => r.json()).then(setInvoices);
    if (tab === "shipments") req("/shipments").then((r) => r.json()).then(setShipments);
    if (tab === "users") req("/admin/users").then((r) => r.json()).then(setAdminUsers);
  };

  useEffect(() => {
    req("/me").then((r) => { if (r.status === 401) throw new Error("unauth"); if (r.status === 403) throw new Error("forbidden"); return r.json(); }).then((u) => { setUser(u); if (!["admin", "staff"].includes(u.role)) setForbidden(true); }).catch((err) => { if (err.message === "forbidden" || err.message === "unauth") setForbidden(true); }).finally(() => setLoading(false));
  }, []);

  useEffect(() => { if (!forbidden && user) refresh(); }, [tab, user, forbidden]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-blue-600" /></div>;
  if (forbidden || !user || !["admin", "staff"].includes(user.role)) return <div className="min-h-screen flex items-center justify-center"><div className="text-center"><Shield className="h-12 w-12 text-red-500 mx-auto mb-4" /><h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1><p className="text-gray-600 mb-4">You need staff or admin permissions to view this page.</p><Link href="/dashboard" className="text-blue-600 font-medium">Go to Dashboard</Link></div></div>;

  const approveQuote = async (id: number, status: string) => {
    await req(`/quotes/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    refresh();
  };
  const updateInvoice = async (id: number, status: string) => {
    await req(`/invoices/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    refresh();
  };
  const changeRole = async (id: string, role: string) => {
    await req(`/admin/users/${id}/role`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ role }) });
    refresh();
  };

  const [newDriver, setNewDriver] = useState({ name: "", email: "", phone: "", licenseNumber: "" });
  const [newInvoice, setNewInvoice] = useState({ amount: "", customerId: "", shipmentId: "", dueDate: "" });
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", company: "", phone: "", address: "" });

  const addDriver = async (e: React.FormEvent) => {
    e.preventDefault();
    await req("/drivers", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newDriver) });
    setNewDriver({ name: "", email: "", phone: "", licenseNumber: "" });
    refresh();
  };
  const addCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    await req("/customers", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newCustomer) });
    setNewCustomer({ name: "", email: "", company: "", phone: "", address: "" });
    refresh();
  };
  const addInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    await req("/invoices", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ amount: Number(newInvoice.amount), customerId: newInvoice.customerId ? Number(newInvoice.customerId) : null, shipmentId: newInvoice.shipmentId ? Number(newInvoice.shipmentId) : null, dueDate: newInvoice.dueDate }) });
    setNewInvoice({ amount: "", customerId: "", shipmentId: "", dueDate: "" });
    refresh();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-900"><Truck className="h-6 w-6 text-blue-600" />Premier Logistics</Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/dashboard" className="hover:text-gray-900">Dashboard</Link>
            <Link href="/admin" className="text-blue-600 font-medium">Admin</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Staff</Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <span className="text-sm text-gray-600">Logged in as <span className="font-medium capitalize">{user.role}</span></span>
        </div>
        {message && <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg flex items-center gap-2"><CheckCircle className="h-4 w-4" />{message}</div>}
        <div className="flex gap-2 overflow-x-auto mb-6">
          {(["overview", "shipments", "customers", "drivers", "quotes", "invoices", "users"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-lg font-medium capitalize flex items-center gap-2 ${tab === t ? "bg-blue-600 text-white" : "bg-white text-gray-700 border hover:bg-gray-50"}`}>
              {t === "overview" && <LayoutDashboard className="h-4 w-4" />}
              {t === "customers" && <Users className="h-4 w-4" />}
              {t === "drivers" && <Briefcase className="h-4 w-4" />}
              {t === "quotes" && <FileText className="h-4 w-4" />}
              {t === "invoices" && <CreditCard className="h-4 w-4" />}
              {t === "shipments" && <Package className="h-4 w-4" />}
              {t === "users" && <Shield className="h-4 w-4" />}
              {t}
            </button>
          ))}
        </div>
        {tab === "overview" && summary && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm"><p className="text-gray-600 text-sm">Total Shipments</p><p className="text-3xl font-bold text-gray-900">{summary.shipments?.total ?? 0}</p></div>
            <div className="bg-white rounded-2xl p-6 shadow-sm"><p className="text-gray-600 text-sm">Billed Revenue</p><p className="text-3xl font-bold text-gray-900">${summary.invoices?.billed ?? 0}</p></div>
            <div className="bg-white rounded-2xl p-6 shadow-sm"><p className="text-gray-600 text-sm">Quotes Approved</p><p className="text-3xl font-bold text-gray-900">{summary.quotes?.approved ?? 0}</p></div>
          </div>
        )}
        {tab === "shipments" && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="text-left p-4 font-medium text-gray-700">Tracking</th><th className="text-left p-4 font-medium text-gray-700">Origin</th><th className="text-left p-4 font-medium text-gray-700">Destination</th><th className="text-left p-4 font-medium text-gray-700">Status</th></tr></thead>
            <tbody>{shipments.length === 0 ? <tr><td colSpan={4} className="p-8 text-center text-gray-500">No shipments.</td></tr> : shipments.map((s: any) => <tr key={s.id} className="border-t"><td className="p-4 font-medium text-blue-600">{s.trackingNumber}</td><td className="p-4">{s.origin}</td><td className="p-4">{s.destination}</td><td className="p-4"><span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold capitalize">{s.status}</span></td></tr>)}</tbody>
            </table>
          </div>
        )}
        {tab === "customers" && (
          <div className="space-y-6">
            <form onSubmit={addCustomer} className="bg-white rounded-2xl p-6 shadow-sm grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Name</label><input value={newCustomer.name} onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })} className="w-full px-3 py-2 border rounded-lg" required /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" value={newCustomer.email} onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })} className="w-full px-3 py-2 border rounded-lg" required /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Company</label><input value={newCustomer.company} onChange={(e) => setNewCustomer({ ...newCustomer, company: e.target.value })} className="w-full px-3 py-2 border rounded-lg" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input value={newCustomer.phone} onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })} className="w-full px-3 py-2 border rounded-lg" /></div>
              <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">Add Customer</button>
            </form>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="text-left p-4 font-medium text-gray-700">Name</th><th className="text-left p-4 font-medium text-gray-700">Email</th><th className="text-left p-4 font-medium text-gray-700">Company</th><th className="text-left p-4 font-medium text-gray-700">Status</th></tr></thead>
              <tbody>{customers.length === 0 ? <tr><td colSpan={4} className="p-8 text-center text-gray-500">No customers.</td></tr> : customers.map((c: any) => <tr key={c.id} className="border-t"><td className="p-4 font-medium">{c.name}</td><td className="p-4">{c.email}</td><td className="p-4">{c.company || "—"}</td><td className="p-4 capitalize">{c.status}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        )}
        {tab === "drivers" && (
          <div className="space-y-6">
            <form onSubmit={addDriver} className="bg-white rounded-2xl p-6 shadow-sm grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Name</label><input value={newDriver.name} onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })} className="w-full px-3 py-2 border rounded-lg" required /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" value={newDriver.email} onChange={(e) => setNewDriver({ ...newDriver, email: e.target.value })} className="w-full px-3 py-2 border rounded-lg" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input value={newDriver.phone} onChange={(e) => setNewDriver({ ...newDriver, phone: e.target.value })} className="w-full px-3 py-2 border rounded-lg" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">License</label><input value={newDriver.licenseNumber} onChange={(e) => setNewDriver({ ...newDriver, licenseNumber: e.target.value })} className="w-full px-3 py-2 border rounded-lg" /></div>
              <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">Add Driver</button>
            </form>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="text-left p-4 font-medium text-gray-700">Name</th><th className="text-left p-4 font-medium text-gray-700">Phone</th><th className="text-left p-4 font-medium text-gray-700">Status</th></tr></thead>
              <tbody>{drivers.length === 0 ? <tr><td colSpan={3} className="p-8 text-center text-gray-500">No drivers.</td></tr> : drivers.map((d: any) => <tr key={d.id} className="border-t"><td className="p-4 font-medium">{d.name}</td><td className="p-4">{d.phone || "—"}</td><td className="p-4 capitalize">{d.status}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        )}
        {tab === "quotes" && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="text-left p-4 font-medium text-gray-700">Quote #</th><th className="text-left p-4 font-medium text-gray-700">Route</th><th className="text-left p-4 font-medium text-gray-700">Service</th><th className="text-left p-4 font-medium text-gray-700">Status</th><th className="text-left p-4 font-medium text-gray-700">Actions</th></tr></thead>
            <tbody>{quotes.length === 0 ? <tr><td colSpan={5} className="p-8 text-center text-gray-500">No quotes.</td></tr> : quotes.map((q: any) => <tr key={q.id} className="border-t"><td className="p-4 font-medium">{q.quoteNumber}</td><td className="p-4">{q.origin} → {q.destination}</td><td className="p-4 capitalize">{q.serviceType}</td><td className="p-4 capitalize">{q.status}</td><td className="p-4"><div className="flex gap-2">{q.status === "requested" && <><button onClick={() => approveQuote(q.id, "approved")} className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700">Approve</button><button onClick={() => approveQuote(q.id, "rejected")} className="bg-red-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-red-700">Reject</button></>}</div></td></tr>)}</tbody>
            </table>
          </div>
        )}
        {tab === "invoices" && (
          <div className="space-y-6">
            <form onSubmit={addInvoice} className="bg-white rounded-2xl p-6 shadow-sm grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Amount</label><input type="number" step="0.01" value={newInvoice.amount} onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })} className="w-full px-3 py-2 border rounded-lg" required /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Customer ID</label><input type="number" value={newInvoice.customerId} onChange={(e) => setNewInvoice({ ...newInvoice, customerId: e.target.value })} className="w-full px-3 py-2 border rounded-lg" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Shipment ID</label><input type="number" value={newInvoice.shipmentId} onChange={(e) => setNewInvoice({ ...newInvoice, shipmentId: e.target.value })} className="w-full px-3 py-2 border rounded-lg" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label><input type="date" value={newInvoice.dueDate} onChange={(e) => setNewInvoice({ ...newInvoice, dueDate: e.target.value })} className="w-full px-3 py-2 border rounded-lg" /></div>
              <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">Create Invoice</button>
            </form>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="text-left p-4 font-medium text-gray-700">Invoice #</th><th className="text-left p-4 font-medium text-gray-700">Amount</th><th className="text-left p-4 font-medium text-gray-700">Status</th><th className="text-left p-4 font-medium text-gray-700">Actions</th></tr></thead>
              <tbody>{invoices.length === 0 ? <tr><td colSpan={4} className="p-8 text-center text-gray-500">No invoices.</td></tr> : invoices.map((i: any) => <tr key={i.id} className="border-t"><td className="p-4 font-medium">{i.invoiceNumber}</td><td className="p-4">${i.amount.toFixed(2)}</td><td className="p-4 capitalize">{i.status}</td><td className="p-4">{i.status !== "paid" && <button onClick={() => updateInvoice(i.id, "paid")} className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700">Mark Paid</button>}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        )}
        {tab === "users" && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="text-left p-4 font-medium text-gray-700">Email</th><th className="text-left p-4 font-medium text-gray-700">Name</th><th className="text-left p-4 font-medium text-gray-700">Role</th><th className="text-left p-4 font-medium text-gray-700">Change Role</th></tr></thead>
            <tbody>{adminUsers.length === 0 ? <tr><td colSpan={4} className="p-8 text-center text-gray-500">No users.</td></tr> : adminUsers.map((u: any) => <tr key={u.id} className="border-t"><td className="p-4">{u.email}</td><td className="p-4">{u.firstName} {u.lastName}</td><td className="p-4 capitalize">{u.role}</td><td className="p-4"><select value={u.role} onChange={(e) => changeRole(u.id, e.target.value)} className="border rounded-lg px-2 py-1"><option value="customer">Customer</option><option value="staff">Staff</option><option value="driver">Driver</option><option value="admin">Admin</option></select></td></tr>)}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
