import { Link } from "wouter";
import { Truck, Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    { title: "2025 Logistics Outlook: Trends Shaping Global Supply Chains", date: "Jan 15, 2025", category: "Industry News", excerpt: "From AI-powered route planning to sustainable aviation fuel, we explore the forces redefining freight in 2025 and beyond." },
    { title: "How to Prepare Your E-commerce Business for Peak Season", date: "Nov 28, 2024", category: "How-To", excerpt: "A practical checklist for warehouse planning, carrier allocation, and customer communication during high-volume periods." },
    { title: "Premier Logistics Opens New East African Hub in Nairobi", date: "Oct 10, 2024", category: "Company Updates", excerpt: "The new facility expands our regional capacity and reduces transit times between Kenya, Uganda, and Tanzania." },
    { title: "Cold Chain Compliance: A Guide for Pharmaceutical Shippers", date: "Sep 05, 2024", category: "How-To", excerpt: "Temperature mapping, qualification, and documentation essentials for safe pharmaceutical transport." },
    { title: "Why Real-Time Visibility Matters in Modern Freight", date: "Aug 12, 2024", category: "Industry News", excerpt: "Customers expect transparency. Learn how event-based tracking and predictive ETAs improve trust and reduce support costs." },
    { title: "Premier Logistics Receives ISO 9001:2015 Recertification", date: "Jul 20, 2024", category: "Company Updates", excerpt: "Our quality management system has been independently audited and recertified for another three years." },
  ];

  const badgeColor = (c: string) => c === "Industry News" ? "bg-blue-100 text-blue-700" : c === "How-To" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700";

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
            <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Staff Login</Link>
          </div>
        </div>
      </nav>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News & Insights</h1>
          <p className="text-xl text-blue-100">Industry trends, company updates, and practical shipping guidance from our logistics experts.</p>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <Truck className="h-16 w-16 text-blue-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor(p.category)}`}>{p.category}</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{p.excerpt}</p>
                <Link href="/blog" className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">Read More <ArrowRight className="h-4 w-4" /></Link>
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
