import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function SNSManagementPage() {
  const features = [
    {
      title: '投稿スケジュール管理',
      description: '最適なタイミングで投稿をスケジュールし、継続的な発信をサポートします。',
      details: [
        '各プラットフォームの最適な投稿時間を分析',
        '1週間〜1ヶ月先までの投稿スケジュールを管理',
        '季節やイベントに合わせた投稿カレンダー作成',
        '投稿前の内容チェックと承認フロー'
      ]
    },
    {
      title: 'ハッシュタグ最適化',
      description: '効果的なハッシュタグ戦略でリーチとエンゲージメントを向上させます。',
      details: [
        '業界・競合分析に基づくハッシュタグ選定',
        'トレンドハッシュタグの活用',
        'ブランド固有のハッシュタグ作成',
        'ハッシュタグの効果測定と改善'
      ]
    },
    {
      title: 'ストーリーズ活用',
      description: 'ストーリーズ機能を最大限活用して、ファンとの距離を縮めます。',
      details: [
        '日常的な投稿でブランドの親しみやすさを演出',
        '限定コンテンツでフォロワーの関心を維持',
        'インタラクティブな要素（投票、質問）の活用',
        'ハイライト機能で重要な情報を整理'
      ]
    },
    {
      title: 'リール・ショート動画制作',
      description: 'トレンドに合わせた短編動画コンテンツを制作・投稿します。',
      details: [
        '最新のトレンドをキャッチした動画企画',
        'プロ品質の動画編集',
        '効果的な音楽・効果音の選定',
        'エンゲージメントを高める動画構成'
      ]
    }
  ]

  const platforms = [
    { name: 'Instagram', icon: '📷', description: 'ビジュアル重視の投稿でブランドイメージを向上' },
    { name: 'Twitter', icon: '🐦', description: 'リアルタイムな情報発信でエンゲージメントを促進' },
    { name: 'Facebook', icon: '📘', description: '幅広い年齢層へのリーチとコミュニティ形成' },
    { name: 'TikTok', icon: '🎵', description: '若年層への訴求とバイラル効果の創出' },
    { name: 'YouTube', icon: '📺', description: '長編動画で詳細な情報発信と教育コンテンツ' },
    { name: 'LinkedIn', icon: '💼', description: 'BtoBマーケティングとプロフェッショナルなネットワーキング' }
  ]

  const process = [
    { step: 1, title: '現状分析', description: '現在のSNSアカウントの状況を詳細に分析し、改善点を特定します。' },
    { step: 2, title: '戦略立案', description: 'ビジネス目標に基づいて、最適なSNS戦略を立案します。' },
    { step: 3, title: 'コンテンツ制作', description: 'ブランドに合った高品質なコンテンツを制作します。' },
    { step: 4, title: '投稿・運用', description: 'スケジュールに従って投稿し、リアルタイムで運用します。' },
    { step: 5, title: '分析・改善', description: 'データを分析し、継続的に改善を重ねます。' }
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
                <div className="text-6xl mb-6">📱</div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  SNSアカウント運用
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Instagram、Twitter、Facebook、TikTokなど、各プラットフォームに最適化した投稿戦略を立案・実行します。
                </p>
                <div className="text-3xl font-bold text-pink-500 mb-4">月額 50,000円〜</div>
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
                サービス内容
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

        {/* 対応プラットフォーム */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                対応プラットフォーム
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platforms.map((platform, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h3>
                    <p className="text-gray-600 text-sm">{platform.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 運用フロー */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                運用フロー
              </h2>
              <div className="space-y-8">
                {process.map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
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
                まずは無料相談から始めましょう
              </h2>
              <p className="text-xl text-pink-100 mb-8">
                お客様のビジネスに最適なSNS運用プランをご提案いたします
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
