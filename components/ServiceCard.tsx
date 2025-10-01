import Link from 'next/link'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price: string
  color: string
}

interface ServiceCardProps {
  service: Service
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* ヘッダー */}
      <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
        <div className="text-4xl mb-3">{service.icon}</div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-pink-100 text-sm">{service.description}</p>
      </div>

      {/* コンテンツ */}
      <div className="p-6">
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">主なサービス内容</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* 価格 */}
        <div className="mb-6">
          <div className="text-2xl font-bold text-pink-500">{service.price}</div>
          <p className="text-sm text-gray-500">※詳細はお問い合わせください</p>
        </div>

        {/* ボタン */}
        <div className="space-y-3">
          <Link
            href={`/services/${service.id}`}
            className="block w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-center font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all"
          >
            詳細を見る
          </Link>
          <Link
            href="/contact"
            className="block w-full px-4 py-3 border-2 border-pink-500 text-pink-500 text-center font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
