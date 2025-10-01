const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* 会社情報 */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg"></div>
                <h3 className="text-2xl font-bold">SNS運営プロ</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                プロのSNS運用チームが、あなたのビジネスをSNSで成功に導きます。
                フォロワー増加、エンゲージメント向上、売上アップを実現しましょう。
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors">
                  <span className="text-lg">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-400 transition-colors">
                  <span className="text-lg">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="text-lg">📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors">
                  <span className="text-lg">🎵</span>
                </a>
              </div>
            </div>

            {/* サービス */}
            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">SNSアカウント運用</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">コンテンツ制作</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">インフルエンサーマーケティング</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">広告運用</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">データ分析</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">コンサルティング</a></li>
              </ul>
            </div>

            {/* 会社情報 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">代表メッセージ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">チーム紹介</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">採用情報</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">利用規約</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 SNS運営プロ. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">プライバシーポリシー</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">利用規約</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">お問い合わせ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
