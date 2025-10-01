const About = () => {
  const stats = [
    { number: "500+", label: "成功事例" },
    { number: "98%", label: "顧客満足度" },
    { number: "3年", label: "平均継続期間" },
    { number: "24時間", label: "サポート体制" }
  ]

  const team = [
    {
      name: "田中 美咲",
      role: "SNS戦略ディレクター",
      image: "👩‍💼",
      description: "大手広告代理店で10年の経験を持つSNSマーケティングのプロ"
    },
    {
      name: "佐藤 健太",
      role: "コンテンツクリエイター",
      image: "👨‍🎨",
      description: "グラフィックデザインと動画制作の両方を手がけるマルチクリエイター"
    },
    {
      name: "山田 花子",
      role: "データアナリスト",
      image: "👩‍💻",
      description: "データサイエンスの専門知識でSNS運用の効果を最大化"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">会社概要</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              私たちは、SNSマーケティングのプロフェッショナル集団です
            </p>
          </div>

          {/* 実績 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* ミッション */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">私たちのミッション</h3>
                <p className="text-lg text-gray-600 mb-6">
                  デジタル時代において、SNSはビジネス成長の重要なツールです。
                  私たちは、お客様のビジネス目標を理解し、最適なSNS戦略を提供することで、
                  持続的な成長をサポートします。
                </p>
                <p className="text-lg text-gray-600">
                  データに基づいた戦略立案、クリエイティブなコンテンツ制作、
                  そして継続的な改善により、お客様の成功を実現します。
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl p-8">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">成長を加速</h4>
                <p className="text-gray-600">
                  プロのSNS運用で、あなたのビジネスを次のレベルへ
                </p>
              </div>
            </div>
          </div>

          {/* チーム */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">チーム紹介</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
