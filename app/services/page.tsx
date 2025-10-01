import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceCard from '../../components/ServiceCard'

export default function ServicesPage() {
  const services = [
    {
      id: 'sns-management',
      title: 'SNSアカウント運用',
      description: 'Instagram、Twitter、Facebook、TikTokなど、各プラットフォームに最適化した投稿戦略を立案・実行します。',
      icon: '📱',
      features: ['投稿スケジュール管理', 'ハッシュタグ最適化', 'ストーリーズ活用', 'リール・ショート動画制作'],
      price: '月額 50,000円〜',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'content-creation',
      title: 'コンテンツ制作',
      description: 'ブランドに合った高品質なコンテンツを制作。写真、動画、グラフィックデザインまで対応します。',
      icon: '🎨',
      features: ['写真・動画撮影', 'グラフィックデザイン', 'キャプション作成', 'ブランドガイドライン準拠'],
      price: '1件 10,000円〜',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-sns-management',
      title: 'AIを活用したSNS運用',
      description: '最新のAI技術を活用して、効率的で効果的なSNS運用を実現します。',
      icon: '🤖',
      features: ['AI投稿最適化', '自動ハッシュタグ生成', 'コンテンツ分析', '予測分析'],
      price: '月額 80,000円〜',
      color: 'from-rose-500 to-pink-500'
    },
    {
      id: 'advertising',
      title: '広告運用',
      description: 'SNS広告を効果的に運用し、リーチとコンバージョンを最大化します。',
      icon: '📊',
      features: ['広告戦略立案', 'ターゲティング設定', 'クリエイティブ制作', 'ROI最適化'],
      price: '月額 30,000円〜',
      color: 'from-pink-400 to-rose-400'
    },
    {
      id: 'data-analysis',
      title: 'データ分析・レポート',
      description: '詳細なデータ分析により、SNS運用の効果を可視化し、改善提案を行います。',
      icon: '📈',
      features: ['KPI設定', '月次レポート', '競合分析', '改善提案'],
      price: '月額 20,000円〜',
      color: 'from-rose-400 to-pink-400'
    },
    {
      id: 'consulting',
      title: 'コンサルティング',
      description: 'SNS戦略の立案から実行まで、包括的なコンサルティングサービスを提供します。',
      icon: '💡',
      features: ['戦略立案', 'ブランド分析', '競合調査', '実行支援'],
      price: '1時間 15,000円〜',
      color: 'from-pink-600 to-rose-600'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ヒーローセクション */}
        <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                サービス一覧
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                お客様のビジネス目標に合わせて、最適なSNS運用サービスをご提供します
              </p>
            </div>
          </div>
        </section>

        {/* サービス一覧 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                まずは無料相談から始めましょう
              </h2>
              <p className="text-xl text-pink-100 mb-8">
                お客様のビジネスに最適なサービスプランをご提案いたします
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-pink-500 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  無料相談を申し込む
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-pink-500 transition-colors"
                >
                  会社概要を見る
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
