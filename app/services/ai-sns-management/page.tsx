import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function AISNSManagementPage() {
  const features = [
    {
      title: 'AI投稿最適化',
      description: 'AIが最適な投稿タイミングと内容を分析し、エンゲージメントを最大化します。',
      details: [
        '過去の投稿データを分析した最適な投稿時間の予測',
        'ターゲットオーディエンスの行動パターン分析',
        'コンテンツの種類別パフォーマンス予測',
        'リアルタイムでの投稿タイミング調整'
      ]
    },
    {
      title: '自動ハッシュタグ生成',
      description: 'AIが投稿内容を分析し、効果的なハッシュタグを自動生成します。',
      details: [
        '投稿内容の自然言語処理によるキーワード抽出',
        'トレンドハッシュタグの自動検出と提案',
        '競合分析に基づくハッシュタグ戦略',
        'ハッシュタグの効果測定と継続的改善'
      ]
    },
    {
      title: 'コンテンツ分析',
      description: 'AIが投稿コンテンツの品質と効果を分析し、改善提案を行います。',
      details: [
        '画像・動画の品質と魅力度の自動評価',
        'テキストコンテンツの感情分析とトーン分析',
        'ブランド一貫性の自動チェック',
        'エンゲージメント予測とコンテンツ最適化提案'
      ]
    },
    {
      title: '予測分析',
      description: '過去のデータを基に、将来のパフォーマンスを予測し戦略を立案します。',
      details: [
        'フォロワー増加率の予測モデル',
        'エンゲージメント率の将来予測',
        '季節性やイベントの影響分析',
        '競合動向の予測と対策提案'
      ]
    }
  ]

  const aiTechnologies = [
    { name: '機械学習', icon: '🧠', description: '過去のデータから学習し、最適な戦略を自動生成' },
    { name: '自然言語処理', icon: '💬', description: 'テキストコンテンツを理解し、適切なハッシュタグを提案' },
    { name: '画像認識', icon: '👁️', description: '画像の内容を分析し、視覚的な魅力を評価' },
    { name: '予測分析', icon: '🔮', description: 'データから将来のトレンドやパフォーマンスを予測' },
    { name: '感情分析', icon: '😊', description: 'コンテンツの感情的なトーンを分析し、ブランドに適した内容を提案' },
    { name: '異常検知', icon: '⚠️', description: '通常と異なるパフォーマンスを検知し、早期に対策を提案' }
  ]

  const benefits = [
    { title: '効率化', description: '手動作業を大幅に削減し、運用時間を50%以上短縮', icon: '⚡' },
    { title: '精度向上', description: 'データに基づく判断で、従来比200%のエンゲージメント向上', icon: '🎯' },
    { title: 'コスト削減', description: '人的リソースの最適化により、運用コストを30%削減', icon: '💰' },
    { title: 'スケーラビリティ', description: '複数アカウントの同時管理が可能で、ビジネス成長に対応', icon: '📈' }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ヒーローセクション */}
        <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-6xl mb-6">🤖</div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  AIを活用したSNS運用
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  最新のAI技術を活用して、効率的で効果的なSNS運用を実現します。
                  データに基づく最適化で、従来の運用を大きく上回る成果を生み出します。
                </p>
                <div className="text-3xl font-bold text-pink-500 mb-4">月額 80,000円〜</div>
                <p className="text-gray-600">※詳細はお問い合わせください</p>
              </div>
            </div>
          </div>
        </section>

        {/* サービス詳細 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                AI機能詳細
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                          <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 活用技術 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                活用AI技術
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiTechnologies.map((tech, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{tech.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 導入効果 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                導入効果
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
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
                AIでSNS運用を革新しませんか？
              </h2>
              <p className="text-xl text-pink-100 mb-8">
                最新のAI技術で、お客様のSNS運用を次のレベルへ導きます。
                まずは無料相談で、AI活用の可能性をお聞かせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-pink-500 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  無料相談を申し込む
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-pink-500 transition-colors"
                >
                  他のサービスを見る
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
