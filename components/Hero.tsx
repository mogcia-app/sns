const Hero = () => {
  return (
    <section id="home" className="relative py-32 overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/istockphoto-1315956492-1024x1024.jpg)'
          }}
        ></div>
        {/* 画像の上にオーバーレイ */}
       
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                SNS運用で
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                  ビジネス成長
                </span>
                を実現
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                プロのSNS運用チームが、あなたのビジネスをSNSで成功に導きます。
                フォロワー増加、エンゲージメント向上、売上アップを実現しましょう。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg">
                  無料相談を申し込む
                </button>
                <button className="px-8 py-4 border-2 border-pink-500 text-pink-500 text-lg font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all">
                  サービス詳細を見る
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
