const ConsultationFlow = () => {
  const steps = [
    {
      step: 1,
      title: 'お問い合わせ',
      description: 'お問い合わせフォームまたはお電話でご連絡ください',
      details: [
        'お客様のビジネス概要をお聞かせください',
        '現在のSNS運用状況を教えてください',
        'ご希望のサービス内容をお選びください',
        'お急ぎの場合はお電話でも承ります'
      ],
      icon: '📝',
      color: 'from-pink-500 to-rose-500'
    },
    {
      step: 2,
      title: '初回面談（無料）',
      description: 'オンラインまたは対面で30分程度の無料相談を行います',
      details: [
        '現在のSNS運用の課題を詳しくヒアリング',
        'ビジネス目標とSNS目標のすり合わせ',
        '競合分析と市場環境の確認',
        '最適なサービスプランのご提案'
      ],
      icon: '💬',
      color: 'from-rose-500 to-pink-500'
    },
    {
      step: 3,
      title: '提案書作成',
      description: 'お客様に最適化された詳細な提案書を作成いたします',
      details: [
        'カスタマイズされたサービスプラン',
        '具体的な運用戦略とスケジュール',
        '投資対効果の試算',
        '契約条件と料金の詳細'
      ],
      icon: '📋',
      color: 'from-pink-400 to-rose-400'
    },
    {
      step: 4,
      title: '契約・開始',
      description: 'ご契約後、すぐにSNS運用を開始いたします',
      details: [
        '契約書の締結と初回費用のお支払い',
        'アカウントの権限設定と移行',
        '運用チームの編成と役割分担',
        '初回ミーティングでの運用方針の確認'
      ],
      icon: '🤝',
      color: 'from-rose-400 to-pink-400'
    },
    {
      step: 5,
      title: '運用開始',
      description: 'プロのチームがお客様のSNS運用を代行いたします',
      details: [
        '定期的なコンテンツ制作と投稿',
        'エンゲージメントの管理と返信',
        'データ分析とレポート作成',
        '継続的な改善と最適化'
      ],
      icon: '🚀',
      color: 'from-pink-600 to-rose-600'
    }
  ]

  const benefits = [
    {
      title: '完全無料',
      description: '初回相談は完全無料です',
      icon: '💰'
    },
    {
      title: '24時間以内',
      description: 'お問い合わせから24時間以内にご連絡',
      icon: '⚡'
    },
    {
      title: '専門家対応',
      description: 'SNS運用の専門家が直接対応',
      icon: '👨‍💼'
    },
    {
      title: 'ノーリスク',
      description: '契約前の無理な勧誘は一切ありません',
      icon: '🛡️'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              無料相談の流れ
            </h2>
            <p className="text-xl text-gray-600">
              お問い合わせから契約まで、5つのステップでスムーズに進みます
            </p>
          </div>

          {/* ステップ */}
          <div className="space-y-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
                {/* ステップ番号とアイコン */}
                <div className="flex-shrink-0 flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                    {step.step}
                  </div>
                  <div className="text-4xl">{step.icon}</div>
                </div>

                {/* コンテンツ */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* メリット */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              無料相談のメリット
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                まずは無料相談から始めませんか？
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                お客様のビジネスに最適なSNS運用プランをご提案いたします
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg"
                >
                  無料相談を申し込む
                </a>
                <a
                  href="tel:03-1234-5678"
                  className="px-8 py-4 border-2 border-pink-500 text-pink-500 text-lg font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all"
                >
                  お電話で相談する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationFlow
