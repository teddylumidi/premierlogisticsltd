import { Link } from "wouter";
import { Truck, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Faqs() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpen((o) => ({ ...o, [key]: !o[key] }));

  const sections = [
    {
      title: "Shipping Basics",
      items: [
        { q: "What types of shipments do you handle?", a: "We handle parcels, pallets, full truckloads, air freight, ocean freight, and specialised cargo including temperature-controlled and hazardous materials." },
        { q: "How do I create a shipment?", a: "Customers can book via the customer portal or through our support team. Provide origin, destination, weight, dimensions, and service type to receive an instant quote." },
        { q: "What packaging do you recommend?", a: "Use sturdy double-walled boxes, adequate cushioning, and secure strapping for pallets. We also offer packaging services on request." },
        { q: "Can you collect from my premises?", a: "Yes. We offer door-to-door and door-to-airport/sea-port collection options." },
        { q: "What is the maximum weight per parcel?", a: "Standard parcel limit is 70 kg. Heavier items move as freight and are billed accordingly." },
      ],
    },
    {
      title: "Tracking",
      items: [
        { q: "How do I track my shipment?", a: "Enter your tracking number on the Track Shipment page or in the customer portal to see real-time status and location." },
        { q: "How often is tracking updated?", a: "Tracking updates are posted at every major milestone, typically within minutes of pickup, transit, customs, and delivery." },
        { q: "What does 'In Transit' mean?", a: "It means your shipment is moving through our network between origin and destination." },
        { q: "Why is there no recent update?", a: "International shipments may be in transit between facilities or awaiting customs clearance. Updates appear as soon as the next scan occurs." },
        { q: "Can I share tracking with someone else?", a: "Yes. The tracking page is public and does not require login. You can share the URL or the tracking number." },
      ],
    },
    {
      title: "Customs & International",
      items: [
        { q: "Do you handle customs clearance?", a: "Yes. Our customs brokerage team prepares documentation, classifies goods, and handles duties on your behalf." },
        { q: "What documents do I need?", a: "Typically commercial invoice, packing list, and any required licences or certificates. We will guide you per destination." },
        { q: "How long does customs clearance take?", a: "Usually 1-3 business days, depending on the country and commodity complexity." },
        { q: "Are duties and taxes included in the quote?", a: "Unless otherwise agreed, duties and taxes are the receiver's responsibility. We can prepay these upon request." },
        { q: "Can you ship to any country?", a: "We serve 60+ countries. Restricted destinations and commodities are flagged during quote and booking." },
      ],
    },
    {
      title: "Billing & Payment",
      items: [
        { q: "How do I get a quote?", a: "Use the Request a Quote page or contact our sales team. Quotes are typically delivered within 2 hours." },
        { q: "What payment methods do you accept?", a: "We accept bank transfer, credit card, and corporate account billing. Online payment options are available in the customer portal." },
        { q: "How are invoices sent?", a: "Invoices are emailed to the billing contact and available in the customer portal." },
        { q: "Can I set up a credit account?", a: "Yes. Credit applications are reviewed within 2 business days and require company references." },
        { q: "What happens if an invoice is overdue?", a: "We send reminders at 7, 14, and 30 days. Shipments may be held until accounts are brought current." },
      ],
    },
    {
      title: "Account & Portal",
      items: [
        { q: "How do I create a customer account?", a: "Log in with Replit Auth, then complete the registration form in the Customer Portal to activate your account." },
        { q: "Can I save addresses and receivers?", a: "Yes. The portal supports saved addresses, frequent receivers, and contact lists for faster booking." },
        { q: "How do I view past shipments?", a: "Shipment history is available in the customer portal under the Shipments tab." },
        { q: "Can multiple staff use one account?", a: "For corporate accounts, we recommend dedicated user accounts per team member. Contact support to add users." },
        { q: "Who do I contact for technical issues?", a: "Email support@premierlogisticsltds.com or call the global hotline 24/7." },
      ],
    },
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
            <Link href="/faqs" className="text-blue-600 font-medium">FAQs</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Staff Login</Link>
          </div>
        </div>
      </nav>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">Find quick answers to common questions about shipping, tracking, billing, and your account.</p>
        </div>
      </section>
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        {sections.map((section) => (
          <div key={section.title} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
            <div className="space-y-3">
              {section.items.map((item) => {
                const key = section.title + item.q;
                return (
                  <div key={item.q} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button onClick={() => toggle(key)} className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50">
                      <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                      <ChevronDown className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${open[key] ? "rotate-180" : ""}`} />
                    </button>
                    {open[key] && <div className="px-5 pb-5 text-gray-600 leading-relaxed">{item.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8">Our support team is available 24/7 to help you.</p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">Contact Support</Link>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p>&copy; {new Date().getFullYear()} Premier Logistics Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
