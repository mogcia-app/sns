const Achievements = () => {
  const achievements = [
    {
      category: '最新AI技術',
      value: '100%',
      description: '自動化対応',
      icon: '🤖',
      color: 'from-pink-500 to-rose-500'
    },
    {
      category: '対応プラットフォーム',
      value: '6+',
      description: 'SNS種類',
      icon: '📱',
      color: 'from-rose-500 to-pink-500'
    },
    {
      category: 'カスタマイズ対応',
      value: '100%',
      description: 'オーダーメイド',
      icon: '🎯',
      color: 'from-pink-400 to-rose-400'
    },
    {
      category: 'サポート体制',
      value: '24時間',
      description: '365日対応',
      icon: '🛡️',
      color: 'from-rose-400 to-pink-400'
    },
    {
      category: '無料相談',
      value: '完全無料',
      description: '初回面談',
      icon: '💰',
      color: 'from-pink-600 to-rose-600'
    },
    {
      category: '柔軟な契約',
      value: '3ヶ月',
      description: '短期契約可',
      icon: '📋',
      color: 'from-rose-600 to-pink-600'
    }
  ]

  const possibilities = [
    {
      title: 'ブランド認知度の向上',
      description: 'SNSを通じて多くの人にあなたのビジネスを知ってもらえます',
      benefits: [
        '新規顧客との接点を増やす',
        'ブランドイメージの向上',
        '口コミ効果の拡大',
        '競合との差別化'
      ],
      icon: '🎯'
    },
    {
      title: '顧客とのつながり強化',
      description: 'お客様との直接的なコミュニケーションで関係性を深められます',
      benefits: [
        'リアルタイムな情報発信',
        'お客様の声を直接聞ける',
        'ファンコミュニティの形成',
        'リピーターの増加'
      ],
      icon: '💬'
    },
    {
      title: 'ビジネスの成長促進',
      description: 'SNS経由での売上向上とビジネス機会の創出が可能になります',
      benefits: [
        'オンライン販売の強化',
        '新規顧客の獲得',
        'マーケティングコストの削減',
        'ビジネスチャンスの拡大'
      ],
      icon: '📈'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              MOGCIAの特徴
            </h2>
            <p className="text-xl text-gray-600">
              最新技術とプロのチームで、あなたのSNS運用をサポート
            </p>
          </div>

          {/* 実績数値 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl text-white">{achievement.icon}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                <div className="text-sm text-gray-600 mb-1">{achievement.description}</div>
                <div className="text-xs text-gray-500">{achievement.category}</div>
              </div>
            ))}
          </div>

          {/* SNS運用で実現できること */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              SNS運用で実現できること
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {possibilities.map((possibility, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{possibility.icon}</div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{possibility.title}</h4>
                    <p className="text-gray-600 text-sm">{possibility.description}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {possibility.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></span>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                あなたのビジネスを次のレベルへ
              </h3>
              <p className="text-pink-100 mb-6">
                プロのチームとAI技術で、お客様のビジネス成長をサポートします
              </p>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-pink-500 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                無料相談を申し込む
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
