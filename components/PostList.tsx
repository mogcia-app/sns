'use client'

import { useState } from 'react'

interface Post {
  id: number
  content: string
  author: string
  timestamp: Date
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      content: 'こんにちは！React + TypeScript + Tailwind CSSでSNSアプリを作成中です。',
      author: '開発者',
      timestamp: new Date('2024-01-01T10:00:00')
    },
    {
      id: 2,
      content: 'Tailwind CSSを使うと、スタイリングがとても簡単になりますね！',
      author: 'デザイナー',
      timestamp: new Date('2024-01-01T11:30:00')
    }
  ])

  const handlePostCreated = (newPost: Post) => {
    setPosts(prev => [newPost, ...prev])
  }

  const formatTime = (date: Date) => {
    return date.toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">タイムライン</h2>
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              {post.author.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold text-gray-900">{post.author}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{formatTime(post.timestamp)}</span>
              </div>
              <p className="text-gray-800 leading-relaxed">{post.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList
