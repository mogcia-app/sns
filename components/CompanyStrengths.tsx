const CompanyStrengths = () => {
  const strengths = [
    {
      title: 'AI技術の活用',
      description: '最新のAI技術を活用した効率的で効果的なSNS運用を実現',
      details: [
        '機械学習による最適な投稿タイミングの予測',
        '自然言語処理を活用したハッシュタグ自動生成',
        '画像認識技術によるコンテンツ品質分析',
        '予測分析による将来パフォーマンスの予測'
      ],
      icon: '🤖',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: '最新技術への対応',
      description: '常に最新のSNSトレンドとAI技術をキャッチアップ',
      details: [
        '最新のSNS機能をいち早く活用',
        'AI技術の最新動向を常に研究',
        '業界のベストプラクティスを学習',
        'お客様のニーズに合わせた技術導入'
      ],
      icon: '🚀',
      color: 'from-rose-500 to-pink-500'
    },
    {
      title: '専門チーム',
      description: '各分野の専門知識を持つメンバーが集結したチーム',
      details: [
        'SNS戦略の専門知識を持つディレクター',
        'マルチメディア対応のクリエイター',
        'データ分析に長けたアナリスト',
        'お客様サポートの専門スタッフ'
      ],
      icon: '👥',
      color: 'from-pink-400 to-rose-400'
    },
    {
      title: 'カスタマイズ対応',
      description: 'お客様のビジネスに完全に合わせたオーダーメイドサービス',
      details: [
        '業界特性に応じた戦略立案',
        'ブランドガイドラインに基づく一貫性の確保',
        'ターゲット層に最適化されたコンテンツ制作',
        '柔軟なプラン変更と追加サービス対応'
      ],
      icon: '🎯',
      color: 'from-rose-400 to-pink-400'
    },
    {
      title: 'データドリブン',
      description: '詳細なデータ分析に基づく継続的な改善と最適化',
      details: [
        'リアルタイムでのパフォーマンス監視',
        '月次レポートによる効果の可視化',
        '競合分析とベンチマーキング',
        'A/Bテストによる最適化の実証'
      ],
      icon: '📊',
      color: 'from-pink-600 to-rose-600'
    },
    {
      title: '24時間サポート',
      description: 'いつでも安心してご利用いただける充実のサポート体制',
      details: [
        '24時間365日の緊急対応',
        '専任担当者による定期的なコミュニケーション',
        'オンライン・対面での定期ミーティング',
        '迅速な問題解決と改善提案'
      ],
      icon: '🛡️',
      color: 'from-rose-600 to-pink-600'
    }
  ]

  const comparisons = [
    {
      aspect: 'AI技術の活用',
      mogcia: '最新AI技術をフル活用',
      others: '従来の手動運用中心',
      icon: '🤖'
    },
    {
      aspect: '技術力・革新性',
      mogcia: '最新トレンドをいち早く導入',
      others: '従来手法に固執',
      icon: '🚀'
    },
    {
      aspect: 'チーム体制',
      mogcia: '専門職種のプロチーム',
      others: '少人数での対応',
      icon: '👥'
    },
    {
      aspect: 'カスタマイズ',
      mogcia: '完全オーダーメイド',
      others: 'テンプレート中心',
      icon: '🎯'
    },
    {
      aspect: 'データ分析',
      mogcia: '詳細な分析とレポート',
      others: '基本的な数値のみ',
      icon: '📊'
    },
    {
      aspect: 'サポート体制',
      mogcia: '24時間365日対応',
      others: '営業時間内のみ',
      icon: '🛡️'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              会社の強み
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              MOGCIAが選ばれる理由と他社との差別化ポイント
            </p>
          </div>

          {/* 強み一覧 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-r ${strength.color} rounded-full flex items-center justify-center mb-4`}>
                  <span className="text-2xl text-white">{strength.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{strength.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{strength.description}</p>
                <ul className="space-y-2">
                  {strength.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-xs md:text-sm text-gray-600">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 他社比較 */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              他社との比較
            </h3>
            
            {/* デスクトップ用テーブル */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">比較項目</th>
                    <th className="text-center py-4 px-4 font-semibold text-pink-600">MOGCIA</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-600">一般的な業者</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{comparison.icon}</span>
                          <span className="font-medium text-gray-900">{comparison.aspect}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-pink-600 font-semibold">{comparison.mogcia}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-gray-600">{comparison.others}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* モバイル用カード表示 */}
            <div className="md:hidden space-y-4">
              {comparisons.map((comparison, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{comparison.icon}</span>
                    <h4 className="font-semibold text-gray-900 text-sm">{comparison.aspect}</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-xs text-gray-500 font-medium">MOGCIA</span>
                      <span className="text-xs text-pink-600 font-semibold text-right flex-1 ml-2">{comparison.mogcia}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs text-gray-500 font-medium">一般的な業者</span>
                      <span className="text-xs text-gray-600 text-right flex-1 ml-2">{comparison.others}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                MOGCIAの強みを実感してください
              </h3>
              <p className="text-lg md:text-xl text-pink-100 mb-6 md:mb-8">
                無料相談で、お客様のビジネスに最適なソリューションをご提案いたします
              </p>
              <a
                href="#contact"
                className="px-6 py-3 md:px-8 md:py-4 bg-white text-pink-500 text-base md:text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
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

export default CompanyStrengths
