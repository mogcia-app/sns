const WhatIsSNSManagement = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SNS運用代行とは？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              プロのチームがあなたの代わりにSNSアカウントを運用し、ビジネス成長をサポートするサービスです
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* 基本概念 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">アカウント運用</h3>
              <p className="text-gray-600 text-center">
                Instagram、Twitter、Facebook、TikTokなど、各プラットフォームに最適化した投稿戦略を立案・実行します。
              </p>
            </div>

            {/* コンテンツ制作 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">コンテンツ制作</h3>
              <p className="text-gray-600 text-center">
                ブランドに合った高品質な写真、動画、グラフィックデザインを制作し、効果的な投稿を行います。
              </p>
            </div>

            {/* データ分析 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">データ分析</h3>
              <p className="text-gray-600 text-center">
                詳細なデータ分析により、SNS運用の効果を可視化し、継続的な改善提案を行います。
              </p>
            </div>
          </div>

          {/* メリットセクション */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              SNS運用代行のメリット
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">時間の節約</h4>
                    <p className="text-gray-600 text-sm">SNS運用に時間を取られることなく、本業に集中できます。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">専門知識の活用</h4>
                    <p className="text-gray-600 text-sm">SNS運用のプロが最新のトレンドと戦略を活用します。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">コスト削減</h4>
                    <p className="text-gray-600 text-sm">専任スタッフを雇うより、コスト効率が良くなります。</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">継続的な改善</h4>
                    <p className="text-gray-600 text-sm">データに基づいた継続的な改善で成果を最大化します。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">ブランド統一</h4>
                    <p className="text-gray-600 text-sm">一貫したブランドメッセージで信頼性を向上させます。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">リスク回避</h4>
                    <p className="text-gray-600 text-sm">炎上リスクを最小限に抑え、安全なSNS運用を実現します。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsSNSManagement
