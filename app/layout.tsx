import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SNS運営プロ | プロのSNS運用でビジネス成長を実現',
  description: 'プロのSNS運用チームが、あなたのビジネスをSNSで成功に導きます。フォロワー増加、エンゲージメント向上、売上アップを実現しましょう。',
  keywords: 'SNS運用, ソーシャルメディア, マーケティング, Instagram, Twitter, Facebook, TikTok',
  openGraph: {
    title: 'SNS運営プロ | プロのSNS運用でビジネス成長を実現',
    description: 'プロのSNS運用チームが、あなたのビジネスをSNSで成功に導きます。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
