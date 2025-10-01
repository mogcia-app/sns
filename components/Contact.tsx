'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理
    console.log('Form submitted:', formData)
    alert('お問い合わせありがとうございます。担当者よりご連絡いたします。')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              まずは無料相談から始めましょう。お気軽にお問い合わせください
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* お問い合わせフォーム */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">無料相談を申し込む</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="example@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="株式会社サンプル"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    ご希望のサービス
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="sns-management">SNSアカウント運用</option>
                    <option value="content-creation">コンテンツ制作</option>
                    <option value="influencer-marketing">インフルエンサーマーケティング</option>
                    <option value="advertising">広告運用</option>
                    <option value="consulting">コンサルティング</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    メッセージ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="ご質問やご要望をお聞かせください"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all"
                >
                  無料相談を申し込む
                </button>
              </form>
            </div>

            {/* 連絡先情報 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">お問い合わせ情報</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-pink-600 text-sm">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">メール</p>
                      <p className="text-gray-600">info@sns-unei-pro.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-pink-600 text-sm">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">電話</p>
                      <p className="text-gray-600">03-1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-pink-600 text-sm">🕒</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">営業時間</p>
                      <p className="text-gray-600">平日 9:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">無料相談の流れ</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span>お問い合わせフォームから申し込み</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span>担当者より24時間以内にご連絡</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span>オンラインまたは対面で無料相談</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <span>最適なプランをご提案</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
