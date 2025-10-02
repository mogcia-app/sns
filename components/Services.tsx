const Services = () => {
  const services = [
    {
      title: "SNSアカウント運用",
      description: "Instagram、Twitter、Facebook、TikTokなど、各プラットフォームに最適化した投稿戦略を立案・実行します。",
      icon: "📱",
      features: ["投稿スケジュール管理", "ハッシュタグ最適化", "ストーリーズ活用", "リール・ショート動画制作"]
    },
    {
      title: "コンテンツ制作",
      description: "ブランドに合った高品質なコンテンツを制作。写真、動画、グラフィックデザインまで対応します。",
      icon: "🎨",
      features: ["写真・動画撮影", "グラフィックデザイン", "キャプション作成", "ブランドガイドライン準拠"]
    },
    {
      title: "AIを活用したSNS運用",
      description: "最新のAI技術を活用して、効率的で効果的なSNS運用を実現します。",
      icon: "🤖",
      features: ["AI投稿最適化", "自動ハッシュタグ生成", "コンテンツ分析", "予測分析"]
    },
    {
      title: "広告運用",
      description: "SNS広告を効果的に運用し、リーチとコンバージョンを最大化します。",
      icon: "📊",
      features: ["広告戦略立案", "ターゲティング設定", "クリエイティブ制作", "ROI最適化"]
    },
    {
      title: "データ分析・レポート",
      description: "詳細なデータ分析により、SNS運用の効果を可視化し、改善提案を行います。",
      icon: "📈",
      features: ["KPI設定", "月次レポート", "競合分析", "改善提案"]
    },
    {
      title: "コンサルティング",
      description: "SNS戦略の立案から実行まで、包括的なコンサルティングサービスを提供します。",
      icon: "💡",
      features: ["戦略立案", "ブランド分析", "競合調査", "実行支援"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">サービス一覧</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              お客様のビジネス目標に合わせて、最適なSNS運用サービスをご提供します
            </p>
          </div>

          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
