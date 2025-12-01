"use client"

import ServiceCard from "./service-card"

const services = [
  {
    title: "Business Dealings",
    icon: "🤝",
    items: ["Energy Sector", "Manufacturing & Factory Sector", "Renewable Energy Sector", "Metal Sector"],
  },
  {
    title: "Land Parcel Transactions",
    icon: "🏢",
    items: ["Industrial Land", "Commercial Land", "Agricultural Land", "Solar-Feasible Land Parcel"],
  },
  {
    title: "Education & Hospitality",
    icon: "🏛️",
    items: ["Schools & Universities", "Hospitals & Healthcare", "Premium Hotels & Resorts"],
  },
  {
    title: "Commercial Space",
    icon: "🏭",
    items: ["Premium Offices", "Warehouse Space", "Retail Spaces"],
  },
  {
    title: "Residential Properties",
    icon: "🏠",
    items: ["Premium Flats & Apartments", "Luxury Resorts", "Luxury Bungalows"],
  },
  {
    title: "Consultancy & Research",
    icon: "📊",
    items: ["Market Research & Analysis", "Investment Strategy", "Due Diligence", "Deal Structuring"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#d4a574] text-[#1a3a52] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4 text-balance">
            Specialized Services in Real Estate
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide strategic real estate solutions across multiple sectors with a focus on high-value business
            transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
