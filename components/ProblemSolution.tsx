const ProblemSolution = () => {
  const problems = [
    {
      title: 'フォロワーが増えない',
      description: '投稿しても反応が少なく、フォロワー数が伸び悩んでいる',
      icon: '😔',
      solution: '戦略的なハッシュタグ活用とエンゲージメント向上施策でフォロワーを増加'
    },
    {
      title: '投稿ネタが思いつかない',
      description: '毎日何を投稿すればいいかわからず、継続的な発信ができない',
      icon: '🤔',
      solution: 'ブランドに合ったコンテンツ企画と投稿スケジュールで継続的な発信をサポート'
    },
    {
      title: 'SNS運用に時間がかかる',
      description: '投稿の準備や管理に時間がかかり、本業に集中できない',
      icon: '⏰',
      solution: 'プロの運用チームが代行することで、お客様は本業に集中可能'
    },
    {
      title: '効果がわからない',
      description: 'SNS運用の効果が数値で見えず、投資対効果が不明',
      icon: '📊',
      solution: '詳細なデータ分析とレポートで運用効果を可視化し、改善提案を実施'
    },
    {
      title: 'ブランドイメージが統一されない',
      description: '投稿のトーンやデザインがバラバラで、ブランドイメージが曖昧',
      icon: '🎨',
      solution: 'ブランドガイドラインに基づいた一貫性のあるコンテンツ制作'
    },
    {
      title: '競合に負けている',
      description: '同じ業界の他社のSNSが活発で、差をつけられてしまう',
      icon: '😰',
      solution: '競合分析と差別化戦略で、業界内での優位性を確立'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              こんなお悩みありませんか？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              多くの企業が抱えるSNS運用の課題を、プロのチームが解決いたします。
              お客様のビジネス成長を全力でサポートします。
            </p>
          </div>

          {/* 問題と解決策 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                {/* 問題 */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="text-3xl mr-3">{problem.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{problem.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
                </div>

                {/* 解決策 */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">{problem.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                お悩みはありませんか？
              </h3>
              <p className="text-gray-600 mb-6">
                まずは無料相談で、お客様のSNS運用の課題をお聞かせください。
                最適な解決策をご提案いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg"
                >
                  無料相談を申し込む
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-pink-500 text-pink-500 text-lg font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all"
                >
                  サービス詳細を見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
