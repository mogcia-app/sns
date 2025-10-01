const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* 会社情報 */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg"></div>
                <h3 className="text-xl font-bold">MOGCIA</h3>
              </div>
              <p className="text-gray-300 text-sm">
                プロのSNS運用チームが、あなたのビジネスをSNSで成功に導きます。
              </p>
            </div>

            {/* サービス */}
            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-gray-300 hover:text-pink-400 transition-colors">SNSアカウント運用</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-pink-400 transition-colors">コンテンツ制作</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-pink-400 transition-colors">AIを活用したSNS運用</a></li>
              </ul>
            </div>

            {/* お問い合わせ */}
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-300">
                  <span className="block text-xs text-gray-400 mb-1">メール</span>
                  <a href="mailto:info@mogcia.jp" className="hover:text-pink-400 transition-colors">info@mogcia.jp</a>
                </li>
                <li className="text-gray-300">
                  <span className="block text-xs text-gray-400 mb-1">電話</span>
                  <a href="tel:092-517-9804" className="hover:text-pink-400 transition-colors">092-517-9804</a>
                </li>
                <li className="text-gray-400 text-xs">
                  営業時間: 平日 9:00-18:00
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <p className="text-gray-400">
                © 2023 MOGCIA. All rights reserved.
              </p>
              <a href="mailto:info@mogcia.jp" className="text-gray-400 hover:text-pink-400 transition-colors mt-4 md:mt-0">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
