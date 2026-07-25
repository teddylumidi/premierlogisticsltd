import { Link } from "wouter";
import { Truck } from "lucide-react";

export default function Privacy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Effective Date: January 1, 2024</p>
          <div className="prose prose-blue max-w-none text-gray-700">
            <p>Premier Logistics Ltd ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website, customer portal, and logistics services.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p>We may collect personal information that you provide directly, such as your name, email address, phone number, company name, billing address, and shipment details. We also collect information automatically through cookies and similar technologies, including IP address, browser type, device information, and usage data.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use your information to provide and improve our logistics services, process shipments, manage accounts, communicate with you, comply with legal obligations, and enhance the security and performance of our platforms.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cookies and Tracking</h2>
            <p>We use cookies to maintain your session, remember your preferences, analyse site usage, and deliver relevant marketing. You can manage cookie preferences through your browser settings.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Sharing with Third Parties</h2>
            <p>We may share your information with trusted partners such as carriers, customs brokers, and payment processors, as well as regulators and law enforcement when required by law. We do not sell personal information to third parties.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p>We implement technical and organisational measures to protect your data, including encryption, access controls, and regular security assessments. However, no system is completely secure, and we cannot guarantee absolute security.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal information. Contact us to exercise these rights.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
            <p>We retain personal information for as long as necessary to fulfil the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The effective date will be revised accordingly, and material changes will be communicated through our website or by email.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us at support@premierlogisticsltds.com or through our Contact page.</p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p>&copy; {new Date().getFullYear()} Premier Logistics Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
