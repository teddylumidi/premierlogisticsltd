import { Link } from "wouter";
import { Truck, Briefcase, MapPin, Clock, Heart, Award, Plane, Users } from "lucide-react";

export default function Careers() {
  const jobs = [
    { title: "Operations Manager", dept: "Operations", location: "London, UK", type: "Full-time" },
    { title: "Senior Logistics Coordinator", dept: "Operations", location: "Lagos, Nigeria", type: "Full-time" },
    { title: "Full-Stack Software Engineer", dept: "Technology", location: "Remote", type: "Full-time" },
    { title: "Customer Support Specialist", dept: "Customer Experience", location: "Dubai, UAE", type: "Full-time" },
    { title: "Driver - Heavy Goods Vehicle", dept: "Fleet", location: "New York, USA", type: "Full-time" },
    { title: "Customs Broker", dept: "Compliance", location: "Singapore", type: "Full-time" },
    { title: "Sales Executive - Enterprise", dept: "Sales", location: "London, UK", type: "Full-time" },
    { title: "Warehouse Supervisor", dept: "Fulfillment", location: "Johannesburg, SA", type: "Full-time" },
  ];

  const benefits = [
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical, dental, and mental health coverage for you and your family." },
    { icon: Award, title: "Performance Bonus", desc: "Annual bonuses tied to individual and company performance." },
    { icon: Plane, title: "Travel Opportunities", desc: "International assignments and cross-border team rotations." },
    { icon: Users, title: "Team Culture", desc: "Inclusive, collaborative teams with regular training and team events." },
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
            <Link href="/careers" className="text-blue-600 font-medium">Careers</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Staff Login</Link>
          </div>
        </div>
      </nav>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at Premier Logistics</h1>
          <p className="text-xl text-blue-100">Join a global team that moves the world forward — one shipment at a time.</p>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
        <div className="space-y-4 mb-20">
          {jobs.map((j) => (
            <div key={j.title} className="border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{j.title}</h3>
                <p className="text-gray-500 text-sm mt-1 flex flex-wrap gap-4">
                  <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{j.dept}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{j.location}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{j.type}</span>
                </p>
              </div>
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 text-center">Apply Now</Link>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Work With Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="bg-gray-50 rounded-xl p-6">
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <b.icon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.desc}</p>
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
