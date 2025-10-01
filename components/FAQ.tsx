'use client'

import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'SNS運用の費用はどのくらいかかりますか？',
      answer: 'サービス内容や運用規模によって異なりますが、月額50,000円〜からご提供しております。お客様のビジネス規模や目標に合わせて、最適なプランをご提案いたします。詳細は無料相談でお聞かせください。'
    },
    {
      question: 'どのSNSプラットフォームに対応していますか？',
      answer: 'Instagram、Twitter、Facebook、TikTok、YouTube、LinkedInなど、主要なSNSプラットフォームすべてに対応しております。お客様のターゲット層に合わせて、最適なプラットフォームを選択いたします。'
    },
    {
      question: '運用開始から効果が出るまでどのくらいかかりますか？',
      answer: '一般的に3ヶ月程度で効果を実感いただけるケースが多いです。ただし、アカウントの状況や目標によって異なります。継続的な改善により、6ヶ月後には大幅な成長を実現しているお客様が多数いらっしゃいます。'
    },
    {
      question: 'AIを活用したSNS運用とは具体的にどのようなものですか？',
      answer: 'AI技術を活用して、最適な投稿タイミングの予測、効果的なハッシュタグの自動生成、コンテンツの品質分析、将来のパフォーマンス予測などを行います。これにより、従来の手動運用を大幅に効率化し、より高い成果を実現できます。'
    },
    {
      question: '既存のSNSアカウントを引き継いでもらえますか？',
      answer: 'はい、既存のアカウントをそのまま引き継いで運用いたします。現在のフォロワーや投稿履歴を活かしながら、より効果的な運用戦略に改善していきます。アカウントの移行や権限設定もサポートいたします。'
    },
    {
      question: '月次レポートはどのような内容ですか？',
      answer: 'フォロワー数の変化、エンゲージメント率、リーチ数、投稿のパフォーマンス、競合分析、改善提案などを含む詳細なレポートをお渡しします。データに基づいた具体的な改善点もご提案いたします。'
    },
    {
      question: '契約期間はどのくらいですか？',
      answer: '最低契約期間は3ヶ月となっております。SNS運用は継続性が重要であるため、長期的な視点での運用をお勧めしております。契約期間中はいつでもプランの変更や追加サービスをご利用いただけます。'
    },
    {
      question: '緊急時の対応はありますか？',
      answer: '24時間365日のサポート体制を整えております。SNS上での炎上や緊急事態が発生した場合は、迅速に対応いたします。また、定期的なモニタリングにより、問題の早期発見と対策を行います。'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600">
              SNS運用に関するよくあるご質問にお答えします
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className={`text-2xl text-pink-500 transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              他にもご質問がございましたら、お気軽にお問い合わせください
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg"
            >
              お問い合わせはこちら
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
