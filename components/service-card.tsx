"use client"

interface ServiceCardProps {
  service: {
    title: string
    icon: string
    items: string[]
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
      <div className="bg-gradient-to-r from-[#1a3a52] to-[#2a5073] h-28 flex items-center justify-center group-hover:from-[#0f2438] group-hover:to-[#1a3a52] transition">
        <span className="text-5xl group-hover:scale-110 transition duration-300">{service.icon}</span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1a3a52] mb-4 group-hover:text-[#d4a574] transition">{service.title}</h3>
        <ul className="space-y-3 mb-6">
          {service.items.map((item, idx) => (
            <li key={idx} className="text-gray-700 flex items-start gap-2">
              <span className="text-[#d4a574] font-bold text-lg leading-none mt-0.5 flex-shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button className="bg-[#d4a574] text-[#1a3a52] px-4 py-2 rounded-lg font-semibold hover:bg-[#c9945f] transition w-full group-hover:shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  )
}
