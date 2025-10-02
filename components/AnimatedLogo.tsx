'use client'

const AnimatedLogo = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-pink-50 to-rose-50 overflow-hidden">
      <div className="relative">
        {/* アニメーション用のコンテナ */}
        <div className="flex animate-scroll">
          {/* 1つ目のセット */}
          <div className="flex items-center space-x-8 whitespace-nowrap">
            <span className="text-8xl font-bold text-pink-200 opacity-60">MOGCIA</span>
            <span className="text-8xl font-bold text-pink-200 opacity-60">MOGCIA</span>
            <span className="text-8xl font-bold text-pink-200 opacity-60">MOGCIA</span>
            <span className="text-8xl font-bold text-pink-200 opacity-60">MOGCIA</span>
            <span className="text-8xl font-bold text-pink-200 opacity-60">MOGCIA</span>
          </div>
          
          {/* 2つ目のセット（シームレスなループのため） */}
          <div className="flex items-center space-x-8 whitespace-nowrap">
            <span className="text-8xl font-bold text-pink-200 opacity-60">MOGCIA</span>
            <span className="text-8xl font-bold text-pink-200 opacity-60">MOGCIA</span>
            <span className="text-8xl font-bold text-pink-200 opacity-60">MOGCIA</span>
            <span className="text-8xl font-bold text-pink-200 opacity-60">MOGCIA</span>
            <span className="text-8xl font-bold text-pink-200 opacity-60">MOGCIA</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default AnimatedLogo
