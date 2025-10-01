'use client'

import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    // formrunのスクリプトを動的に読み込む
    const script = document.createElement('script')
    script.src = 'https://sdk.form.run/js/v2/formrun.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // クリーンアップ
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

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
              <form className="formrun space-y-6" action="https://form.run/api/v1/r/581xqrnrk27wwnz4fcwisxh6" method="post">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                  <input
                    name="お名前"
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">会社名</label>
                  <input
                    name="会社名"
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="株式会社サンプル"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス [必須]</label>
                  <input
                    name="メールアドレス"
                    type="text"
                    data-formrun-type="email"
                    data-formrun-required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="example@company.com"
                  />
                  <div data-formrun-show-if-error="メールアドレス" className="text-red-500 text-sm mt-1">
                    メールアドレスを正しく入力してください
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">お問い合わせ [必須]</label>
                  <textarea
                    name="お問い合わせ"
                    data-formrun-required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="ご質問やご要望をお聞かせください"
                  />
                  <div data-formrun-show-if-error="お問い合わせ" className="text-red-500 text-sm mt-1">
                    お問い合わせ内容を入力してください
                  </div>
                </div>

                <div>
                  <label className="flex items-center text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="個人情報利用同意"
                      data-formrun-required
                      className="mr-2 w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                    />
                    個人情報利用同意 [必須]
                  </label>
                  <div data-formrun-show-if-error="個人情報利用同意" className="text-red-500 text-sm mt-1">
                    同意してください
                  </div>
                </div>

                {/* ボット投稿をブロックするためのタグ */}
                <div className="_formrun_gotcha">
                  <style dangerouslySetInnerHTML={{__html: `._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}`}} />
                  <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
                  <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} />
                </div>

                <button
                  type="submit"
                  data-formrun-error-text="未入力の項目があります"
                  data-formrun-submitting-text="送信中..."
                  className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all"
                >
                  送信
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
                      <p className="text-gray-600">info@mogcia.jp</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-pink-600 text-sm">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">電話</p>
                      <p className="text-gray-600">092-517-9804</p>
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
