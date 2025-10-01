const VideoExample = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">動画の使用例</h2>
      
      {/* 通常の動画 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">通常の動画</h3>
        <video
          src="/videos/hero-video.mp4"
          controls
          className="w-full max-w-2xl rounded-lg"
          poster="/images/video-poster.jpg"
        >
          お使いのブラウザは動画タグをサポートしていません。
        </video>
      </div>

      {/* 自動再生動画（ミュート） */}
      <div>
        <h3 className="text-lg font-semibold mb-4">自動再生動画（ミュート）</h3>
        <video
          src="/videos/background-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-w-2xl rounded-lg"
        >
          お使いのブラウザは動画タグをサポートしていません。
        </video>
      </div>

      {/* レスポンシブ動画 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">レスポンシブ動画</h3>
        <div className="relative w-full h-64">
          <video
            src="/videos/responsive-video.mp4"
            controls
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          >
            お使いのブラウザは動画タグをサポートしていません。
          </video>
        </div>
      </div>
    </div>
  )
}

export default VideoExample
