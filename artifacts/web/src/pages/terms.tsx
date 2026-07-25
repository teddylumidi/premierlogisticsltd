import { Link } from "wouter";
import { Truck } from "lucide-react";

export default function Terms() {
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
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Staff Login</Link>
          </div>
        </div>
      </nav>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Effective Date: January 1, 2024</p>
          <div className="prose prose-blue max-w-none text-gray-700">
            <p>Welcome to Premier Logistics Ltd. These Terms of Service ("Terms") govern your access to and use of our website, customer portal, and logistics services ("Services"). By using our Services, you agree to these Terms.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By creating an account, booking a shipment, or otherwise using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you may not use the Services.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Services</h2>
            <p>We provide domestic and international freight forwarding, transportation, warehousing, customs brokerage, and related logistics services. Service availability may vary by location and commodity type.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Account Registration</h2>
            <p>You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Shipments and Prohibited Items</h2>
            <p>You may not ship illegal, dangerous, or prohibited items. You must accurately declare shipment contents, values, and classifications. We reserve the right to refuse or dispose of non-compliant shipments.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Payments and Fees</h2>
            <p>Fees are based on quoted rates, weight, dimensions, destination, and additional services. Payment is due according to the agreed terms. Invoices not paid within the credit period may incur late fees and service suspension.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Liability and Insurance</h2>
            <p>Our liability is limited to the terms agreed in your contract or the applicable convention governing international carriage (e.g., CMR, Montreal Convention, Hague-Visby). We recommend purchasing additional insurance for high-value goods.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Service Limitations and Delays</h2>
            <p>While we strive to meet all delivery commitments, we are not liable for delays caused by customs, weather, strikes, pandemic restrictions, or events beyond our reasonable control.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Termination</h2>
            <p>Either party may terminate the service relationship with reasonable notice. We may suspend access to users who violate these Terms or engage in fraudulent activity.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Governing Law</h2>
            <p>These Terms are governed by the laws of England and Wales, without regard to conflict of law principles. Disputes shall be resolved in the courts of London.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to Terms</h2>
            <p>We may update these Terms at any time. Continued use of the Services after changes constitutes acceptance of the revised Terms.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact</h2>
            <p>For questions about these Terms, please contact us at legal@premierlogisticsltds.com or through our Contact page.</p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p>&copy; {new Date().getFullYear()} Premier Logistics Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
