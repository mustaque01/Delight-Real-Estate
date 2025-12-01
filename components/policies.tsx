"use client"

import { CheckCircle2 } from "lucide-react"

export default function Policies() {
  const policies = [
    {
      title: "Deal Protocol & Structure",
      icon: "⚖️",
      description: "Transparent and structured approach to all our real estate transactions and consultancy services.",
    },
    {
      title: "Consultancy Fee Structure",
      icon: "📋",
      description: "Clear and competitive pricing for our expert advisory services and market research.",
    },
    {
      title: "Commission Policy",
      icon: "💰",
      description: "Flexible commission models tailored to your business needs and deal requirements.",
    },
  ]

  return (
    <section id="policies" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#d4a574] text-[#1a3a52] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Transparency & Trust
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4 text-balance">Our Policies & Process</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transparent and structured approach to all our real estate transactions and consultancy services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{policy.icon}</div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{policy.title}</h3>
              <p className="text-gray-600 mb-6">{policy.description}</p>
              <div className="flex items-center gap-2 text-[#d4a574] font-semibold">
                <CheckCircle2 size={20} />
                Learn More
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
