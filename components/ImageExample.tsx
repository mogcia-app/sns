import Image from 'next/image'

const ImageExample = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">画像の使用例</h2>
      
      {/* 通常の画像 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">通常の画像</h3>
        <Image
          src="/images/hero-image.jpg"
          alt="ヒーロー画像"
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* レスポンシブ画像 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">レスポンシブ画像</h3>
        <div className="relative w-full h-64">
          <Image
            src="/images/service-image.jpg"
            alt="サービス画像"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* アイコン画像 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">アイコン画像</h3>
        <Image
          src="/icons/logo.svg"
          alt="ロゴ"
          width={64}
          height={64}
          className="inline-block"
        />
      </div>
    </div>
  )
}

export default ImageExample
